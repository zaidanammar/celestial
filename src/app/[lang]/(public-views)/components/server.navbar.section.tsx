'use server';

import { Lang } from '@/lib/models/lang';
import { getLocale } from '@/lib/utils/get-locale';
import Image from 'next/image';

const logo = '/hypehire-logo.png';

export async function Navbar({ lang }: { lang: Lang }) {
  const t = getLocale(lang);

  return (
    <nav className="flex justify-between items-center">
      <div>
        <Image src={logo} alt="Logo" width={114} height={21} />
      </div>
      <div className="hidden md:block">
        <p className="text-white font-black">{t('home.navTitle')}</p>
      </div>

      <div className="bg-white py-2 px-6 rounded-lg cursor-pointer hidden md:block">
        <p className="text-[#4A77FF] font-black">{t('home.navContactus')}</p>
      </div>
    </nav>
  );
}
