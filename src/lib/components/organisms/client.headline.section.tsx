'use client';

import { BenefitList } from '@/lib/components/molecules/client.benefit.list';
import Tooltip from '@/lib/components/atoms/tooltip';
import { AppTransition } from '@/lib/components/atoms/transition';
import { Lang } from '@/lib/models/lang';
import { getLocale } from '@/lib/utils/get-locale';
import { HeadlineText } from '@/lib/components/molecules/client.headline.text';

export function Headline({ lang }: { lang: Lang }) {
  const t = getLocale(lang);

  return (
    <aside className="flex flex-col lg:w-1/2 w-full">
      <AppTransition
        direction="fadeIn"
        transition={{
          delay: 0.3,
        }}>
        <Tooltip className="lg:bg-white bg-[#8BC4FF]">
          <p className="lg:text-[#40E2E8] text-white font-black text-lg">{t('home.headlineWorkType')}</p>
        </Tooltip>
      </AppTransition>

      <HeadlineText lang={lang} />
      <BenefitList lang={lang} />
    </aside>
  );
}
