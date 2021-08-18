import {useEffect ,useState} from 'react'; 
import './App.css';
import { API } from './utils/Api';
import Table from "./components/Table";
//axios
import axios from 'axios';

const api = API;
 
function App() {

   const [coins, setCoins] =useState([]);
   const [search, setSearch] =useState('');

   const getData = async ()=>{
    const resp = await axios.get(api)
    setCoins(resp.data)
   }
  useEffect(()=>{
    getData()
  },[])

  return (
    <div className="container">
       <h3 className="text-center title">API Bitcoins</h3>
      <div className="row">
        <input type='text' placeholder="search..." className="form-control bg-dark text-light border-8 mt-4 text-center"
          onChange={e=>setSearch(e.target.value)}
        />
        <Table coins={coins} search={search}/>
      </div>
    </div>
  );
}

export default App;
