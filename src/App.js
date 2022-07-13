import "./App.css";

import ProfilePhoto from "./component/Profile/ProfilePhoto";
import FullName from "./component/Profile/FullName";
import Address from "./component/Profile/Address";

function App() {
  return (
    <div className="wrappp">
      <div className="App">

      <FullName />
      <Address />
      <ProfilePhoto />
      </div>
    </div>
  );
 
}

export default App;
