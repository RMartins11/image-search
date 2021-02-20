import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
      super(props);
      this.state = {term: ""};  
  }

  onFormSubmit = event => {  //MUITO IMPORTANTE, criar desta forma para evitar erro
      event.preventDefault(); //Este evento previne a página de atualizar, quando carregamos Enter

      this.props.onSubmit(this.state.term);
  };

   render() {
       return (
           <div className="ui segment">
               <form onSubmit={this.onFormSubmit} className="ui form">
                   <div className="field">
                    <label>Image Search</label>
                    <input 
                    type="text" 
                    value={this.state.term} 
                    onChange={(event) => this.setState({term: event.target.value})} />  
                   </div>
               </form>
            </div>
       );
   }
}

export default SearchBar;