Getting Started with Redux 
                          
                          1- npm init
                          2- npm install redux 
                          3- Create index.js
                          4- node index.js

###   Three concepts of Redux

Store Hold the state of your application
An action describe the changes in your application
A reducer which caries out the state transitions

###   Action 
                  
                  1 - Plain js object of type 
                  2 - An action Creator function

                  ***********  **Code** **************
               
                  const BUY_CAKE='BUY_CAKE'
                  function buyCake(){
                      return{
                               type:BUY_CAKE,
                               info:'First Redux Action'
                            }
                      } 
              

###   Reducer

              Become Incharge of How state changed.
              Take the action and state as parameter and Return New State 
               
              *********** Code **************

            
            const initialState={
            numofCake:10
            }
            
            const reducer = (state = initialState, action) => {
            switch (action.type) {
            case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
             }
            default: return state
            }
            }                 


###   Store

              Hold Application State
              Allow Access to state Via getState()
              Allow state to be updated Via dispatch(Action)
              Registered Listeners Via Subscribe 
              Handle UnSubscribe the Listeners 

              

          
