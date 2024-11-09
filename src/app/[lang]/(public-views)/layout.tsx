import { Navbar } from '@/app/[lang]/(public-views)/components/server.navbar';
import { AppNextLayout } from '@/lib/models/page';

export default function PublicLayout({ children, params: { lang } }: AppNextLayout) {
  return (
    <main className="bg-[url('/bg-image.png')] h-screen bg-center bg-cover ">
      <div className="md:p-6 p-4 container mx-auto">
        <Navbar lang={lang} />
        <section className="mt-10">{children}</section>
      </div>
    </main>
  );
}
