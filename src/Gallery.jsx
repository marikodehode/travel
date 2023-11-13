
import IMAGES from "./data/image.json";
import './App.css';

const Gallery = () => {
  return (
    <>
      {IMAGES.image.map((image, index) => (
        <div key={index} className="imageSpace">
          <img src={image.image} alt={image.alt} />
          <h2>{image.country}</h2>
          <p>{image.city}</p>

        </div>
      ))}
    </>
  );
};

export default Gallery;
