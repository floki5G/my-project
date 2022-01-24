import { combineReducers } from "redux";
import { albumsreducers } from "./albums.reducers";
import { photosreducers } from "./photos.reducers";
const rootReducer = combineReducers({
albums:albumsreducers,
photos:photosreducers
})
export default rootReducer
