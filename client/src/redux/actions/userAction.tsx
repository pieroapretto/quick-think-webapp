import {SET_USER} from '../constants/index';

export function setUser(user: object){
    return {
        type: SET_USER,
        payload: user,
    }
}
