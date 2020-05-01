import React from 'react';
import {observer} from 'mobx-react';
import Store from '~/store/store.js';

@observer class Pagination extends React.Component {

    prev = () => {
        document.querySelector('.pagination').style.display = 'none';
        Store.page --;
        Store.getFilms(Store.search, Store.page)
    }

    next = () => {
        document.querySelector('.pagination').style.display = 'none';
        Store.page ++;
        Store.getFilms(Store.search, Store.page)
    }

    render(){

        let prev = Store.page === 1 ? '' : ' btn-active'

        let next = Store.page === Store.pages ? '' : ' btn-active'


        return (
            <div className="pagination mt-3">
                <p>
                    Page {Store.page} of {Store.pages}
                </p>
                <div className="buttons">
                    <button className={'pagination-btn' + prev} onClick={this.prev}>
                        prev
                    </button>
                    <button className={'pagination-btn' + next} onClick={this.next}>
                        next
                    </button>
                </div>
            </div>
        )
    }
}

export default Pagination;