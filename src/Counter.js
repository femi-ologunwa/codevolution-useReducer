import React, { useReducer } from 'react';

//define initial state
const initialState = 0;

//define reducer function - accepts 2 values (currentState & action) and returns one value, a new state; action transition the current state to a new state. We can percive the action as a set of instructions to the reducer function carries out on the current state
const reducer = (state, action) => {
   switch (action) {
      case 'increment':
         return state + 1;
      case 'decrement':
         return state - 1;
      case 'reset':
         return initialState;
      default:
         return state;
   }
};

function Counter() {
   const [count, dispatch] = useReducer(reducer, initialState);

   //count contains the current value of the state

   //dispatch method allows us to execute a code corresponding to a particular action - specify the action that should be performed

   return (
      <div>
         <div className='count'> Count - {count}</div>
         <button onClick={() => dispatch('increment')}>Increment</button>
         <button onClick={() => dispatch('decrement')}>Decrement</button>
         <button onClick={() => dispatch('reset')}>Reset</button>
      </div>
   );
}

export default Counter;
