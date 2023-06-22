const getYoutubeEmbedURL = (URLstring) => {
  const baseUrl = 'https://www.youtube.com/watch?v=';
  return `https://www.youtube.com/embed/${URLstring.substring(baseUrl.length, URLstring.length)}/`;
};

export default getYoutubeEmbedURL;
