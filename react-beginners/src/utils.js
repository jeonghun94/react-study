export const apiUrl = {
  characters:
    "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023",
  character: (id) =>
    `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`,
};

export const mutation = async (url) => {
  const {
    data: { results },
  } = await (await fetch(url)).json();
  return results;
};
