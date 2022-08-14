import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route} from 'react-router-dom'
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AddContact from "./components/AddContact";
import Home from "./components/Home";
import EditContact from "./components/EditContact";
import ViewContact from "./components/ViewContact";

function App() {
  
  return (
    <div className="App container-fluid p-0">
      <Navbar></Navbar>
      <div className="container">
        
        <Routes>
          <Route path="/" element={<Home></Home>} ></Route>
          <Route path="/login" element={<Login></Login>} ></Route>
          <Route path="/signup" element={<SignUp></SignUp>} ></Route>
          <Route path="/addcontact" element={<AddContact></AddContact>} ></Route>
          <Route path="/editcontact/:id" element={<EditContact></EditContact>} ></Route>
          <Route path="/viewcontact/:id" element={<ViewContact></ViewContact>} ></Route>
        </Routes>

      </div>

    </div>
  );
}

export default App;
