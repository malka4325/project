import { combineReducers } from "redux";
import ScoreReducer from "./ScoreReducer";


const reducers = combineReducers({
  score:ScoreReducer
})

export default reducers