import { ReactNode } from "react";

export type LayoutProps<T extends object = any> = {
  children: ReactNode;
  params?: T;
};
