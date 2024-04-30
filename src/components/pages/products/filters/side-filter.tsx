import SearchProducts from "@/components/pages/products/filters/search";
import CommonFilter from "@/components/pages/products/filters/common";

const SideFilter = () => {
  return (
    <div className="space-y-5 sticky top-0">
      <SearchProducts />
      <CommonFilter />
    </div>
  );
};
export default SideFilter;
