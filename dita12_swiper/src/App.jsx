import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {
  const images = [
    'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80',
    'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=80',
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80',
    'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?w=1200&q=80',
    'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80',
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80',
    'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1200&q=80',
    'https://images.unsplash.com/photo-1506898663212-6a7c8b7f86b7?w=1200&q=80',
    'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80'
  ];

  // ensure swiper fills the viewport and images cover their slides
  React.useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .mySwiper,
      .mySwiper .swiper-wrapper,
      .mySwiper .swiper-slide {
        height: 100vh !important;
      }
      .mySwiper img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, []);

  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      modules={[Pagination]}
      className="mySwiper"
    >
      {images.map((src, i) => {
        const srcToUse =
          i === 6
            ? 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=1200&q=80'
            : i === 7
            ? 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80'
            : src;
        return (
          <SwiperSlide key={i}>
            <img
              src={srcToUse}
              alt={`Slide ${i + 1}`}
              loading="lazy"
              style={{ width: '100%', height: 950, objectFit: 'cover' }}
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = 'https://via.placeholder.com/1200x800?text=Image+Unavailable';
              }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
