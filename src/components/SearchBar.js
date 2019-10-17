import React from 'react';

class SearchBar extends React.Component{
    state = {term: ''};
    
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmitProp(this.state.term);
    }
    
    render(){
        return (
            <div>
                <strong><p className='lead'>ImageSearch:</p></strong>
                <form onSubmit={this.onFormSubmit}>
                    <input className='form-control' value={this.state.term} onChange={ (event) => {this.setState({term: event.target.value})} } />
                </form>
            </div>
            );
    }
}

export default SearchBar;