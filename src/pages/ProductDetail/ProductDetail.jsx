import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { getProducts } from "../../api/product";
import { maskingProductPrice } from "../../utils/product";
import { ROUTE_PATH } from "../../constants/page";

export default function ProductDetail() {
  const {data} = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  let {id} = useParams();
  let product = data[id-1];

  return (
    <div className="product-detail-container">
        <div className="flex-col-center w-520">
          <img
            className="w-480 h-480 mb-10"
            src={product.imageUrl}
            alt={product.name}
          />
          <div className="product-detail-info">
            <span className="product-detail-info__name">{product.name}</span>
            <hr className="divide-line-gray my-20" />
            <div className="flex justify-between">
              <span>금액</span>
              <span className="product-detail-info__price">{maskingProductPrice(product.price)}원</span>
            </div>
          </div>
          <Link to={ROUTE_PATH.CART} className="product-detail-button flex-center mt-20">
            <button >
                장바구니
            </button>
          </Link>          
        </div>
    </div>
  );
}
