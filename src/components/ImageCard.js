import React from "react";

class ImageCard extends React.Component {
    constructor(props){
        super(props);

        this.state = {spans: 0};

        this.imageRef = React.createRef();
    }



    componentDidMount() {
        this.imageRef.current.addEventListener("load", this.setSpans); //Aqui, estamos a adicionar um evento, para quando a imagem carrega. Depois vamos utilizar este vento, para obter a height da image
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight; //Aqui criámos a const height, e dizemos que é igual à height real das imagens
  
        const spans = Math.ceil(height / 10); //Aqui criámos a const spans, que vai servir para definir quantos spans (grids neste caso) precisamos para a imagem caber totalmente. calcumamos isso, fazendo a divisão entre a height da imagem e a height de cada grid, que neste caso definimos para 10
  
        this.setState({spans});
      };
      
    render() {
        return (
            <div style={{gridRowEnd: `span ${this.state.spans}`}}>
              <img
              ref={this.imageRef} 
              alt={this.props.image.description} 
              src={this.props.image.urls.regular} //o src dentro da image, é o src das imagens. Para descobrir a localização, e como o invocar, podemos aceder à console do browser
              /> 
            </div>
        );
    }
}

export default ImageCard;