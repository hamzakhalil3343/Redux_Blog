const redux=require('redux');
const createStore=redux.createStore;
const combinereducers=redux.combineReducers;
const BUY_CAKE='BUY_CAKE'
function buyCake(){
    return{
        type:BUY_CAKE,
        info:'First Redux Action'
    }
}
const BUY_ICECREAM='BUY_ICECREAM'
function buyIceCream(){
    return{
        type:BUY_ICECREAM 
    }
}

//Reducer

// const initialState={
//     numofCake:10
// }

const cakeState={
  numofCake:10
}

const iceCreamState={
  numoficecream:10
}

const CakeReducer = (state = cakeState, action) => {
    switch (action.type) {
      case BUY_CAKE: return {
        ...state,
        numofCake: state.numofCake - 1
      }
      default: return state
    }
  }
  const IceCreamreducer = (state = iceCreamState, action) => {
    switch (action.type) {
      case BUY_ICECREAM: return {
        ...state,
        numoficecream: state.numoficecream - 1
      }
      default: return state
    }
  }
  const rootReducer=combinereducers({
    cake:CakeReducer,
    iceCream:IceCreamreducer
  })
  const store=createStore(rootReducer);
  console.log('Inetial state is '+store.getState());
  const unsubscribe= store.subscribe(()=>console.log('updated state is '+store.getState()));
  store.dispatch(buyCake());
  store.dispatch(buyCake());
  store.dispatch(buyCake());
  unsubscribe();