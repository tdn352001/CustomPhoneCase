import BreadCrumb from '@/components/pages/product-detail/breadcrumb'
import ProductCarousel from '@/components/pages/product-detail/carousel'
import ProductInfo from '@/components/pages/product-detail/info'
import RelatedProducts from '@/components/pages/product-detail/related-products'

const ProductDetail = () => {
  return (
    <div className="container py-5 lg:py-10">
      <BreadCrumb />
      <div className="flex flex-col gap-10 mt-5 lg:mt-10 lg:flex-row lg:gap-6">
        <ProductCarousel />
        <ProductInfo />
      </div>
      <RelatedProducts />
    </div>
  )
}
export default ProductDetail
