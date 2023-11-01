import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    headers:{
        Accept: 'application/json'
    },
    params:{
        key: '5c5bfac1dfac48fc852c21a50a2fb969'
    }
    
})