import React from 'react';
import { getHeaders } from '../utils.js';

class Comments extends React.Component {
    constructor(props){
        super(props)
        this.state = {
        }
    }

    render () {

        const a_comment = this.props.comments[0]
        return (
            <div className="comments">
            <div>
                <p>
                <strong>{a_comment.user.username}</strong>
                {a_comment.text}
                </p>
                <p className='timestamp'>
                {a_comment.display_time}
                </p>
            </div>
            </div>
        )
    }
}

export default Comments