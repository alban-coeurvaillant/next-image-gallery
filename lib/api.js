const API_KEY = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

export const getCuratedPhotos = async () => {
  const res = await fetch(`https://api.pexels.com/v1/collections/s1el4sh`, {
    headers: {
      Authorization: API_KEY,
    },
  });
  const responseJson = await res.json();
  return responseJson;
};
