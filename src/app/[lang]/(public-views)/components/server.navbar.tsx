'use server';

import { Lang } from '@/lib/models/lang';
import { getLocale } from '@/lib/utils/get-locale';
import Image from 'next/image';

export async function Navbar({ lang }: { lang: Lang }) {
  const t = getLocale(lang);

  return (
    <aside className="flex justify-between items-center">
      <div>
        <Image src="/hypehire-logo.png" alt="Logo" width={114} height={21} />
      </div>
      <div>
        <p className="text-white font-black">{t('navbar.title')}</p>
      </div>

      <div className="bg-white py-2 px-6 rounded-lg cursor-pointer">
        <p className="text-[#4A77FF] font-black">{t('navbar.contactus')}</p>
      </div>
    </aside>
  );
}
