'use server';

import { Footer } from '@/app/[lang]/(public-views)/components/server.footer.section';
import { Navbar } from '@/app/[lang]/(public-views)/components/server.navbar.section';
import { AppNextLayout } from '@/lib/models/page';

export default async function PublicLayout(props: AppNextLayout) {
  const { lang } = await props.params;
  const children = props.children;

  return (
    <main>
      <section className="bg-[url('/bg-image.png')] min-h-screen bg-center bg-cover">
        <div className="md:p-6 p-5 container mx-auto">
          <Navbar lang={lang} />
          <section className="mt-14 md:mt-16">{children}</section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
