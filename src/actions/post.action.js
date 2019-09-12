
import {redditService} from '../services/reddit'
export const GET_POSTS = 'GET_POSTS';
export const DELETE_POST = "DELETE_POST"

export const getPosts = (data) => ({
  type: GET_POSTS,
  payload: data
})


export const fetchPosts = () => {
  return (dispatch) => {

    return redditService.getPosts()
      .then((data) => {
        dispatch(getPosts(data))
      })
  }
}

