import "./ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = (props) => {

const images = props.images.map((image) => { //Esta é uma função de map, que serve para mostrarmos as diferentes imagens da pesquisa
    return <ImageCard  key={image.id} image={image} /> 

});

return <div className="image-list">{images}</div>
};

export default ImageList;