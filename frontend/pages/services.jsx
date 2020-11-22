import Head from 'next/head';
import { meta } from '../meta';
import { Section, H1, Gallery, H2 } from '../components';
// import { getWorks } from '../utils';

export default function Contacts({ works }) {
  return (
    <main>
      <Head>
        <title>{meta.label} | Услуги</title>
      </Head>

      <Section>
        <H1>Услуги</H1>
      </Section>

      <Section>
        <H2>Примеры работ</H2>
        {/*<Gallery />*/}
      </Section>
    </main>
  );
}

// export async function getStaticProps() {
//   const works = await getWorks();
//   return { props: { works } };
// }
