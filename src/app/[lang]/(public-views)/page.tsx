'use server';

import { CardSlider } from '@/app/[lang]/(public-views)/components/client.card.slider';
import { Headline } from '@/app/[lang]/(public-views)/components/client.headline.section';
import { AppNextPage } from '@/lib/models/page';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home',
  };
}

export default async function Page(props: AppNextPage) {
  const { lang } = await props.params;

  return (
    <>
      <div className="flex lg:flex-row flex-col gap-10">
        <Headline lang={lang} />
        <CardSlider lang={lang} />
      </div>
    </>
  );
}
