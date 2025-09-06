import FoodSlider from '@/components/feature/home/FoodSlider';
import MainSlider from '@/components/feature/home/MainSlider';

export default function HomePage() {
  const TEMP_MAIN_IMAGES = [
    { url: 'https://via.placeholder.com/600x300', main: 'Main Title', sub: 'Sub Title goes here' },
    { url: 'https://via.placeholder.com/600x300', main: 'Main Title', sub: 'Sub Title goes here' },
    { url: 'https://via.placeholder.com/600x300', main: 'Main Title', sub: 'Sub Title goes here' },
  ];

  const TEMP_FOOD_IMAGES = [
    'https://via.placeholder.com/',
    'https://via.placeholder.com/',
    'https://via.placeholder.com/',
    'https://via.placeholder.com/',
    'https://via.placeholder.com/',
  ];

  return (
    <div className="flex flex-col gap-4">
      <div>
        <MainSlider images={TEMP_MAIN_IMAGES} />
      </div>
      <div>
        <FoodSlider images={TEMP_FOOD_IMAGES} />
      </div>
    </div>
  );
}
