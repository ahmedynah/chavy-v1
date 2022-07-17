import { useState, useEffect } from "react";
import { WooCommerce } from "../../config/woocommerce-rest-api/woocommerce.config";

const useFetch = (url, options) => {
  const [data, setData] = useState(null);
  const [info, setInfo] = useState(0)
  useEffect(() => {
    console.log(`${url + (options !== undefined ? "?page=" + options: "")}`)
    WooCommerce.get(`${url + (options !== undefined ? "?page=" + options: "")}`)
      .then((res) => {
        if ( url === "products")
        // console.log(res.headers)
        setInfo({totalPages: res.headers["x-wp-totalpages"],totalProducts: res.headers["x-wp-total"]})
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url, options]);

  return [data, info];
};

export default useFetch;
