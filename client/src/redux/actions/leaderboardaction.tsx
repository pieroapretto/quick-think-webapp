import {GET_LEADERBOARD} from '../constants/index';
import { Dispatch } from 'redux';
type ActionType = {
      type: string,
      payload: object[]
}

export function getLeaderBoard(){
  return async (dispatch: Dispatch<ActionType>) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/10`);
        const data = await response.json();
		dispatch({
			type: GET_LEADERBOARD,
			payload: data,
		});
	};
}
