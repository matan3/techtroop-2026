import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Exercise2 from './Exercise2.jsx';

function App() {

  // Exercise 1
  const ImageDisplay = ({ image, shiftImageBack, shiftImageForward }) => {
    return (
      <div>
        <img src={image} alt="fruit" />
        <div>
          <button onClick={shiftImageBack}>Previous</button>
          <button onClick={shiftImageForward}>Forward</button>
        </div>
      </div>
    );
  };

  const [galleryData, setGalleryData] = useState({
    images: [
      "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
    ],
    currentImg: 0
  });

  const shiftImageBack = () => {
    let newGalleryData = { ...galleryData };
    if (newGalleryData.currentImg === 0) {
      newGalleryData.currentImg = 2;
    } else {
      newGalleryData.currentImg = newGalleryData.currentImg - 1;
    }
    setGalleryData(newGalleryData);
  };

  const shiftImageForward = () => {
    let newGalleryData = { ...galleryData };
    if (newGalleryData.currentImg === 2) {
      newGalleryData.currentImg = 0;
    } else {
      newGalleryData.currentImg = newGalleryData.currentImg + 1;
    }
    setGalleryData(newGalleryData);
  };

  return (
    <div>
      <div>
        <ImageDisplay
          image={galleryData.images[galleryData.currentImg]}
          shiftImageBack={shiftImageBack}
          shiftImageForward={shiftImageForward}
        />
      </div>
      <div>
        <Exercise2 />
      </div>
    </div>

  );

}

export default App
