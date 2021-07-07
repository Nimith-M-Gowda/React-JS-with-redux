import {INCREMENT} from './actiontype';
import {DECREMENT} from './actiontype';
import {INSERTING} from './actiontype';

let initialstate = {
    num : 1 ,
}
export let Reducers = (state = initialstate , action) => {
    switch(action.type){
        case INCREMENT :
            return {num : Number(state.num) + 1};
        case DECREMENT :
            return {num : state.num - 1} ;
        case INSERTING : 
            return {num : action.payload};
        default : 
            return state ;
    }
}