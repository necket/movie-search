import React from 'react';
import Search from './components/search.js'
import Result from './components/result.js'

class App extends React.Component{

    render(){
        return (<>
            <div className="container">
                <Search></Search>
                <Result></Result>
            </div>
        </>)
    }
}

export default App;