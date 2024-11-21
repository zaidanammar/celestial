'use server';

import { QuestionText } from '@/lib/components/molecules/server.question.text';
import { ServiceGridDesktop } from '@/lib/components/molecules/client.service-grid.desktop';
import { ServiceGridMobile } from '@/lib/components/molecules/client.service-grid.mobile';
import { Lang } from '@/lib/models/lang';

export async function ServiceSection({ lang }: { lang: Lang }) {
  return (
    <aside className="my-14">
      <ServiceGridDesktop lang={lang} />
      <ServiceGridMobile lang={lang} />
      <QuestionText />
    </aside>
  );
}
