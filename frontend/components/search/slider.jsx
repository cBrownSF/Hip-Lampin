import React, {useState} from 'react'
export default function Slider({photos}) {
 

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
    <div className="slider-container">
      <div className='slider-div'>
        <img className="index-photo" src={photos[slide - 1]} height="200px" width="200px" />
        <div className="buttons-class">
          {slide !== 1 ? (
          <button className="carousel-button" onClick={() => prevImage()}>
            <i class="fas fa-chevron-left" style={{ color: 'white' }}></i>
          </button> ) : 
          (<button className="carousel-button-hidden" disabled>
            <i class="fas fa-chevron-right" style={{ color: 'white' }}></i>
          </button> )}
          {slide !== 3 ? (
          <button className="carousel-button" onClick={() => nextImage()}>
            <i class="fas fa-chevron-right" style={{ color: 'white' }}></i>
          </button>) :
          (<button className="carousel-button-hidden" disabled>
            <i class="fas fa-chevron-right" style={{ color: 'white' }}></i>
          </button> )}
        </div>
      </div>
    </div>
  )
}