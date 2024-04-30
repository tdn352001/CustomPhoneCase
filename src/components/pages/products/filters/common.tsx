import React from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const CommonFilter = () => {
  return (
    <div className="space-y-3 lg:space-y-5">
      <div className="space-y-3">
        <span className="text-base uppercase lg:text-xl">Filter by price</span>
        <Slider defaultValue={[10, 50]} />
        <div className="flex items-center justify-between">
          <span className="text-sm">0đ</span>
          <span className="text-sm">1.000.000đ</span>
        </div>
      </div>
      <Separator className="w-full" />
      <div className="space-y-3">
        <span className="text-base uppercase lg:text-xl">Collection</span>
        <div className="space-y-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex items-center gap-2">
                <Checkbox id={`collection-${i}`} />
                <label
                  htmlFor={`collection-${i}`}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Collection Name {i}
                </label>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CommonFilter;
