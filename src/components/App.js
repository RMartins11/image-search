import React from "react";
import unsplash from "../api/unsplash"; //Isto é uma package que vai servir para fazer "fetch" à nossa API. Como está localizado num folder fora dos "components", mas dentro do src, usamos 2 ..
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";


class App extends React.Component {

  state = {images: [] };

onSearchSubmit = (term) => { //Aqui mais uma vez, criamos uma função arrow, para evitar erro com o "this"

unsplash.get("/search/photos", { //Aqui chamamos o unsplash, depois colocamos alguns parametros de configuração(dados pela API no site)
  params: { query: term },
  
}).then((response) => { //A função "then" serve para iniciar algo, depois de um pedido estar completo
    this.setState({images: response.data.results});
})
}

    render() {
    return (
    <div className="ui container" style={{marginTop: "10px"}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <ImageList images={this.state.images}/>
        </div>
    );
  }
}

export default App;