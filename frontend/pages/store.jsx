import Head from 'next/head';
import { meta } from '../meta';
import { Section, H1, CategoriesList, ProductsList } from '../components';
import { getCategories, getProducts } from '../utils';

export default function Contacts({ categories, products }) {
  return (
    <main>
      <Head>
        <title>{meta.label} | Магазин</title>
      </Head>

      <Section>
        <H1>Магазин</H1>
        <CategoriesList categories={categories} />
        <ProductsList products={products} />
      </Section>
    </main>
  );
}

export async function getStaticProps() {
  const products = await getProducts();
  const categories = await getCategories();
  return { props: { products, categories } };
}
