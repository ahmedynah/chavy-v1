const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;
// import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api"; // Supports ESM

export const WooCommerce = new WooCommerceRestApi({
  url: 'https://menuelsharkia.com/buffy/',
  consumerKey: process.env.REACT_APP_CONSUMER_KEY,
  consumerSecret: process.env.REACT_APP_CONSUMER_SECRET,
  version: 'wc/v3',
//   queryStringAuth: true
});
