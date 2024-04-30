import BreadCrumb from "@/components/pages/product-detail/breadcrumb";
import Carousel from "@/components/pages/product-detail/carousel";
import ProductInfo from "@/components/pages/product-detail/info";
import RelatedProducts from "@/components/pages/product-detail/related-products";

const ProductDetail = () => {
  return (
    <div>
      <BreadCrumb />
      <div>
        <Carousel />
        <ProductInfo />
      </div>
      <RelatedProducts />
    </div>
  );
};
export default ProductDetail;
