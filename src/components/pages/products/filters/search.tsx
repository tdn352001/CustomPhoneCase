import SearchBox from "@/components/custom/search-box";
import { forwardRef, InputHTMLAttributes } from "react";

const SearchProducts = forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return <SearchBox ref={ref} placeholder="Search Products" />;
});

SearchProducts.displayName = "SearchProducts";

export default SearchProducts;
