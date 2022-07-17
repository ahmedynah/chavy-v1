import { createContext, useEffect, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";

const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState(reactLocalStorage.getObject("basket")?reactLocalStorage.getObject("basket"):[])
  const [basketUpdateFlag, setBasketUpdateFlag] = useState(false);
  useEffect(() => {
      reactLocalStorage.setObject("basket", basket);
      console.log("basket ==> ", basket, reactLocalStorage.getObject("basket"), basket instanceof Array , "basketFlag => ", basketUpdateFlag);
      setBasketUpdateFlag(false)
  }, [basketUpdateFlag])
  
  return (
    <BasketContext.Provider value={{basket, setBasket, basketUpdateFlag, setBasketUpdateFlag, basket, setBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

export default BasketContext;
