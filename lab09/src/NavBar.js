import React from 'react';
import {getHeaders} from './utils.js'

class NavBar extends React.Component { 
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
      console.log('Invoked immediately')
    }

    render () {
        if (!this.state.posts) {
            return (
                <div>Before NavBar fetched from server</div>
            )
        }
        return (
            <div>
                {/* code */}
            </div>
        )
    }

}

export default NavBar