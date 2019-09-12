import config from '../config.json'
import {postsMapper} from '../mappers/post.mapper'

let apiUrl = config.apiUrl
let limit = config.limit;
export const redditService = {
  
  getPosts: (after = 0) => {
    let url = `${apiUrl}r/popular.json?limit=${limit}`
    
    if(after !== 0){
      url += `&after=${after}`
    }
    
    return fetch(url)
            .then(response => response.json())
            .then(res => postsMapper(res.data.children))
  },
  getPost: async (id, type) => {
    return fetch(`${apiUrl}api/info.json?id=${type}_${id}`)
            .then(response => response.json())
            .then(res => res.data.children)
  }
};