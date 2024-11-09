'use client';

import Tooltip from '@/lib/components/tooltip';
import { AppTransition } from '@/lib/components/transition';
import { Lang } from '@/lib/models/lang';
import { getLocale } from '@/lib/utils/get-locale';
import Image from 'next/image';
import React, { useState } from 'react';

const profiles = [
  {
    name: 'Abhishek Gupta',
    position: '마케팅',
    experience: '2y+',
    skills: ['마케팅 콘텐츠 제작', '인스타그램 관리', '트위터 관리', '블로그 글 작성'],
    image: '/profile-image.png',
    flag: '/country.png',
  },
  {
    name: 'Jane Doe',
    position: '개발자',
    experience: '3y+',
    skills: ['웹 개발', '프론트엔드', 'UI 디자인', 'API 통합', '백엔드'],
    image: '/profile-image.png',
    flag: '/country.png',
  },
  {
    name: 'John Smith',
    position: '디자이너',
    experience: '5y+',
    skills: ['UX 디자인', '그래픽 디자인', '프로토타이핑', '브랜딩', 'UI 디자인'],
    image: '/profile-image.png',
    flag: '/country.png',
  },
];

export function CardSlider({ lang }: { lang: Lang }) {
  const t = getLocale(lang);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? profiles.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === profiles.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="lg:w-1/2 w-full flex justify-center items-center">
      <AppTransition direction="up">
        <div className="flex justify-center">
          <Tooltip anchorPosition="center">
            <p className="text-#40E2E8 font-black text-lg">{t('home.headlineWorkType')}</p>
          </Tooltip>
        </div>
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
                <div className="bg-white rounded-xl shadow-lg p-6 text-center h-full">
                  <div className="relative size-20 sm:size-28 mx-auto mb-4">
                    <Image
                      src={profile.image}
                      alt={profile.name}
                      width={140}
                      height={140}
                      className="rounded-full object-cover"
                    />
                    <Image
                      src={profile.flag}
                      alt="Country Flag"
                      width={25}
                      height={20}
                      className="absolute bottom-0 right-0 w-6 h-4 rounded-sm border border-white"
                    />
                  </div>

                  <h3 className="text-xl font-bold">{profile.name}</h3>
                  <p className="text-[#4A77FF] font-bold">
                    {profile.position} · {profile.experience}
                  </p>

                  <div className="mt-4 space-y-2">
                    {profile.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="px-3 py-1 text-[#5E626F] text-xs sm:text-sm border rounded-lg border-[#C1C5CF] inline-block ml-2 font-bold">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
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
