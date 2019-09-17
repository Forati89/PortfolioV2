import React, { Component } from 'react';
import Projects from '../components/Projects'
import SocialProfiles from '../components/SocialProfiles'
import profile from '../assets/profile4.jpg';
import Title from '../components/Title';
import Jokes from './Jokes';


class App extends Component {
    state = { displayBio: false };

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio })
    }

    render() {
        return (
        <div>
            <img src={profile} alt='profile-picture' className='profile' />
            <h1>Hello!</h1>
            <p>My name is Hassan.</p>
            <Title />
            <p>I'm always looking forward to working on meaningful projects</p>
            {
             this.state.displayBio ? (
                <div>
                    <p>I live in Västerås, and code every day.</p>
                    <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
                    <p>Beside coding, I also love fitness and e-sports.</p>
                    <a onClick={this.toggleDisplayBio}><h3 className='button'>Show less</h3></a>
                </div>
             ) : (
                    <div>
                        <a onClick={this.toggleDisplayBio}><h3 className='button'>Read More</h3></a>
                    </div>
                )
            }
            <hr />
            <Projects />
            <hr />
            <SocialProfiles />
            <hr />
            <Jokes />
        </div>

        )
    }
}

export default App;
