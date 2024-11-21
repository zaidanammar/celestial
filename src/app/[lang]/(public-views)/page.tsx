'use server';

import { CardSlider } from '@/lib/components/organisms/client.card.slider';
import { Headline } from '@/lib/components/organisms/client.headline.section';
import { ServiceSection } from '@/lib/components/organisms/server.service.section';
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
