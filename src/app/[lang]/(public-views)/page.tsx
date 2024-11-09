'use server';

import { AppNextPage } from '@/lib/models/page';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Home',
  };
}

export default async function Page({ params: { lang } }: AppNextPage) {
  return <h1>Hello, Dashboard Page! {lang}</h1>;
}
