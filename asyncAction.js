const redux=require('redux');
const axios=require('axios');

const thunkMiddleWare=require('redux-thunk').default;
const createStore=redux.createStore
const applyMiddleware=redux.applyMiddleware

const initialState={
    loading:false,
    users:[],
    error:''
}

const FETCH_USER_FAILED ='FETCH_USER_FAILED';
const FETCH_USER_SUCCESS ='FETCH_USER_SUCCESS';
const FETCH_USER_REQUEST ='FETCH_USER_REQUEST';

const fetchUserRequest=()=>{
    return {
        type:FETCH_USER_REQUEST
    }
}
const fetchUserSuccess=(users)=>{
    return {
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}
const fetchUserFailed=(error)=>{
    return {
        type:FETCH_USER_FAILED,
        payload:error
    }
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USER_SUCCESS:return{
            loading:false,
            users:action.payload,
            error:''
        }
        case FETCH_USER_FAILED:return{
            loading:false,
            users:[],
            error:action.payload
        }
    }

}

const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users').then(responce=>{
        const users=responce.data.map(user=>user.id);   
        dispatch(fetchUserSuccess(users))
    }).catch(error=>{
            dispatch(fetchUserFailed(error.message))
        })
    }
}

const store=createStore(reducer,applyMiddleware(thunkMiddleWare));
const unsubscribe= store.subscribe(()=>console.log(store.getState()));
store.dispatch(fetchUsers());
