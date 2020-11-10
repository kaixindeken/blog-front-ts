import {combineReducers} from "redux-immutable";
import {reducer as headerReducer} from '../common/header/store'
import {reducer as footerReducer} from '../common/footer/store'
import {reducer as shareReducer} from '../pages/share/store'
import {reducer as detailReducer} from '../pages/detail/store'
import {reducer as resultReducer} from '../pages/result/store'
import {reducer as albumReducer} from '../pages/album/store'

const reducer = combineReducers({
    header: headerReducer,
    footer: footerReducer,
    share: shareReducer,
    detail: detailReducer,
    result: resultReducer,
    album: albumReducer
})

export default reducer;
