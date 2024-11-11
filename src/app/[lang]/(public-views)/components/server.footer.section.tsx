'use server';

import { footerContents, footerInformations } from '@/app/[lang]/(public-views)/constant';
import Image from 'next/image';

const logo = '/logo-color.png';

export async function Footer() {
  return (
    <main className="bg-[#FBFBFB] py-14 px-5">
      <footer className="container mx-auto flex flex-col gap-12">
        <aside className="flex md:flex-row flex-col items-start justify-between w-full">
          <section className="flex flex-col gap-4">
            <Image src={logo} alt="Logo" width={187} height={34} />
            <p className="font-black text-sm text-[#343741]">
              우리는 국가의 장벽을 넘어 최고의 인재를
              <br /> 매칭해드립니다.
            </p>
            <div className="flex flex-col gap-2">
              <p className="font-black text-sm text-[#5E626F]">010-0000-0000</p>
              <p className="font-black text-sm text-[#5E626F]">aaaaa@naver.com</p>
            </div>
          </section>

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
        </aside>

        <aside className="flex flex-wrap md:gap-14 gap-8">
          {footerInformations.map((information, index) => (
            <div key={index} className="flex flex-col gap-2">
              <h3 className="font-black text-sm text-[#343741]">{information.title}</h3>
              <p className="font-black text-sm text-[#5E626F]">{information.subtitle}</p>
              <p className="font-black text-sm text-[#5E626F]" dangerouslySetInnerHTML={{ __html: information.desc }} />
            </div>
          ))}
        </aside>

        <div>
          <span className="font-black text-sm text-[#5E626F]">ⓒ 2023 Hyperhire</span>
        </div>
      </footer>
    </main>
  );
}
