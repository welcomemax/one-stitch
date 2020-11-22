import Head from 'next/head';
import { meta } from '../meta';
import { CategoriesList, ProductsList, Section, H1, H2 } from '../components';
import { getCategories, getProducts } from '../utils';

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default function Home({ products, categories = [] }) {
  return (
    <div>
      <Head>
        <title>{meta.label} | Главная</title>
      </Head>

      <Section backgroundColor="#fafafa">
        <H1>Машинная вышивка на заказ</H1>
        <p>{loremIpsum}</p>
      </Section>

      <Section>
        <H2>Магазин</H2>
        <CategoriesList categories={categories} />
        <ProductsList products={products} />
      </Section>

      <Section>
        <H2>Почему мы</H2>
        <p>{loremIpsum}</p>
        <p>{loremIpsum}</p>
      </Section>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProducts();
  const categories = await getCategories();
  return { props: { products, categories } };
}
