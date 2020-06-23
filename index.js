const redux=require('redux');
const createStore=redux.createStore;
const BUY_CAKE='BUY_CAKE'
function buyCake(){
    return{
        type:BUY_CAKE,
        info:'First Redux Action'
    }
}

//Reducer

const initialState={
    numofCake:10
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case BUY_CAKE: return {
        ...state,
        numofCake: state.numofCake - 1
      }
      default: return state
    }
  }
  const store=createStore(reducer);
  console.log('Inetial state is '+store.getState().numofCake);
  store.subscribe(()=>console.log('updated state is '+store.getState().numofCake));
  store.dispatch(buyCake());
  store.dispatch(buyCake());
  store.dispatch(buyCake());