import { createContext, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import useLocalStorage from "react-use-localstorage";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
  // const [items, setItems] = useLocalStorage("products", [])
  const [pagination, setPagination] = useState(1);
  const [data, info] = useFetch("products", pagination);
  const [products, setProducts] = useState([]);
  // useLocalStorage("products",[])
  useEffect(() => {
    console.log("products:", products)
    console.log("data:", data)
    if(products?.length && products[0].id !== data[0].id) {
      setProducts(data);
    }
    else {
      setProducts(data);
    }
    console.log(pagination, data);
  }, [data, pagination]);

  return (
    <ProductsContext.Provider
      value={{ products, pagination, info, setProducts, setPagination }}
    >
      {children}
    </ProductsContext.Provider>
  );
}

export default ProductsContext;
