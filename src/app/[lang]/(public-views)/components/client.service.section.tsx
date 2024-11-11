'use client';

import { services } from '@/app/[lang]/(public-views)/constant';
import AppTransition from '@/lib/components/transition';
import { Lang } from '@/lib/models/lang';
import { getLocale, LocalePaths } from '@/lib/utils/get-locale';
import Image from 'next/image';

export function ServiceSection({ lang }: { lang: Lang }) {
  const t = getLocale(lang);

  return (
    <aside className="my-14">
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

      <section className="lg:hidden grid grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="bg-[#E8ECFF] rounded-md">
              <Image src="/check-icon.svg" alt="icon" width={20} height={20} />
            </div>
            <p className="font-black text-base text-white">{t(`home.${service.title}` as LocalePaths)}</p>
          </div>
        ))}
      </section>

      <section className="lg:hidden block mt-5">
        <p className="font-black text-base text-[#FBFF23] underline">개발자가 필요하신가요?</p>
      </section>
    </aside>
  );
}
