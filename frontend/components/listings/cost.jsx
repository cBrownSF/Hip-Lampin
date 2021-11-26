import React from 'react'
import { Link } from "react-router-dom";
class CostForm extends React.Component{
  render(){
    <div>
      <form>
        <h1>How much do you want to charge per night?</h1>
        <input className=''
          type="text"
          placeholder='e.g $80'
          value={this.state.cost}
          onChange={this.handleInput('cost')}
        />
      </form>

    </div>
  }
}

export default Cost;
