'use client';

import AppTransition from '@/lib/components/transition';
import { Lang } from '@/lib/models/lang';
import { getLocale, LocalePaths } from '@/lib/utils/get-locale';
import Image from 'next/image';

const services = [
  {
    title: 'service1Title',
    icon: '/marketing-icon.svg',
  },
  {
    title: 'service2Title',
    icon: '/image-icon.svg',
  },
  {
    title: 'service3Title',
    icon: '/box-icon.svg',
  },
  {
    title: 'service4Title',
    icon: '/target-icon.svg',
  },
  {
    title: 'service5Title',
    icon: '/phone-icon.svg',
  },
];

export function ServiceSection({ lang }: { lang: Lang }) {
  const t = getLocale(lang);

  return (
    <aside className="my-14 hidden md:flex gap-6 overflow-x-auto">
      {services.map((service, index) => (
        <AppTransition
          key={index}
          direction="left"
          transition={{
            delay: 0.5 * index,
          }}>
          <div className="flex gap-4 items-center p-4 rounded-xl bg-white bg-opacity-20 min-w-[332px]">
            <div className="flex gap-4 items-center p-4 rounded-xl bg-white bg-opacity-40">
              <Image src={service.icon} alt="icon" width={24} height={24} />
            </div>
            <h3 className="font-black text-lg text-white">{t(`home.${service.title}` as LocalePaths)}</h3>
          </div>
        </AppTransition>
      ))}
    </aside>
  );
}
