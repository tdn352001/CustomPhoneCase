export const routers = {
  home: '/',
  products: '/products',
  shop: '/shop',
  customize: '/customize',
  blog: '/blog',
  collections: '/collections',
  wishlist: '/wishlist',
}

export const dynamicRouters = {
  productDetail: (id: string) => `/products/${id}`,
}
