function getProducts() {
  return fetch("/products").then((res) => res.json());
}

export { getProducts };
