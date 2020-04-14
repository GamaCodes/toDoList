import React from 'react';

function App() {
  return (
    <div>
      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
      <span for="vehicle1"> Go to the supermarket </span>
      <br/>
      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
      <span for="vehicle2"> Walk the dogs</span>
      <br/>
      <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
      <span for="vehicle3"> Take React courses </span>
      <br/>
      <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
      <span for="vehicle3"> Sleeep early </span>
      <br/>
    </div>
  );
}

export default App;