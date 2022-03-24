import React from "react";
import { Link } from "react-router-dom";

class ListingIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.state={
      slide:1
    }
    this.nextImage=this.nextImage.bind(this)
    this.prevImage=this.prevImage.bind(this)
  }
   nextImage(){

     const photos = this.props.listings;
     const slide = this.state.slide;
     if(slide !==3){
      return this.setState((prevState) => ({
        slide: prevState.slide + 1
      }))
    }else{
       return this.setState(() => ({
         slide: 1
       }))
      }
    }
    prevImage(){

      const photos = this.props.listings
      const slide = this.state.slide
      if(slide!==1){
        return this.setState((prevState) => ({
          slide: prevState.slide - 1
        }))
      }else{

        return this.setState(() => ({
          slide: 3
        }))
      }
    }
  
  render(){
    const {photos,cost,city,state,name,id}=this.props.listings
    return (
    <li className='index-item-li'>
    <div className="listing-index-item-box">
      <div className="slider-container">
          <div className='slider-div'>
             <img className="index-photo"src={photos[this.state.slide-1]} height="200px" width="200px"/> 

              <div className="buttons-class">
                <button className="carousel-button" onClick={this.prevImage}><i class="fas fa-chevron-left" style={{ color: 'white' }}></i></button>
                <button className="carousel-button" onClick={this.nextImage}><i class="fas fa-chevron-right" style={{ color: 'white' }}></i></button>
              </div>
      </div>
          </div>

      <Link className='link-over-text-box' to={`/listings/${id}`}> <div className='text-index-box'>
        <p className="index-link" >{name}</p>
        <p className="index-location-cost">{city},{state}</p>
        <p className="index-location-cost">From ${cost}/per night</p>
  </div></Link>
    </div>
  </li>)
  }
}

export default ListingIndexItem;