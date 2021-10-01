import {TOGGLE_DECK_SELECTED} from '../constants/index';

export function toggleDeckSelected(deckSelected: boolean){
    return {
        type: TOGGLE_DECK_SELECTED,
        payload: deckSelected,
    }
}