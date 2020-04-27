import {observable, action} from 'mobx';
import getFilms from '~/api/getFilms.js';

class Store{
    @observable films = [];
    @observable current = [];
    @observable loading = true;

    @action getFilms(name){
        
        this.loading = true;
    
        getFilms(name).then(response => {
            this.films = response;
            this.current = response['Search'];
        }).then(() => {
            this.loading = false;
        });
    };
    
}

export default new Store();