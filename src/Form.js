import React , {component} from "react"

class Form extends component{
  constructor(props){
    super(props)
    console.log(Username)
    this.state ={
     Username :""
    }
  }
  render(){
    return(
      <form>
        <div>
          <input type="text" value={this.state.Username}/>
        </div>
      </form>
      
    )
  }
}

export default Form
