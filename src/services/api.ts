const url = (query: string) =>
  `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1`;

export const api = async (query: string) => {
  const response = await fetch(url(query));
  const data = await response.json();
  return data;
};
