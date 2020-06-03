import axios from 'axios'

 const Axios = axios.create({
     baseURL : 'https://thawing-fortress-96804.herokuapp.com',
     headers: {'Content-Type': 'application/raw'}
 })

 export default Axios