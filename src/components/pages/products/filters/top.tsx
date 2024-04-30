"use client";

import { useDesktopMediaQuery } from "@/hooks/device";
import React from "react";
import MobileFilter from "./mobile";
import SortBy from "@/components/pages/products/filters/sort-by";

const TopFilters = () => {
  const isDesktop = useDesktopMediaQuery();

  return (
    <div className="min-h-10">
      {isDesktop ? (
        <div className="hidden lg:block">
          <SortBy />
        </div>
      ) : (
        <div className="block lg:hidden">
          <MobileFilter />
        </div>
      )}
    </div>
  );
};
export default TopFilters;
