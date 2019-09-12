import {combineReducers} from 'redux'

import {postReducers} from './post.reducer'

const allReducers = combineReducers({
    posts: postReducers
})

export default allReducers;