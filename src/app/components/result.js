import React from 'react';
import {observer} from 'mobx-react';
import Store from '~/store/store.js';
import Loader from './loader.js';
import Film from './film.js';

Store.getFilms('fast');

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
                )
            }else{
                films = <p className="text-center w-100">Nothing found for "{document.querySelector('.search-input').value}"</p>
            }
        }
        
        return (<>
            <div className="row">
                {films}
            </div>
        </>); 
        
    }
}

export default Result;