import React from 'react';
import {getHeaders} from './utils.js'

class Profile extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {}
    }

    render () {
        return (
            <div>
                <img className="pic" src={this.props.user.thumb_url}></img>
                <h2>{this.props.user.username}</h2>
            </div>
        )
    }

}

export default Profile