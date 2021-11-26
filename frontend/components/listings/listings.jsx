import React from 'react'
import { Link } from "react-router-dom";

class Listing extends React.Component {

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.receiveListing()
  }

  render(){

  }
}

export default Listing;