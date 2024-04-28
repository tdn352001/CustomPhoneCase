"use client";

import React, { PropsWithChildren } from "react";
import { ReduxProvider } from "./redux";
import QueryProvider from "./query-provider";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ReduxProvider>
      <QueryProvider>{children}</QueryProvider>
    </ReduxProvider>
  );
};

export default Providers;
