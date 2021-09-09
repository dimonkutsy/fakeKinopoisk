import React from 'react';

function App() {
  let likes = 0;

  function like() {
    likes += 1
    console.log('Like :))))')
  }

  function dislike() {
    likes -= 1
    console.log('Dislike :((((')
  }

  return (
    <div className="App">
    <div>{likes}</div>
      <button onClick = {(like)}>+</button>
      <button onClick = {(dislike)}>-</button>
    </div>
  );
}

export default App;