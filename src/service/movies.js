import apiConfig from '../config/apiConfig'
import axios from 'axios'

const config = apiConfig.config 

const getMoviesRecently = async () => {

  const { data } = await axios.get(`${config.apiURL}/movie/now_playing?api_key=${config.apiKey}`)

  console.log(data)
}

export {
  getMoviesRecently
}