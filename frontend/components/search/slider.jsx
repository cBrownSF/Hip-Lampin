import React, {useState} from 'react'
export default function Slider({ photos, page }) {
 

  const [slide,setSlide] = useState(1);

  const prevImage = () => {
    if (slide !== 1) {
      setSlide(prevCount => prevCount - 1);
    } else {
      setSlide(3);
    }
  }
  const nextImage = () => {
    if (slide !==3) {
      setSlide(prevCount => prevCount + 1) 
    } else {
      setSlide(1);
    }
  }

  return (
    <div className={`slider-container-${page}`}>
      <div className='slider-div'>
        <img className ={`index-photo-${page}`} src={photos[slide - 1]} height="200px" width="200px" />
        <div className={`buttons-class-${page}`}>
          {slide !== 1 ? (
          <button className="carousel-button" onClick={() => prevImage()}>
            <i class="fas fa-chevron-left fa-2xl" style={{ color: 'white' }}></i>
          </button> ) : 
          (<button className="carousel-button-hidden" disabled>
            <i class="fas fa-chevron-right" style={{ color: 'white' }}></i>
          </button> )}
          {slide !== 3 ? (
          <button className="carousel-button" onClick={() => nextImage()}>
            <i class="fas fa-chevron-right fa-2xl" style={{ color: 'white' }}></i>
          </button>) :
          (<button className="carousel-button-hidden" disabled>
            <i class="fas fa-chevron-right" style={{ color: 'white' }}></i>
          </button> )}
        </div>
      </div>
    </div>
  )
}