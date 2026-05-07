import axios from "axios";

export async function getImagesByQuery(query, page) {
  const response = await axios.get("https://pixabay.com/api/", {
    params: {
      key: "55647449-f4e56103f1aaaeb422f0623cd",
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
      page,
      per_page: 15,
    },
  });

  return response.data;
}