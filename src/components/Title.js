import React,{Component} from 'react';

const TITELS = [
    'a software engineer',
    'football lover',
    'an enthusiastic learner',
    'an adventure seeker',
    'a great team player'
];

class Title extends Component{
    state = {titleIndex: 0, fadeIn: true};

    componentDidMount(){
        this.timeout = setTimeout(()=> this.setState({fadeIn: false}), 2000);
        this.animateTitles();
    }

    componentWillUnmount(){
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(()=>{
            const titleIndex = (this.state.titleIndex +1 ) % TITELS.length;
            this.setState({titleIndex, fadeIn: true});
            this.timeout = setTimeout(()=> this.setState({fadeIn: false}), 2000);
        }, 4000);
    }

    render()
    {
        const {fadeIn, titleIndex} = this.state;
        const title = TITELS[this.state.titleIndex];

        return(
            <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'}
            style={{color:'white'}}
            ><em>I am {title}</em></p>
        )
    }
}

export default Title;