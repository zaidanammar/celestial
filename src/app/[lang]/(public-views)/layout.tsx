import { Navbar } from '@/app/[lang]/(public-views)/components/server.navbar.section';
import { AppNextLayout } from '@/lib/models/page';

export default function PublicLayout({ children, params: { lang } }: AppNextLayout) {
  return (
    <main className="bg-[url('/bg-image.png')] min-h-screen bg-center bg-cover ">
      <div className="md:p-6 p-5 container mx-auto">
        <Navbar lang={lang} />
        <section className="mt-14 md:mt-20">{children}</section>
      </div>
    </main>
  );
}
