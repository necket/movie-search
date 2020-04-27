import React from 'react';
import Store from '~/store/store.js';

class Search extends React.Component {

    value = '';

    input(e){
        this.value = e.target.value;
    }

    search(e){
        e.preventDefault();
        this.value !== '' ? Store.getFilms(this.value) : Store.getFilms('fast')
    }

    render(){
        return (
            <nav className="navbar fixed-top">
                <div className="container search">
                    <form className="search-form" onSubmit={(e) => this.search(e)}>
                        <input type="text" className="search-input" onChange={(e) => this.input(e)}/>
                        <button type="submit" className="search-btn">Search</button>
                    </form>
                </div>
            </nav>
        )
    }
}

export default Search;