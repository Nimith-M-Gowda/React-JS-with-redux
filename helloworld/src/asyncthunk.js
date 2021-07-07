const redux = require ('redux');
let createstore = redux.createStore;
let middleware = redux.applyMiddleware;
let thunkmiddleware = require ('redux-thunk').default;
let axios = require ('axios'); 


let initstate = {
    loading : true ,
    result : '',
    error : '' ,
}

let requestaction = () => {
    return {
        type : 'request' , 
    }
}

let successaction = (data) => {
    return {
        type : 'success' ,
    payload : data ,
    }
}

let erroraction = (error) => {
    return {
        type : 'error' ,
        payload : error.message , 
    }
}

let reducer = (state = initstate , action) => {
        switch (action.type) {
            case 'request': return {
                ...state, loading : true ,   
            } ;
            case 'success' : return {
                loading : false , result : action.payload , error : 'no error' , 

            }
            case 'error' : return {
                loading : false , result : [] , error : action.payload , 
            }
        } 
}

let fetching = () => {
    return function (dispatch){
            dispatch(requestaction());

            axios('https://jsonplaceholder.typicode.com/users')
            .then ( res => {
                let data = res.data.map(user => user.name);
                dispatch(successaction(data));
            })
            .catch( error => {
                dispatch(erroraction(error))
            })


    }
}

let store = createstore(reducer , middleware(thunkmiddleware));
store.subscribe( () => {console.log('final state is',store.getState() )})
store.dispatch(fetching())