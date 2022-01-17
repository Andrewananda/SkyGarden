import Axios from 'axios';

export function fetchProducts(successCallback, errorCallback) {
  const url =
    'https://skygarden.search.windows.net/indexes/dev-productsv3/docs/search?api-version=2017-11-11';
  const config = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'Acess-Control-Allow-Origin': '*',
    },
  };

  Axios.defaults.headers.common = {
    'api-key': '4F2408C83BBB69BB31AE97737ED6EE2F',
  };
  let data = {
    search:
      "offer_benefit_type eq 'Absolute' and category_slug eq 'smartphones' ",
  };
  Axios({
    method: 'POST',
    url: url,
    data: data,
    config,
  })
    .then(function (response) {
      successCallback(response);
    })
    .catch(function (e) {
      errorCallback(e);
    });
}
