import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Slide {
  id: number;
  content: string;
}

const CarouselNav: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    draggable: true,
    centerMode: true,
    centerPadding: '60px',
    afterChange: (current: number) => setActiveIndex(current),
  };

  const slides: Slide[] = [
    { id: 1, content: 'Filmes' },
    { id: 2, content: 'Séries' },
    { id: 3, content: 'Canais' },
    { id: 4, content: 'Infantil' },
    { id: 5, content: 'Terror' },
  ];

  return (
    <div>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="relative mb-6"
            tabIndex={0}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(null)}
          >
            <div className="nav-tab">
              <div className="content text-center">{slide.content}</div>
            </div>
            {focusedIndex === index && (
              <div className="nav-tab-active absolute bottom-0 left-0 right-0"></div>
            )}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselNav;
