'use client';

import { benefits } from '@/app/[lang]/(public-views)/constant';
import AppTransition from '@/lib/components/transition';
import { Lang } from '@/lib/models/lang';
import { getLocale, LocalePaths } from '@/lib/utils/get-locale';

export function BenefitSection({ lang }: { lang: Lang }) {
  const t = getLocale(lang);

  return (
    <aside className="mt-10 hidden md:flex gap-6">
      {benefits.map((benefit, index) => (
        <AppTransition
          key={index}
          direction="fadeIn"
          transition={{
            delay: 0.3 * index,
          }}>
          <div className="flex flex-col gap-2 border-t border-white pt-4">
            <h3 className="font-black text-lg text-white">{t(`home.${benefit.title}` as LocalePaths)}</h3>
            <p className="font-black text-md text-white">{t(`home.${benefit.description}` as LocalePaths)}</p>
          </div>
        </AppTransition>
      ))}
    </aside>
  );
}
