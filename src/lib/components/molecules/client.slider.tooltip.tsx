'use client';

import Tooltip from '@/lib/components/atoms/tooltip';
import { Lang } from '@/lib/models/lang';
import { getLocale } from '@/lib/utils/get-locale';
import Image from 'next/image';

export function SliderTooltip({ lang }: { lang: Lang }) {
  const t = getLocale(lang);

  return (
    <div className="flex justify-center">
      <Tooltip anchorPosition="center">
        <div className="flex items-center gap-2">
          <Image src="/dollar.png" alt="dollar" width={26} height={26} />
          <p className="text-[#00C696] font-black text-lg">{t('home.cardSliderTooltip')}</p>
        </div>
      </Tooltip>
    </div>
  );
}
