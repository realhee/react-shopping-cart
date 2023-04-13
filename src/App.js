import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTE_PATH } from "./constants/page";
import Header from "./components/layouts/Header";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="root">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              exact
              path={ROUTE_PATH.PRODUCT_LIST}
              element={<ProductList />}
            />
            <Route exact path={ROUTE_PATH.CART} element={<Cart />} />
            <Route exact path={ROUTE_PATH.ORDER} element={<Order />} />
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </div>
    </QueryClientProvider>
  );
}
