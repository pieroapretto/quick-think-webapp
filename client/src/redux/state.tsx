import { v4 as uuid } from 'uuid';
const id: string = uuid();

export default{
    leaderBoard: {users: [], scores: 0},
    user: {
        score: 0,
        username: "",
        id: id,
        firstCardAnswer: '',
        secondCardAnswer: '',
        hintCount: 0
    },
    deckSelected: false
}