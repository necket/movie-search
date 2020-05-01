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
            <header>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src="/dist/img/logo.png" alt="logo" className="logo"/>
                    </div>
                    <div className="col-12 col-md-6">
                        <form className="search-form" onSubmit={(e) => this.search(e)}>
                            <input type="text" className="search-input"
                                    placeholder="Search for Movies..." 
                                    onChange={(e) => this.input(e)}
                            />
                            <button type="submit" className="search-btn">
                                <img src="/dist/img/search.png" alt="search"/>
                            </button>
                        </form>
                    </div>
                </div>
            </header>
        )
    }
}

export default Search;