'use server';

import { footerInformations } from '@/lib/constants';

export async function FooterInformation() {
  return (
    <aside className="flex flex-wrap md:gap-14 gap-8">
      {footerInformations.map((information, index) => (
        <div key={index} className="flex flex-col gap-2">
          <h3 className="font-black text-sm text-[#343741]">{information.title}</h3>
          <p className="font-black text-sm text-[#5E626F]">{information.subtitle}</p>
          <p className="font-black text-sm text-[#5E626F]" dangerouslySetInnerHTML={{ __html: information.desc }} />
        </div>
      ))}
    </aside>
  );
}
