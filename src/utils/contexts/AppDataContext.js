import { createContext, useEffect, useRef, useState } from "react";
import { WooCommerce } from "../../config/woocommerce-rest-api/woocommerce.config";
import useFetch from "../hooks/useFetch";

const AppDataContext = createContext();

export function AppDataProvider({ children }) {
  
  const [appData, setAppData] = useState([]);

  const [allowed_countries, setAllowed_countries] = useState("all");
  const [specific_allowed_countries, setSpecific_allowed_countries] =
    useState("");
  const [specific_ship_to_countries, setSpecific_ship_to_countries] =
    useState("");
  const [currency, setCurrency] = useState("");
  const [calc_taxes, setCalc_taxes] = useState(false);
  const [default_customer_address, setDefault_customer_address] = useState("");
  const [price_thousand_sep, setPrice_thousand_sep] = useState(",");
  const [price_num_decimals, setPrice_num_decimals] = useState(2);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    (async function fetchAppData() {
      await WooCommerce.get("settings/general")
        .then((res) => {
          setAppData([
            ...res.data.map((el) => {
              return {
                id: el.id.replace("woocommerce_", ""),
                value: el.value,
              };
            }),
          ]);
          setFlag(true);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    })();

    if (appData.length > 0) {
      setAllowed_countries(
        appData.filter((el) => el.id === "allowed_countries")["0"].value
      );
      setSpecific_allowed_countries(
        appData.filter((el) => el.id === "specific_allowed_countries")["0"]
          .value
      );
      setSpecific_ship_to_countries(
        appData.filter((el) => el.id === "specific_ship_to_countries")["0"]
          .value
      );
      setCurrency(appData.filter((el) => el.id === "currency")["0"].value);
      setCalc_taxes(appData.filter((el) => el.id === "calc_taxes")["0"].value);
      setDefault_customer_address(
        appData.filter((el) => el.id === "default_customer_address")["0"].value
      );
      setPrice_thousand_sep(
        appData.filter((el) => el.id === "price_thousand_sep")["0"].value
      );
      setPrice_num_decimals(
        appData.filter((el) => el.id === "price_num_decimals")["0"].value
      );
    }
  }, [flag]);

  return (
    <AppDataContext.Provider
      value={{
        price_num_decimals,
        price_thousand_sep,
        appData,
        allowed_countries,
        specific_allowed_countries,
        specific_ship_to_countries,
        currency,
        calc_taxes,
        default_customer_address,
        setAppData,
      }}
    >
      {children}
    </AppDataContext.Provider>
  );
}

export default AppDataContext;
