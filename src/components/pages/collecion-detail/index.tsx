import ProductCard from '@/components/custom/product-card'
import BreadCrumb from '@/components/pages/collecion-detail/breadcrumb'

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
    name: "Harry's Cherry_iPhone Ultra-Impact Case",
    price: 15.99,
    thumbnail: '/images/products/4.png',
    isFavorite: true,
  },
  {
    name: 'Rainbow Cowboy Boot Print_iPhone Ultra-Impact Case',
    price: 15.99,
    thumbnail: '/images/products/5.png',
  },
  {
    name: 'Visual Game 3_iPhone Ultra-Impact Case',
    price: 15.99,
    thumbnail: '/images/products/6.png',
  },
  {
    name: 'Sea Shell Pattern Phone Case_iPhone Ultra-Impact Case [1522157]',
    price: 15.99,
    thumbnail: '/images/products/1.png',
  },
  {
    name: 'Sea Shell Pattern Phone Case_iPhone Ultra-Impact Case [1522157]',
    price: 15.99,
    thumbnail: '/images/products/1.png',
  },
]

const CollectionDetail = () => {
  return (
    <div className="container py-5 lg:py-10">
      <BreadCrumb />
      <div className="w-full mt-5 flex flex-col gap-10 lg:flex-row">
        <div className="flex-1 h-fit lg:sticky top-5">
          <img
            data-aos="fade-up"
            className="w-full max-h-[50dvh] border border-primary-02 rounded-3xl object-cover"
            src="/images/collections/1.jpg"
            alt="Collection Name"
          />
          <h4 className="mt-5 py-1 text-2xl border-b lg:text-6xl lg:py-2" data-aos="fade-up" data-aos-delay="50">
            Collection Name
          </h4>
          <p className="text-sm mt-3 text-disabled lg:text-base" data-aos="fade-up" data-aos-delay="50">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat
            sapiente architecto illum soluta consequuntur
          </p>
        </div>
        <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-y-5">
          {products.map((product, index) => (
            <ProductCard key={index} className="w-full" data-aos-delay={index * 100} {...product} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default CollectionDetail
