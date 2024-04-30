import ProductCard from '@/components/custom/product-card'

const products = [
  {
    name: 'Sea Shell Pattern Phone Case_iPhone Ultra-Impact Case [1522157]',
    price: 15.99,
    thumbnail: '/images/products/1.png',
  },
  {
    name: 'Bow and Polka Dots Phone Case_iPhone Ultra-Impact Case [1502844] Vendor',
    price: 15.99,
    thumbnail: '/images/products/2.png',
  },
  {
    name: 'Collage for Star Girls_iPhone Ultra-Impact Case',
    price: 15.99,
    thumbnail: '/images/products/3.png',
  },
  {
    name: 'Sea Shell Pattern Phone Case_iPhone Ultra-Impact Case [1522157]',
    price: 15.99,
    thumbnail: '/images/products/1.png',
  },
]

const RelatedProducts = () => {
  return (
    <div className="mt-32 space-y-5 lg:space-y-6 lg:mt-52">
      <h2 className="text-2xl font-serif text-center md:text-4xl lg:text-5xl">Related Products</h2>
      <div className="w-full grid grid-cols-2 gap-y-2 lg:grid-cols-4">
        {products.map((product, index) => (
          <ProductCard key={index} className="w-full" data-aos-delay={index * 100} {...product} />
        ))}
      </div>
    </div>
  )
}
export default RelatedProducts
