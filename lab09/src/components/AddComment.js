import React from 'react';
import { getHeaders } from '../utils.js';

class AddComment extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.postComment = this.postComment.bind(this)
    }

    handleChange(event) {
        this.setState({
            value: event.target.value
        })
    }

    postComment() {
        const postData = {
            "post_id": this.props.postId,
            "text": this.state.value
        }
        fetch(`/api/comments/`, {
            method: "POST",
            headers: getHeaders(),
            body: JSON.stringify(postData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.props.requeryPost()
            console.log('Posted')
        });
        
    }



    render () {
        
        return (
            <form className='add-comment'>
                <div className='input-holder'>
                    <input className='comment-textbox'
                        aria-label='Add a comment'
                        placeholder='Add a comment...'
                        onChange={this.handleChange}>
                    </input>
                </div>
                <button className='link'
                    onClick={this.postcomment}>
                    Post
                </button>
            </form>
        )
    }
}

export default AddComment