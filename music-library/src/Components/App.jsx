import DisplayMusic from "./DisplayMusic/DisplayMusic";
import { Component } from "react";
import axios from "axios";
import Form from "./Form/Form";


class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            songs: [],
        };
    }

    componentDidMount = () => {
        this.pullSong();
    }

    async pullSong() {
        try{
            let response = await axios.get('http://127.0.0.1:8000/music/')
            this.setState({
                songs:response
            })
        }
        catch(error) {
            alert('The song was unavailable')
        }
    }

    deleteSong = async() => {
        try{
            await axios.delete('http:127.0.0.1:8000/music/')  //come back to this to specify song to be deleted
            this.pullSong()
        }
        catch(error){
            alert('The song was not removed')
        }
    }
    

    //come back to finish render method to design output
    render() { 
        return (

            <div className = "container-fluid">
            <DisplayMusic/>
            <Form/>
            </div>
          );
    }
}
 
export default App;