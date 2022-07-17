import { createContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const CurrentProductContext = createContext();

export function CurrentProductProvider({ children }) {
  const [id, setId] = useState(useParams());
  const [getProduct] = useFetch(`products/${id}`);
  const [product, setProduct] = useState({ images: [{ src: "" }] });
  // const [newEntry, setNewEntry] = useState(true)
  const prevID = useRef(0);
  // const [localData, setLocalData] = useLocalStorage("product", {})
  // const [newData, setNewData] = useState(true)
  useEffect(() => {
    console.log("context id:", id);
    if (getProduct && prevID.current !== id) {
      setProduct(getProduct);
      console.log(product);
      // setNewEntry(false)
      prevID.current = id;
    }
  }, [getProduct, id,
    //  newEntry
    ]);

  return (
    <CurrentProductContext.Provider
      value={{ product,
        //  setNewEntry,
          setId,
           setProduct }}
    >
      {children}
    </CurrentProductContext.Provider>
  );
}

export default CurrentProductContext;
