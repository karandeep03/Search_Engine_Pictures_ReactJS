import React from 'react';

class SearchBar extends React.Component {

    state = {
        pl: 'Enter Keywords to Search',
        val: ''
    }
    
    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.submit(this.state.val);
    }

    render() {
        let pl = this.state.pl,
            val = this.state.val;

        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type="text"
                            placeholder={pl}
                            value={val}
                            onChange={e => this.setState({
                                val: e.target.value.toUpperCase()
                            })}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;