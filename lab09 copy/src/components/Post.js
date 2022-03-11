import React from 'react';
import Like from './Like.js'
import Bookmark from './Bookmark.js'
import { getHeaders } from '../utils.js';

class Post extends React.Component { 
    constructor(props){
        super(props)
        console.log('Post component created')
        this.requeryPost = this.requeryPost.bind(this)
        this.state = {
            post: this.props.model
        }
    }
    
    // componentDidMount() {
    //   console.log('Invoked immediately')
    // }

    requeryPost() {
        console.log('requery post')
        
        fetch('api/posts/' + this.state.post.id, {
            method: "GET",
            headers: {
                'X-CSRF-TOKEN': getHeaders()['X-CSRF-TOKEN']
            }
        }).then(response => response.json())
        .then(data => {
            this.setState({post: data})
            console.log(data.current_user_like_id ? 'likeId exists' : 'likeId doesn\'nt exist')
            console.log(data.current_user_bookmark_id ? 'bookmark exists' : 'bookmark doesn\'nt exist')
        })
    }

    render () {
        const post = this.state.post
        return (
            <section className="card">
                <div className="header">
                    <h3>{post.user.username}</h3>
                    <i className="fa fa-dots"></i>
                </div>
                
                <img 
                    src={ post.image_url } 
                    alt={'Image posted by ' +  post.user.username } 
                    width="300" 
                    height="300" />
                
                <div className="info">
                    <div>
                        <Like 
                        likeId = {post.current_user_like_id}
                        postId = {post.id}
                        requeryPost={this.requeryPost}
                        ></Like>
                        <Bookmark
                        bookmarkId = {post.current_user_bookmark_id}
                        postId = {post.id}
                        requeryPost={this.requeryPost}
                        ></Bookmark>
                    </div>
                    <p>{ post.caption }</p>
                </div>
            </section> 
        )
    }
}

export default Post