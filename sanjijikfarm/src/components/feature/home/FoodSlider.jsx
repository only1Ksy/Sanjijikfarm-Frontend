import 'swiper/css';
import 'swiper/css/effect-coverflow';

import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function FoodSlider({ images }) {
  return (
    <Swiper
      effect="coverflow"
      grabCursor={true}
      centeredSlides={true}
      slidesPerView="auto"
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Autoplay]}
      className="w-full"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index} className="!h-52 !w-52 bg-cover bg-center transition-transform duration-300">
          <img
            src={img.url}
            className="bg-pale-green block h-full w-full rounded-lg object-cover"
            alt={`Main Slide ${index + 1}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
