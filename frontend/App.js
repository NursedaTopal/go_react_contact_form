class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }
  
    render() {
      return(
        <form>
      <span className="formtext">&#x3C;Form /&#x3E;</span>
    	  <input 
          type="text" 
          placeholder="Enter Company Name" 
          required 
        />
        <button>Go!</button>
    	</form>
      );
    }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  
    handleSubmit(event) {
    }
}
  
export default App;