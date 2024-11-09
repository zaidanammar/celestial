import { Lang } from './lang';

type Params = Promise<{
  lang: Lang;
}>;

export type AppNextPage = {
  params: Params;
};

export type AppNextLayout = {
  params: Params;
  children: React.ReactNode;
};
