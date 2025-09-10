import { useState } from 'react';

export default function ReceiptPage() {
  const [image, setImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    if (!image) {
      alert('이미지를 먼저 선택해주세요!');
      return;
    }

    // TODO: 업로드 API 연동
    console.log('업로드 시작:', image);
  };

  return (
    <div className="mx-auto w-full max-w-md px-4 py-8">
      <h1 className="text-title-3 mb-5 text-center font-bold">영수증 업로드</h1>

      {/* 이미지 업로드 박스 (작게!) */}
      <div className="relative mx-auto mb-6 flex h-[400px] w-[230px] items-center justify-center overflow-hidden rounded-md border-2 border-dashed bg-gray-100">
        {image ? (
          <>
            <img src={image} alt="영수증 미리보기" className="h-full w-full object-contain" />
            <label className="text-body-2 absolute right-2 bottom-2 cursor-pointer rounded bg-white px-3 py-1 text-black transition hover:opacity-90">
              변경
              <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
            </label>
          </>
        ) : (
          <label className="flex cursor-pointer flex-col items-center justify-center text-sm text-gray-400">
            <span>사진 업로드</span>
            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          </label>
        )}
      </div>

      {/* 업로드 버튼 */}
      <button
        onClick={handleUpload}
        className="bg-main-green mx-auto block w-[80%] rounded-md py-2 text-white transition hover:bg-green-600"
      >
        업로드 하기
      </button>
    </div>
  );
}
