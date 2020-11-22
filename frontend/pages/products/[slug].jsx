import React from 'react';
import styled from 'styled-components/macro';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { getProducts, getProduct, getUploadedMedia } from '../../utils';
import { Button, H1, Loader, Section } from '../../components';
import { meta } from '../../meta';

const ProductRow = styled.div`
  display: flex;
`;

const ImageContainer = styled.div``;
const InfoContainer = styled.div``;

const AddToCartButton = styled(Button)`
  width: 100%;
`;

export default function ProductPage({ product }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Section>
        <Loader>Loading product...</Loader>
      </Section>
    );
  }

  return (
    <Section backgroundColor="#fafafa">
      <Head>
        <title>
          {meta.label} | Продукт - {product.title}
        </title>
      </Head>

      <H1>{product.title}</H1>

      <ProductRow>
        <ImageContainer>
          <img
            src={getUploadedMedia(product.image.formats.thumbnail.url)}
            alt={product.title}
          />
        </ImageContainer>
        <InfoContainer>
          <div>
            <h4 className="mt-1 font-semibold text-lg leading-tight truncate text-gray-700">
              {product.title} - ${product.price}
            </h4>
            <div className="mt-1 text-gray-600">{product.description}</div>
          </div>

          <AddToCartButton
            className="snipcart-add-item"
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-url={router.asPath}
            data-item-name={product.title}
            data-item-description={product.description}
            data-item-image={getUploadedMedia(
              product.image.formats.thumbnail.url
            )}
          >
            Add to cart
          </AddToCartButton>
        </InfoContainer>
      </ProductRow>
    </Section>
  );
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.slug);
  return { props: { product } };
}

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map(({ slug }) => {
      return {
        params: { slug }
      };
    }),
    fallback: true
  };
}
