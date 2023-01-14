import React, {createElement as el} from 'react';
function App() {
  // return (
  //   <h1>Hello React!!!</h1>
  // );

  //return React.createElement('h1', {}, 'Hello from JS')

  return el('div', {className: 'container'}, [
    el('h1', {className: 'title'}, 'Test JSX'),
    el('button', {className: ''}, 'Click me')
  ])
}

export default App;
