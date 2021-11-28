import React from 'react'
import { Link } from "react-router-dom";

class Listing extends React.Component {


  componentDidMount() {
    this.props.receiveListing(this.props.match.params.listingId)
  }

  render() {
return(
  <div>
    hello
  </div>
)
  }
}

export default Listing;