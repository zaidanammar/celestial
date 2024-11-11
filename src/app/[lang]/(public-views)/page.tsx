'use server';

import { CardSlider } from '@/app/[lang]/(public-views)/components/client.card.slider';
import { Headline } from '@/app/[lang]/(public-views)/components/client.headline.section';
import { ServiceSection } from '@/app/[lang]/(public-views)/components/client.service.section';
import { AppNextPage } from '@/lib/models/page';
import { getProfiles } from '@/lib/services/get-profile-list';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home',
  };
}

export default async function Page(props: AppNextPage) {
  const { lang } = await props.params;
  const profileData = await getProfiles();

  return (
    <>
      <section className="flex lg:flex-row flex-col gap-10">
        <Headline lang={lang} />
        <CardSlider lang={lang} profiles={profileData} />
      </section>
      <ServiceSection lang={lang} />
    </>
  );
}
