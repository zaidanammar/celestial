import { NextPage } from 'next';

import { Lang } from './lang';

type AppParams = {
  lang: Lang;
  id?: string;
};

export type AppNextPage = NextPage & {
  params: AppParams;
};

export type AppNextLayout = {
  params: AppParams;
  children: React.ReactNode;
};
