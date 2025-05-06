export const getGifs = async ( category ) => {
    const url= `https://api.giphy.com/v1/gifs/search?api_key=9iNBcs2j8k5sApuM4KcRzqGkE4W20W6r&q=${ category }`;
    const resp = await fetch(url);
    const { data } = await resp.json();
  
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
  }))
  return gifs;
}