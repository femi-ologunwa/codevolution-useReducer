import React, { useReducer, createContext } from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

//create context
export const CountContext = createContext();

//define initial state
const initialState = 0;

//define reducer function
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

function App() {
   const [count, dispatch] = useReducer(reducer, initialState);

   return (
      <CountContext.Provider
         value={{ countState: count, countDispatch: dispatch }}
      >
         <main>
            <div className='container'>
               <h3>useReducer & useContext</h3>
               <div className='count'> Count - {count}</div>
               <div className='components'>
                  <ComponentA />
                  <ComponentB />
                  <ComponentC />
               </div>
            </div>
         </main>
      </CountContext.Provider>
   );
}

export default App;

/*
Combining useReducer with useContext to manage Global state
=============================================================
We will maintain a count state (created with useReducer) in App.js and access the state from components A, D and F

Steps
- Setup components structure
- Create counter in App.js with useReducer
- Access counter in components A, D and F

 */
