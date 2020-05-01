import React from 'react';
import getDetails from '~/api/getDetails.js';

class Film extends React.Component {
    
    constructor(props){
        super(props);
    }

    rating = '';

    getDetails(id){
        getDetails(id).then(response => {
            document.querySelector(`#rating-${id}`).innerHTML = `<p>${response['imdbRating']}</p>`;
        })
    };

    render(){

        this.getDetails(this.props.imdbID);

        return (
            <div className="film-col mt-5">
                <a className="film" href={`https://www.imdb.com/title/${this.props.imdbID}/videogallery`} target="_blank">
                    <div className="rating" id={'rating-' + this.props.imdbID}></div>
                    <img src={this.props.poster} alt={this.props.title} className="img-fluid film-img"/>
                    <h2 className="film-title">
                        {this.props.title}
                    </h2>
                    <div className="film-info">
                        {this.props.year}
                    </div>
                </a>
            </div>
        )
    }
}

export default Film;