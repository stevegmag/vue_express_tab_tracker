import axios from 'axios'

// setup base route for axios to connect to the backend end points
export default () => {
  return axios.create({
    baseURL: `http://localhost:8081/`
  })
}
