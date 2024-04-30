"use client";

import React from "react";
import cx from "clsx";
import { cn } from "@/libs/utils/tw-merge";
import { ScrollArea } from "@/components/ui/scroll-area";
import ProductCard from "@/components/custom/product-card";

const tabs = ["New Arrivals", "Bestsellers", "Exclusive"];

const products = [
  {
    name: "Sea Shell Pattern Phone Case_iPhone Ultra-Impact Case [1522157]",
    price: 15.99,
    thumbnail: "/images/products/1.png",
  },
  {
    name: "Bow and Polka Dots Phone Case_iPhone Ultra-Impact Case [1502844] Vendor",
    price: 15.99,
    thumbnail: "/images/products/2.png",
  },
  {
    name: "Collage for Star Girls_iPhone Ultra-Impact Case",
    price: 15.99,
    thumbnail: "/images/products/3.png",
  },
];

const Categories = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  return (
    <div className="container flex flex-col gap-5 py-10 md:gap-10 lg:py-20">
      <div className="w-full flex items-center justify-center md:gap-5 lg:gap-20">
        {tabs.map((tab, index) => (
          <button
            key={index}
            data-aos-delay={index * 100}
            className={cn(
              "block p-2 text-base text-disabled transition-colors hover:text-primary-02 md:text-2xl",
              selectedTab === index && "text-primary-02",
            )}
            onClick={() => {
              setSelectedTab(index);
            }}
            data-aos="fade-up"
          >
            {tab}
          </button>
        ))}
      </div>
      <ScrollArea className="w-full" orientation="horizontal">
        <div className="flex min-h-[28.5rem] lg:min-h-[31.25rem]">
          {products.slice(0, 4).map((product, index) => (
            <ProductCard
              key={index}
              className="w-[16.125rem] md:w-[13.75rem] lg:w-auto lg:flex-1"
              data-aos-delay={index * 100}
              {...product}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default Categories;
