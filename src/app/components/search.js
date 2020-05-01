import React from 'react';
import Store from '~/store/store.js';

class Search extends React.Component {

    value = '';

    input(e){
        this.value = e.target.value;
    }

    search(e){
        e.preventDefault();
        Store.page = 1;
        
        let pagination = document.querySelector('.pagination');
        if(pagination !== null) pagination.style.display = 'none'
      
        this.value !== '' ? Store.getFilms(this.value) : Store.getFilms()
    }

    render(){
        return (
            <header>
                <div className="row">
                    <div className="col-12 col-md-6 mt-3">
                        <img src="/dist/img/logo.png" alt="logo" className="logo"/>
                    </div>
                    <div className="col-12 col-md-6 mt-3">
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