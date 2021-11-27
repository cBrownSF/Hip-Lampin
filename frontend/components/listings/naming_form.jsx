import React from 'react'
import { Link } from "react-router-dom";

class NameForm extends React.Component{

render() {
  console.log(this.props)
  return (
    
    <div className=''>
      <h2 className></h2>

      <form className="">

        {/* <p className="errors">{this.showErrors()}</p> */}
       
          <h3> Name your Listing</h3>
          <p>This should be a short title describing your site and landcscape</p>
          <input className=''
            type="text"
            placeholder='e.g cozy cottage'
            value={this.props.name}
            onChange={this.props.handleInput('name')}
          />
          <h2>Tips for naming your listing</h2>
          <ul>
            <li>Keep it short! 3-5 words are recommended</li>
            <li>Describe your listing</li>
            <li>Double check for typos</li>
          </ul>
          <button onClick ={() =>this.props.nextFormStep()}>Next</button>
        </form>
        </div>
        )
      }
    }

    export default NameForm;