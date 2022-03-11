import React from 'react';
import NavBar from './NavBar'
import Posts from './Posts'
import Profile from './Profile'
import Stories from './Stories'
import Suggestions from './Suggestions'

class App extends React.Component {  

    render () {
        return (
            <div>

            <nav className="main-nav">
                <h1>Photo App</h1>
                <NavBar></NavBar>
            </nav>

            <aside>
                <header>
                    <Profile></Profile>
                </header>
                <div className="suggestions">
                    <p className="suggestion-text">Suggestions for you</p>
                    <div>
                        <Suggestions></Suggestions>
                    </div>
                </div>
            </aside>

            <main className="content">
                <header className="stories">
                    <Stories></Stories>
                </header>
                <Posts></Posts>
            </main>

            </div>
        );
    }
}

export default App;