import React, {Component} from 'react';

const Joke = ({ joke: {setup, punchline} }) => (

        <p style={{margin: 20}}>{setup}<em>{punchline}</em></p>
)

class Jokes extends Component{
    state = {
        joke: {},
        tenJokes: [],
        showJokes: false
    };

    componentDidMount(){
        fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(json => this.setState({joke: json}))
        .catch(error => alert(error.message));
    }

    fetchJokes = () =>{
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({tenJokes: json}))
        .catch(error => alert(error.message));
    }

    toggleTenJokes = () => {
        this.setState({showJokes: !this.state.showJokes})
    }

    // tenJokes = () => { this.state.showJokes ?
    //     this.state.tenJokes.map(jokes =>{
    //         <div key={jokes.id}>
    //             <p>{jokes.setup}<em>{jokes.punchline}</em></p>
    //         </div> 
            
    //     }): null;

    // }

    render(){
        return(
            <div>
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.joke}/>
                <hr style={{maxWidth: '100%'}}/>
                <h3>Want ten new jokes?</h3>
                <a  href='#1' onClick={this.fetchJokes}><h3 className='button'>More Jokes!</h3></a>
                {this.state.tenJokes.map(joke => (<Joke key={joke.id} joke={joke} />))} 
            </div>
        ) 
    }
}

export default Jokes;