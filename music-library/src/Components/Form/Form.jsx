import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component{

    constructor(props) {
        super(props);
        this.state = {

            title:"",
            album: "",
            artist: "",
            genre: "", 
            release_date: "",
        };
        

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(); //no refresh for you
        let objectToSubmit = {
            "title": this.state.title,
            "album": this.state.album,
            "artist": this.state.artist,
            "genre": this.state.genre,
            "release_date": this.state.release_date
        }
        let response = axios.post('http://127.0.0.1:8000/music/',objectToSubmit)
        console.log(response);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                    <input name = "title" onChange = {this.handleChange} value = {this.state.title} placeholder = "Title"></input>
                    <input name = "album"  onChange = {this.handleChange} value = {this.state.album} placeholder = "Album"></input>
                    <input name = "artist"  onChange = {this.handleChange} value = {this.state.artist} placeholder = "Artist"></input>
                    <input name = "release_date" type = "date" onChange={this.handleChange} value = {this.state.release_date}></input>
                    <input name = "genre"  onChange = {this.handleChange} value = {this.state.genre} placeholder = "Genre"></input>
                    
                <button type = "submit">Add Song</button> 
                </form>
            </div>
        )
    }
}



export default Form;
