import axios from 'axios';

const YELP_API_KEY = 'fcZSInMcdP8TpQ-bYk0l2lgAX5KoDraVrVgpRcpwGXb--NNREFVjcVDyLDVYRQ9MyszRGH1kbmRaUHhx8Mgp_Qz7Efcu29cjOkEL9Md3XJl_jGnJRNN85zcfX733XnYx';

export default axios.create({
    baseURL:"https://api.yelp.com/v3/businesses",
    headers:{
        Authorization: `Bearer ${YELP_API_KEY}`
    }
});