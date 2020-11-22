export function getStrapiURL(path) {
  return `${process.env.BACKEND_URL || 'http://localhost:1337'}${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  return await response.json();
}

export async function getCategories() {
  return await fetchAPI('/categories');
}

export async function getCategory(slug) {
  const categories = await fetchAPI(`/categories?slug=${slug}`);
  return categories?.[0];
}

export async function getProducts() {
  return await fetchAPI('/products');
}

export async function getProduct(slug) {
  const products = await fetchAPI(`/products?slug=${slug}`);
  return products?.[0];
}

export async function getWorks() {
  return await fetchAPI('/works');
}
