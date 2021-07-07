const redux  = require ('redux');
const createstore = redux.createStore;
const combineReducers = redux.combineReducers ;

let state1 = {
    totalbook : 10 , 
}

let state2 = {
    totalpen: 20 ,
}

let bookactioncreator = () => {
    return {
        type : 'buybook',
        payload : 'am gonna buy a book ',
    }
}

let penactioncreator = () => {
    return {
        type : 'buypen',
        payload : 'am gonna buy a pen ',
    }
}

let bookReducer = (initstate = state1 , action) => {
switch (action.type) {
    case 'buybook' : return {
                            ...initstate,totalbook:initstate.totalbook-1 ,    
                            }
    default : return initstate ;
}
}

let penReducer = (initstate = state2, action) => {
    switch(action.type) {
        case 'buypen': return {
            ...initstate, totalpen : initstate.totalpen - 2 ,
        }
        default : return initstate ; 
    }
}

let Reducers = combineReducers(
    {penReducer,
    bookReducer}
)
let store = createstore(Reducers) ;
console.log('initial states',store.getState())
let subscribe = store.subscribe( () => {return console.log('subscribed data' , store.getState())})
store.dispatch(bookactioncreator());
store.dispatch(bookactioncreator());
store.dispatch(bookactioncreator());
store.dispatch(penactioncreator());
store.dispatch(penactioncreator());
store.dispatch(penactioncreator());
subscribe();