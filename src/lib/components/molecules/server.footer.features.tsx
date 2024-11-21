'use server';

import { footerContents } from '@/lib/constants';
import Image from 'next/image';

export async function FooterFeaturesList() {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 md:mt-0 mt-10">
      {footerContents.map((content, index) => (
        <div key={index} className="flex flex-col gap-4 p-4 bg-white rounded-xl">
          <div className="bg-[#EFF1F6] rounded-lg p-2 w-fit">
            <Image src={content.icon} alt="icon" width={24} height={24} />
          </div>
          <h3 className="font-black text-sm text-[#343741]">{content.title}</h3>
          <div className="flex items-center gap-2">
            <p>바로가기</p>
            <Image src="/arrow-right.svg" alt="icon" width={24} height={24} />
          </div>
        </div>
      ))}
    </section>
  );
}
