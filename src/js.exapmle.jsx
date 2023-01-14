import React, {createElement as el, useState} from 'react';
function App() {
  // return (
  //   <h1>Hello React!!!</h1>
  // );

  //return React.createElement('h1', {}, 'Hello from JS')

  const [count, setCount] = useState(0);

  return el('div', {className: 'container'}, [
    el('h1', {className: 'font-bold', key: 1}, `Test JSX ${count}`),
    el('button', {
      className: 'py-2 px-4 border',
      key: 2,
      onClick: () => setCount(count + 1),
    }, 'Click me')
  ])
}

export default App;
