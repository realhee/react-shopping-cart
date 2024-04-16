import Product from "../../components/Product";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../api/product";

export default function ProductList() {
  // TODO : useQuery 에서 useEffect 필요한가?
  const query = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  // if (query.error) {
  //   // TODO
  // }

  return (
    <section className="product-container">
      {query.isLoading ? (
        <p>isLoading...</p>
      ) : (
        query.data.length > 0? query.data.map((product) => (
          <Product key={product.id} product={product}></Product>
        )) : <h1 className="product-empty flex-center">등록된 상품이 없습니다.</h1>
      )}
    </section>
  );
}
