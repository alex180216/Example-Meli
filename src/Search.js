import React, {Component} from 'react';

class Search extends Component{
    constructor(props){
        super(props);
        this.state = {term:'Valor Inicial'};
    }

    render(){
        return (
            <input type="text" placeholder="Nunca dejes de buscar"
                    value={this.state.term}
                    
            />
        )
    }
}
export default Search;