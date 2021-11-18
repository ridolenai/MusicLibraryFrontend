import React from 'react';

class Form extends React.Component{



    constructor(props) {
        super(props);
        this.state = {

            title:"",
            album: "",
            artist: "",
            genre: "", 
            releaseDate: "",
        };
        

    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event){
        event.preventDefault(); //no refresh for you
        let objectToSubmit = {
            "title": this.state.title,
            "album": this.state.album,
            "artist":this.state.artist,
            "genre":this.state.genre,
            "releaseDate":this.state.releaseDate
        }
        let response = axios.post('http://127.0.0.1:5000/music_library',objectToSubmit)
        console.log(response);
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input name = "title" onChange = {this.handleChange}></input>
                <input name = "album"  onChange = {this.handleChange}></input>
                <input name = "artist"  onChange = {this.handleChange}></input>
                <input name = "genre"  onChange = {this.handleChange}></input>
                <input name = "releaseDate" type = "date" onChange={this.handleChange}></input>
                <input typ e= "submit">Submit</input>
            </form>
        )
    }
}




