import algoliasearch from "algoliasearch";

const client = algoliasearch("PS6Z0PTZAP", "d12d9d7b52a11ecf02e86528bef13217");

const index = client.initIndex("demo_ecommerce");

fetch("https://alg.li/doc-ecommerce.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (products) {
    return index.saveObjects(products, {
      autoGenerateObjectIDIfNotExist: true,
    });
  });
