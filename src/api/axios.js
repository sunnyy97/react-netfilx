import axios from "axios";

const instance = axios.create({
    baseURL : "https://api.themoviedb.org/3",
    params : {
        api_key : "0a59c42da572a72547f7f28f29d17cfe",
        langauge : "ko-KR",
    },
})

export default instance;