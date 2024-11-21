'use client';

import { AppTransition } from '@/lib/components/atoms/transition';
import { ProfileCard } from '@/lib/components/molecules/client.profile.card';
import { SliderTooltip } from '@/lib/components/molecules/client.slider.tooltip';
import { Lang } from '@/lib/models/lang';
import { GetProfileListResponse } from '@/lib/services/get-profile-list/types';
import React, { useState } from 'react';

type CardSliderProps = {
  lang: Lang;
  profiles: GetProfileListResponse;
};

export function CardSlider({ lang, profiles }: CardSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? profiles.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === profiles.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="lg:w-1/2 w-full flex justify-center items-center">
      <AppTransition direction="fadeIn">
        <SliderTooltip lang={lang} />
        <div className="mt-6 relative w-[250px] sm:w-[300px] h-[350px] sm:h-[400px]">
          <button
            onClick={handlePrev}
            className="absolute left-[-70px] sm:left-[-120px] top-1/2 transform -translate-y-1/2 p-2 text-white z-10 text-4xl">
            &lt;
          </button>

          {profiles.map((profile, index) => {
            const isActive = index === currentIndex;
            const isPrev = index === (currentIndex === 0 ? profiles.length - 1 : currentIndex - 1);
            const isNext = index === (currentIndex === profiles.length - 1 ? 0 : currentIndex + 1);

            let positionClass = 'opacity-0 scale-90';
            if (isActive) positionClass = 'z-20 opacity-100 scale-100';
            else if (isPrev) positionClass = 'z-10 opacity-70 -translate-x-[40px] sm:-translate-x-[80px] scale-90';
            else if (isNext) positionClass = 'z-10 opacity-70 translate-x-[40px] sm:translate-x-[80px] scale-90';

            return (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 transform ${positionClass}`}
                style={{ transition: 'transform 0.5s ease, opacity 0.5s ease' }}>
                <ProfileCard profile={profile} />
              </div>
            );
          })}

          <button
            onClick={handleNext}
            className="absolute right-[-70px] sm:right-[-120px] top-1/2 transform -translate-y-1/2 p-2 text-white rounded-full z-10 text-4xl">
            &gt;
          </button>
        </div>
      </AppTransition>
    </div>
  );
}
