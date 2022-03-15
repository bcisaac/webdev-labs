import React from 'react';
import {getHeaders} from '../utils.js'

class Follow extends React.Component { 
    constructor(props){
        super(props)
    }
    
    // componentDidMount() {
    //   console.log('Invoked immediately')
    // }

    render () {
        const followId = this.props.followId
        return (
        <button
            onClick={this.props.toggleFollow}
            checked={followId}
            label={"Follow " + this.props.username}
            className='link following'>
            {followId ? "unfollow" : "follow"}
        </button>
        )
    }
}

export default Follow