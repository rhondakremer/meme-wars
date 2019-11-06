import React, {Component} from 'react';
import UserProfile from '../../components/UserProfile';
import Api from '../../utils/API';

class HomePage extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            currentUser: ""
        }
    }

    componentDidMount()
    {
        Api.getUser().then
        (currentUser=>{
            this.setState({currentUser});
        })
    }

    render()
    {
        return <div className="row">
            <div classname="col-6 offset-3">
            <p>this is the homepage. the user's profile should show up.</p>
            {this.props.session&&<h1>Hello {this.props.session.name}</h1>}
            </div>
        </div>
    }
}

export default HomePage;