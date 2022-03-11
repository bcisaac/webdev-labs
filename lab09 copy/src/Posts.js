import React from 'react';
import {getHeaders} from './utils.js'
import Post from './components/Post.js'

class Posts extends React.Component { 
    constructor(props){
        super(props)
        this.state = {
            posts: []
        }
        console.log('Posts component created')
        this.getPosts()
    }
    
    // componentDidMount() {
    //   console.log('Invoked immediately')
    // }



    getPosts() {
        fetch('/api/posts/', {
            headers: getHeaders()
        }).then(response => response.json())
        .then(data => {
            this.setState({
                posts: data
            });
            // when you update the state, you trigger the 
            // render()
        })
    }

    render () {
        console.log('posts rendering')
        console.log(this.state.posts)
        return (
            <div id="posts">
                {this.state.posts.length >0 ? this.state.posts.map(post => {
                    return <Post key={post.id} model={post} />
                }) : <div>Need new token</div>}
                {/* Posts */}
            </div>
        )
    }
}

export default Posts