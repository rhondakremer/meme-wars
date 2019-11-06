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
            <UserProfile componentDidMount={this.componentDidMount}/>
        </div>
    }
}

export default HomePage;