import {Component} from 'react';
import axios from 'axios';



class DisplayMusic extends Component {
    constructor(props){
        super(props);
        this.state = {
            songs: '',
            songID: "",

        };
    }

    componentDidMount() {
        this.findMusic();
    }

    async findMusic(){
        let response = await axios.get("http://127.0.0.1:8000/music/")
        console.log(response.data);
    }

    async removeSong(){
        let response =  axios.delete("http://127.0.0.1:8000/music")
        console.log(response.data);
    }


    render() {
        return (
            <div>
            <h1>Look at All the Amazing Music</h1>
            <table> <thead>
                <th> Title</th>
                <th> Artist</th>
                <th> Album</th>
                <th> Release Date</th>
                <th> Genre</th>
                
                </thead></table>
            
            </div>
            );
    }
}
export default DisplayMusic