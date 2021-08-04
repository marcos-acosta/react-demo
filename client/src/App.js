import { BrowserRouter, Route } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage.js';
import Room from './Components/Room/Room.js';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Homepage} />
      <Route exact 
        path="/multiplayer/:room_code" 
        render={
          (props) => {
            return <Room {...props} username={"marcos"} />
          }}/>
    </BrowserRouter>
  );
}

export default App;
