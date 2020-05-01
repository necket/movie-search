import {observable, action} from 'mobx';
import getFilms from '~/api/getFilms.js';

class Store{

    search = null;
    @observable page = 1;
    @observable pages = 0;
    @observable current = [];
    @observable loading = true;

    @action getFilms(name = 'fast', page = 1){
        
        this.loading = true;

        this.search = name;
    
        getFilms(name, page).then(response => {
            this.pages = Math.ceil(response['totalResults'] / 10);
            this.current = response['Search'];
        }).then(() => {
            this.loading = false;

            let pagination = document.querySelector('.pagination');
            if(pagination !== null) pagination.style.display = 'flex'
           
        });
    };
    
}

export default new Store();