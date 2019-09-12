import {GET_POSTS} from '../actions/post.action'

export const postReducers = (state = [], action) => {
  switch(action.type) {
    case GET_POSTS:
        return [...action.payload];
    default: return state;
  }
}