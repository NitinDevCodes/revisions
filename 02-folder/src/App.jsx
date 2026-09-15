import React from 'react';

const App = () => {
  function inputChanging() {
    console.log('input is');
  }

  return (
    <div>
      <input
        onChange={inputChanging}
        type="text"
        placeholder="Enter"
      />
    </div>
  );
};

export default App;