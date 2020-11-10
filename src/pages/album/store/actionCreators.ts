import * as constants from './constants'

interface changeAlbumsAction{
    type: constants.CHANGE_ALBUM_ACTION,
    data: any
}

export type ModifyAction = changeAlbumsAction

export const changeAlbums = (data: any):changeAlbumsAction => ({
    type: constants.CHANGE_ALBUM,
    data: data
});
