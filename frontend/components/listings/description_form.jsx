import React from 'react'
import { Link } from "react-router-dom";
class Description extends React.Component{
  render(){
    return(
      <div>
      <form>
          <h1>Describe your listing</h1>
        <input className=''
          type="textfield"
          placeholder='e.g. Stay beneath the stars in our open cottage'
          value={this.props.description}
          onChange={this.handleInput('description')}
        />
        <p>Things to consider mentioning</p>
        <ul>
          <li>Information on scenery</li>
          <li>Any relevant historical information</li>
          <li>Nearby attractions</li>
          <li>Link,phonenumber,and email addresses are not supported</li>
        </ul>
        </form>
        </div>
    )
  }
}

export default Description