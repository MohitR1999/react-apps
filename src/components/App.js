import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component{
    state = {images: []};
    
    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos/?client_id=27051866099950d41196690d94b45fd6f2cdc019bbfb4fb196c216684a161906', {
            params: {query: term, per_page: 30}
        });
        this.setState({images: response.data.results});
    }
    
    render(){
        if(this.state.images.length > 0){
            return (
                <div className='container mt-3'>
                    <div className='card p-3'>
                        <SearchBar onSubmitProp={this.onSearchSubmit} />
                    </div>
                    <p className='lead text-warning font-weight-bold font-italic'> Found {this.state.images.length} images: </p>
                    <ImageList images={this.state.images} />        
    
                </div>);
        }
        else{
            return (
                <div className='container mt-3'>
                    <div className='card p-3'>
                        <SearchBar onSubmitProp={this.onSearchSubmit} />
                    </div>
                    <p className='lead text-warning font-weight-bold font-italic'> To find a image, enter a search term and press enter </p>
                    <ImageList images={this.state.images} />        
    
                </div>);
        }
        
        
    }
}

export default App;