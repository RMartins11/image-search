import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID dsYAcCBvNU72sSWTtUqktrjNWvVw7ItsQxoesCXZ5iQ" //Aqui está mais código para a API funcionar. Esta informação é disponibilizada pelo site da API
      }
    
});