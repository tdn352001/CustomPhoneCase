import { phones } from "@/libs/constants/customize";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const SortBy = () => {
  return (
    <div>
      <Select>
        <SelectTrigger className="w-52">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Sort by popularity</SelectItem>
          <SelectItem value="2">Sort by price: low to high</SelectItem>
          <SelectItem value="3">Sort by popularity</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
export default SortBy;
