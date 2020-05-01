import React from 'react';
import {observer} from 'mobx-react';
import Store from '~/store/store.js';
import Loader from './loader.js';
import Film from './film.js';
import Pagination from './pagination.js';

Store.getFilms();

@observer class Result extends React.Component {
    
    render(){

        let films = <Loader></Loader>;

        if(Store.loading === false){

            films = Store.current;

            if(films !== undefined){

                document.querySelector('.search-input').blur();

                films = films.map(film => 
                    <Film poster={film['Poster']} 
                          title={film['Title']} 
                          type={film['Type']}
                          year={film['Year']}
                          imdbID={film['imdbID']}
                          key={film['imdbID']}>
                    </Film>
                );

            }else{
                return (
                    <p className="nothing-found"> No results for "{document.querySelector('.search-input').value}"</p>
                );  
            }
        }
        
        return (<>
            <div className="row justify-content-center">
                {films}
            </div>
            <Pagination></Pagination>
        </>); 
        
    }
}

export default Result;