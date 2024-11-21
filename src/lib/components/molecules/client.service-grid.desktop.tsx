'use client';

import AppTransition from '@/lib/components/atoms/transition';
import { services } from '@/lib/constants';
import { Lang } from '@/lib/models/lang';
import { getLocale, LocalePaths } from '@/lib/utils/get-locale';
import Image from 'next/image';

export function ServiceGridDesktop({ lang }: { lang: Lang }) {
  const t = getLocale(lang);

  return (
    <section className="lg:flex hidden gap-6 overflow-x-auto">
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
    </section>
  );
}
