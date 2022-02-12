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
     debugger;
     const photos = this.props.listings;
     const slide = this.state;
     if(slide !==photos.length){
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
      debugger;
      const photos = this.props.listings
      const slide = this.state
      if(slide!==1){
        return this.setState((prevState) => ({
          slide: prevState.slide - 1
        }))
      }else{
        return this.setState(() => ({
          slide: photos.length
        }))
      }
    }
  

  render(){
    const {photos,cost,city,state,name,id}=this.props.listings
    return (
    <li className='index-item-li'>
    <div className="listing-index-item-box">
          <div className='slider-div'>
        {/* {photos.map((photo,i)=>{
          return (
          <div 
          className='slider-div'
          key={photo.id}
          >
            <img className="index-photo" src={photo} height="200px" width="200px" />
          </div>
          )
        })} */}
      {/* <img className="index-photo"src={photos[0]} height="200px" width="200px"/> */}
             <img className="index-photo"src={photos[this.state.slide]} height="200px" width="200px"/> 

     <button className="next-carousel-button" onClick={()=> this.prevImage}>prev</button>
            <button className="next-carousel-button" onClick={this.nextImage}>next</button>


      </div>
          {/* <img className="index-photo"src={photos[0]} height="200px" width="200px"/> */}

      <Link className='link-over-text-box' to={`/listings/${id}`}> <div className='text-index-box'>
      {/* <Link className ="index-link" to={`/listings/${this.props.listings.id}`}>{this.props.listings.name}</Link> */}
        <p className="index-link" >{name}</p>
        <p className="index-location-cost">{city},{state}</p>
        <p className="index-location-cost">From ${cost}/per night</p>
  </div></Link>
    </div>
  </li>)
  }
}

export default ListingIndexItem;