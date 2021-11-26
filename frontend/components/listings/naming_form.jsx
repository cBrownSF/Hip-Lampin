class NameForm extends React.Component{
  constructor(props){
    super(props)
  }
render() {
 
  return (
    <div className=''>
      <h2 className></h2>

      <form className="" onSubmit={this.handleSubmit}>

        {/* <p className="errors">{this.showErrors()}</p> */}
       
          <h3> Name your Listing</h3>
          <p>This should be a short title describing your site and landcscape</p>
          <input className=''
            type="text"
            placeholder='e.g cozy cottage'
            value={this.state.name}
            onChange={this.handleInput('name')}
          />
          <h2>Tips for naming your listing</h2>
          <ul>
            <li>Keep it short! 3-5 words are recommended</li>
            <li>Describe your listing</li>
            <li>Double check for typos</li>
          </ul>
        </form>
        </div>
        )
      }
    }