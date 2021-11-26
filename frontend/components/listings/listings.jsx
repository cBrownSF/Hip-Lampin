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