'use client';

import { BenefitSection } from '@/app/[lang]/(public-views)/components/client.benefit.section';
import Tooltip from '@/lib/components/tooltip';
import { AppTransition } from '@/lib/components/transition';
import { Lang } from '@/lib/models/lang';
import { getLocale } from '@/lib/utils/get-locale';

export function Headline({ lang }: { lang: Lang }) {
  const t = getLocale(lang);

  return (
    <aside className="flex flex-col lg:w-1/2 w-full">
      <AppTransition
        direction="fadeIn"
        transition={{
          delay: 0.3,
        }}>
        <Tooltip>
          <p className="text-[#40E2E8] font-black text-lg">{t('home.headlineWorkType')}</p>
        </Tooltip>
      </AppTransition>

      <AppTransition direction="up">
        <div className="flex flex-col gap-4 mt-5">
          <p
            className="text-4xl md:text-[48px] leading-[48px] md:leading-[62px] font-black text-white"
            dangerouslySetInnerHTML={{ __html: t('home.headlineTitle') }}
          />
          <p
            className="text-lg md:text-2xl leading-7 md:leading-10 font-black text-white"
            dangerouslySetInnerHTML={{ __html: t('home.headlineSubTitle') }}
          />

          <p className="hidden md:block text-2xl font-black text-white underline cursor-pointer">
            {t('home.headlinecta')}
          </p>
        </div>
      </AppTransition>
      <BenefitSection lang={lang} />
    </aside>
  );
}
