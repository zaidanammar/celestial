'use server';

import { Footer } from '@/lib/components/organisms/server.footer.section';
import { Navbar } from '@/lib/components/organisms/server.navbar.section';
import { AppNextLayout } from '@/lib/models/page';

export default async function PublicLayout(props: AppNextLayout) {
  const { lang } = await props.params;
  const children = props.children;

  return (
    <main>
      <section className="bg-[url('/bg-image.png')] min-h-screen bg-center bg-cover">
        <div className="lg:p-6 p-5 container mx-auto">
          <Navbar lang={lang} />
          <section className="mt-14 lg:mt-16">{children}</section>
        </div>
      </section>
      <Footer />
    </main>
  );
}
