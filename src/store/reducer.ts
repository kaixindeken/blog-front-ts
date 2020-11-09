import {combineReducers} from "redux-immutable";
import {reducer as headerReducer} from '../common/header/store'
import {reducer as footerReducer} from '../common/footer/store'

const reducer = combineReducers({
    header: headerReducer,
    footer: footerReducer,
})

export default reducer;
