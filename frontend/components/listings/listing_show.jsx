import React from 'react'
import { Link } from 'react-router-dom';
class ListingShow extends React.Component {

  componentDidMount() {
    this.props.receiveListing(this.props.match.params.listingId);
  
  }
  componentDidUpdate() {
    console.log(this.props)
    if (!this.props.listing){
      this.props.receiveListing(this.props.match.params.listingId);
    }
  }

  onDelete(){
    if (this.props.currentUser.id === this.props.listing.host_id){
      this.props.deleteListing(this.props.listing.id)
    }
  }
  
 updatedProps(word){

  return word === true ? 'Yes': 'No'
 }
 
render() {
 
  if (!this.props.listing){
    return null;
  }
  const listing = this.props.listing
  const descript = {
    pathname: `/listings/${this.props.listing.id}/edit`,
    search:'2',
    state: this.props.listing 
  }
  const amenities = {
    pathname: `/listings/${this.props.listing.id}/edit`,
    search: '4',
    state: this.props.listing
  }
  const cost = {
    pathname: `/listings/${this.props.listing.id}/edit`,
      search: '3',
        state: this.props.listing
  }
  const nameedit = {
    pathname: `/listings/${this.props.listing.id}/edit`,
    search: '1',
    state: this.props.listing
  
  }
  return(
    <div>
      
      
      <div className = 'name-show'>
      <h1>{listing.name}</h1>
        <Link to={nameedit}>Name Edit</Link>
      </div>

      <div className = 'descript-show'>
      <h2>{listing.description}</h2>
        <Link to={descript}>Descript Edit</Link>
      </div>

      <div className = 'cost-show'>
      <h2>{listing.cost}</h2>
        <Link to={cost}>Cost Edit</Link>
      </div>

      <h2>{listing.guests_allowed}</h2>

      <div className = 'amenities-show'>
        <h2>Amenities</h2>
        <Link to={amenities}>Amen Edit</Link>
          <p>{`trash bins: ${this.updatedProps(listing.is_trash)}`}</p>
          <p>{`showers: ${this.updatedProps(listing.is_shower)}`}</p>
          <p>{`wifi: ${this.updatedProps(listing.is_wifi)}`}</p>
          <p>{`picnic tables: ${this.updatedProps(listing.is_picnic_table)}`}</p>
      </div>
      <div className = 'essentials-show'> 
        <h2>Essentials</h2>
        
        <Link to={amenities}>Amen Edit</Link>
      </div>
        <button onClick={()=>this.onDelete()}>button</button>
       {/* <Link to={`/listings/${this.props.listing.id}/edit`}>Edit</Link>   */}
       
       
       
    </div>
  )
  }
}



export default ListingShow;