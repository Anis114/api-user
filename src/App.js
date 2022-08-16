import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import {useState,useEffect} from "react";
import UserList from "./Components/UserList"
function App() {
      const [users, setUsers] = useState(null);
useEffect(() =>  {
axios.get("https://jsonplaceholder.typicode.com/users").then((result) => { setUsers (result.data);
});
}, []);
return <div><UserList users={users}/></div>


}
export default App;
