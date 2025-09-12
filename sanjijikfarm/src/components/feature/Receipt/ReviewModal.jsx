import { useEffect, useState } from 'react';

import EmptyStar from '../../../assets/icons/emptystar.svg';
import GreenStar from '../../../assets/icons/greenstar.svg';
import PicUpload from '../../../assets/icons/picupload.svg';

export default function ReviewModal({ item, onClose, isEditMode }) {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(null);
  const [reviewText, setReviewText] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (item) {
      setRating(item.rating || 0);
      setReviewText(item.reviewText || '');
      setImages(item.images || []);
    }
  }, [item]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prev) => [...prev, ...previews]);
  };

  const handleImageRemove = (index) => {
    setImages((prev) => {
      const newImages = [...prev];
      if (newImages[index].preview) {
        URL.revokeObjectURL(newImages[index].preview);
      }
      newImages.splice(index, 1);
      return newImages;
    });
  };

  const handleSubmit = () => {
    console.log(isEditMode ? '수정된 리뷰 제출' : '새 리뷰 제출');
    console.log('제출된 별점:', rating);
    console.log('리뷰 내용:', reviewText);
    console.log('업로드된 이미지:', images);
    onClose();
  };

  return (
    <div
      className="absolute inset-0 z-[1000] flex items-center justify-center bg-black/30 backdrop-blur-sm"
      onClick={onClose} // 배경 클릭 시 닫기
    >
      <div
        className="relative max-h-[90vh] w-[20rem] overflow-y-auto rounded-xl bg-white p-[1.5rem] shadow-lg"
        onClick={(e) => e.stopPropagation()} // 모달 내부 클릭은 닫기 방지
      >
        {/* 닫기 버튼 */}
        <button
          onClick={onClose}
          className="absolute top-[1rem] right-[1rem] text-[1.25rem] text-gray-400 hover:text-black"
        >
          ×
        </button>

        {/* 상품명 + 코드 */}
        <div className="mb-[0.5rem]">
          <p className="text-[1rem] leading-tight font-bold text-black">{item?.name}</p>
          <p className="text-body-2-med mt-[0.3rem] text-gray-700">{item?.code}</p>
        </div>

        {/* 별점 */}
        <div className="mt-[0.5rem] mb-[0.5rem] flex justify-center space-x-[0.25rem]">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              onClick={() => setRating(i + 1)}
              onMouseEnter={() => setHovered(i + 1)}
              onMouseLeave={() => setHovered(null)}
              className="h-[1.5rem] w-[1.5rem] cursor-pointer"
            >
              {i < (hovered ?? rating) ? (
                <GreenStar className="h-full w-full" />
              ) : (
                <EmptyStar className="h-full w-full" />
              )}
            </div>
          ))}
        </div>

        {/* 리뷰 텍스트 */}
        <textarea
          placeholder="구체적인 상세 리뷰를 작성해주세요."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          className="text-body-2-med bg-pale-green h-[6rem] w-full resize-none rounded-[0.5rem] p-[0.75rem] leading-relaxed text-gray-800 placeholder:text-gray-400"
        />

        {/* 이미지 업로드 */}
        <div className="mt-[0.75rem] space-y-[0.5rem]">
          {/* 업로드 버튼 */}
          <div className="flex justify-start">
            <label className="relative flex h-[1rem] w-[1.2rem] cursor-pointer items-center justify-center rounded-md border border-gray-300">
              <PicUpload className="h-[0.5rem] w-[0.5rem] text-gray-500" />
              <input type="file" className="hidden" multiple accept="image/*" onChange={handleImageChange} />
            </label>
          </div>

          {/* 이미지 목록 */}
          {images.length > 0 && (
            <div className="flex gap-[0.5rem] overflow-x-auto">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative h-[3.5rem] w-[3.5rem] min-w-[3.5rem] shrink-0 overflow-hidden rounded-md bg-gray-200"
                >
                  <img src={img.preview || img} alt={`uploaded-${index}`} className="h-full w-full object-cover" />
                  <button
                    className="bg-opacity-50 absolute top-[0.2rem] right-[0.2rem] flex h-[1rem] w-[1rem] items-center justify-center rounded-full bg-black text-[0.75rem] text-white"
                    onClick={() => handleImageRemove(index)}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 작성 완료 버튼 */}
        <button
          className="text-body-2-med mx-auto mt-[0.75rem] block w-[5rem] rounded-md bg-gray-200 py-[0.3rem] text-[0.87rem] transition hover:bg-gray-400"
          onClick={handleSubmit}
          disabled={rating === 0 || reviewText.trim() === ''}
        >
          {isEditMode ? '수정 완료' : '작성 완료'}
        </button>
      </div>
    </div>
  );
}
