'use server';

import Image from 'next/image';

const logo = '/logo-color.png';

export async function FooterContact() {
  return (
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
  );
}
