import React from 'react';
import ComponentA from './components/ComponentA';
import ComponentB from './components/ComponentB';
import ComponentC from './components/ComponentC';

function App() {
   return (
      <main>
         <div className='container'>
            <ComponentA />
            <ComponentB />
            <ComponentC />
         </div>
      </main>
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
