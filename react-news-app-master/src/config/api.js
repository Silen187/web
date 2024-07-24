const API_DOMAIN = "http://127.0.0.1:8000/api/";
export const endpointPath = (official, child = "") => {
  if (child !== "") {
    return `${API_DOMAIN}${official}/${child}`;
  } else {
    return `${API_DOMAIN}${official}`;
  }
}
export const endpointSearch = (searchQuery) =>
  `${API_DOMAIN}search/?keyword=${encodeURIComponent(searchQuery)}`;
