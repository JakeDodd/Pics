import React from 'react';
import NavBar from './NavBar';
import ImageSearch from './ImageSearch';

class App extends React.Component {
    state = {  }

    render() {
        return (
            <div className='ui container'>
                <NavBar />
                <ImageSearch />
            </div>
        );
    }
}

export default App;