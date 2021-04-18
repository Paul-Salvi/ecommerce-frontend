

function Image({ url, imgAlt }) {
   return (
      <img alt={imgAlt} className="object-cover object-center w-full h-full block" src={url} />
   )
};

export default Image;