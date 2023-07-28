import { Suspense } from "react";
import Header from "../Header/Header";

import React from "react";
import { Outlet } from "react-router-dom";

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<div>Loading page...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
