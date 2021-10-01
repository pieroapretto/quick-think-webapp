import { combineReducers } from "redux";
import {GET_LEADERBOARD, SET_USER, TOGGLE_DECK_SELECTED} from '../constants/index';

function leaderBoard(state =[], action: any){
switch (action.type) {
        case GET_LEADERBOARD:
            return action.payload
        default:
            return state;
    }
}

function user(state =[], action: any) {
    switch (action.type) {
        case SET_USER:
            return action.payload
        default:
            return state;
    }
}

function deckSelected(state =[], action: any) {
    switch (action.type) {
        case TOGGLE_DECK_SELECTED:
            return action.payload
        default:
            return state;
    }
}

export default combineReducers({
    leaderBoard,
    user,
    deckSelected
});