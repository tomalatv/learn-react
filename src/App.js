import React, { useState, useEffect, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';


function Count() {
  // const evenOdd = useEvenOdd();
  // const [count, setCount] = useState(0);
  // let [state, dispatch] = useReducer((state, action)=>{
  //   switch(action.type){
  //     case 'ADD':
  //       return {
  //         // ...state, 
  //         count: state.count +1,
  //       }
  //       case 'REDUCE':
  //       default: return {
  //         // ...state, 
  //         count: state.count -1,
  //       };
  //   }
  // }, { count: 0 });

  // useEffect(()=>{
  //   if(state.count % 2 === 0) {
  //     document.title = 'even ' +state.count +' ***';
  //   } else {
  //     document.title = 'odd ' +state.count +' ***';
  //   }
  // },[state.count])  
  const count = useEvenOdd();
  const test = useTest();
  return (
    <React.Fragment>
    <button onClick={() => test.dispatch({type: 'ADD'})}> click me ! {test.state.count}</button>
    <button onClick={() => test.dispatch({type: 'REDUCE'})}> reduce click me ! {test.state.count}</button>
    <button onClick={() => count.c()}> reduce click me ! {count.count}</button>
    </React.Fragment>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    <React.Fragment>

    <Count />
    </React.Fragment>
      </header>
    </div>
  );
}

export default App;

function useTest() {
  const [state, dispatch] = useReducer((state, action)=>{
    switch(action.type){
      case 'ADD':
        return {
          // ...state, 
          count: state.count +1,
        }
        case 'REDUCE':
        default: return {
          // ...state, 
          count: state.count -1,
        };
    }
  }, { count: 0 });

  useEffect(()=>{
    if(state.count % 2 === 0) {
      document.title = 'even ' +state.count +' ***';
    } else {
      document.title = 'odd ' +state.count +' ***';
    }
  },[state.count])
  return {state, dispatch};
}

function useEvenOdd(){
  const [count, setCount] = useState(0);
  useEffect(()=>{
    if(count % 2 === 0) {
      document.title = 'even ' +count +' ###';
    } else {
      document.title = 'odd ' +count +' ####';
     }
  })
  const c = function handleCount() {
    setCount(count +1);
  }
  return {c, count};
}