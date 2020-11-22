import React from 'react';
import styled from 'styled-components/macro';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { H1, Loader, ProductsList, Section } from '../../components';
import { getCategories, getCategory } from '../../utils';
import { meta } from '../../meta';

export default function CategoryPage({ category }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Section>
        <Loader>Loading category...</Loader>
      </Section>
    );
  }

  return (
    <Section>
      <Head>
        <title>
          {meta.label} | Категория - {category.name}
        </title>
      </Head>
      <H1>{category.name}</H1>
      <ProductsList products={category.products} />
    </Section>
  );
}

export async function getStaticProps({ params }) {
  const category = await getCategory(params.slug);
  return { props: { category } };
}

export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => {
      return {
        params: { slug }
      };
    }),
    fallback: true
  };
}
