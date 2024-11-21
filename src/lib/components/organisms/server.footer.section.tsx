'use server';

import { FooterContact } from '@/lib/components/molecules/server.footer.contact';
import { FooterFeaturesList } from '@/lib/components/molecules/server.footer.features';
import { FooterInformation } from '@/lib/components/molecules/server.footer.information';
import { FooterTrademark } from '@/lib/components/molecules/server.footer.trademark';

export async function Footer() {
  return (
    <main className="bg-[#FBFBFB] py-14 px-5">
      <footer className="container mx-auto flex flex-col gap-12">
        <aside className="flex md:flex-row flex-col items-start justify-between w-full">
          <FooterContact />
          <FooterFeaturesList />
        </aside>
        <FooterInformation />
        <FooterTrademark />
      </footer>
    </main>
  );
}
