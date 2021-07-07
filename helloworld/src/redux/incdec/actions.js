import {INCREMENT} from './actiontype'
import {DECREMENT} from './actiontype'
import {INSERTING} from './actiontype'

export let insert_action = (data) => {
        return {
            type : INSERTING,
            payload : data,
        }
}
export let increment_action = () => {
    return {
        type : INCREMENT,
        payload : '' ,
    }
}
export let decrement_action = () => {
    return {
        type : DECREMENT,
        payload : '',
    }
}