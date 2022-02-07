import React from "react";

class HomePage extends React.Component {
  render() { 
    return (  
      <section>
      <div className='splash-container'>
        <div className='title-container'>
          <h1 className="header-home">Find yourself outside</h1>
          <p className="sub-header-home">Discover and book camping, glamping, parks, and cabins</p>
      </div>
      <div className="search-wrapper">
        <form className="search-form">
        <div className="search-bar">
          <label htmlFor="search">Where to?</label>
          <input 
          className="home-boxes"
          type="search"
          id="search" 
          placeholder='Try Yosemite,Moss Beach,Joshua Tree'/>
              </div>
        <div className="search-bar">
          <label htmlFor="dates">Dates</label>
            <input 
            type="date" 
            className="home-boxes"
            id="date"
            placeholder="Enter Dates"
            />
        </div>
        <div className="search-bar">
          <label for="guests">Guests</label>
          <input 
          className="home-boxes"
          type="Select"
          id="date"
          />
        </div>
        <button className="search-button" type="submit">Search</button>
        </form>
      </div>
     


      </div>
      <div className='photo-link-container'>
        <div></div>
      </div>
        </section>


    );
  }
}
 
export default HomePage;
