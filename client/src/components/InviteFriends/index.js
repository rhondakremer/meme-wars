import React, {Component} from 'react';
import Api from '../../utils/API';
import "./style.css"

class InviteFriends extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            email:"",
            password: ""
        }
    }

    inputChangeHandler=(e)=>this.setState({[e.target.name]:e.target.value});

    login=()=>{
        Api.login(this.state.email, this.state.password).then(session=>{
            this.props.onLogin(session);
        })
    }

    render()
    {
        return <div id="InviteFriendsRow">
            <div className="jumbotron col-12">
    <h1>Challenge Your Friends!</h1>
  </div>
  <br/>
  <br/>
  <form onSubmit={this.handleSubmit}>
        <label>
Invite your friends to roast you. You know you want to.          
<br/>
<br/>
          <input for="email" id="inviteFormInput" placeholder=" Enter emails separated by commas" type="text" ref={(input) => this.input = input} />
        </label>
        <br/>
        <br/>

        <input className="btn" type="submit" value="Submit" />
      </form>
            

            
</div>

    }
}

export default InviteFriends;