'use client';

import AppTransition from '@/lib/components/atoms/transition';
import { services } from '@/lib/constants';
import { Lang } from '@/lib/models/lang';
import { getLocale, LocalePaths } from '@/lib/utils/get-locale';
import Image from 'next/image';

export function ServiceGridMobile({ lang }: { lang: Lang }) {
  const t = getLocale(lang);

  return (
    <section className="lg:hidden grid grid-cols-2">
      {services.map((service, index) => (
        <AppTransition key={index}>
          <div className="flex items-center gap-4">
            <div className="bg-[#E8ECFF] rounded-md">
              <Image src="/check-icon.svg" alt="icon" width={20} height={20} />
            </div>
            <p className="font-black text-base text-white">{t(`home.${service.title}` as LocalePaths)}</p>
          </div>
        </AppTransition>
      ))}
    </section>
  );
}
