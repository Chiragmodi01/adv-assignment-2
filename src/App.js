import { useState, useEffect } from 'react'
import './App.css'
import Loading from './components/Loading';
import { Navbar } from './components/Navbar';
import UserCard from './components/UserCard';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [isClicked, setIsClicked] = useState(0);
  const [page, setPage] = useState(1);
  const [nextBtn, setNextBtn] = useState(false);
  const [prevBtn, setPrevBtn] = useState(true);
  
  const url = ` https://reqres.in/api/users?page=${page}`;

  // fetching data from api
  useEffect(() => {
    const fetchUsers = async () => {
      setIsLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      console.log("Data fetched successfully")
      setData(data.data);
      setIsLoading(false)
  };
  // calling the fetch function
    isClicked && fetchUsers();
  }, [isClicked, url]);

  
  // pagination
  const pagePrevious = () => {
    setPage(1);
    setNextBtn(false);
    console.log(`page 1 loaded`);
    setPrevBtn(true);
  }

  const pageNext = () => {
    setPage(2);
    setNextBtn(true);
    console.log(`page 2 loaded`);
    setPrevBtn(false);
  }

  return (
    <div className="App">
      <Navbar onSetIsClicked= {setIsClicked}/>
      <main>
        {data ? data.map((val) => {
          return  <UserCard key={val.id} avatar={val.avatar} first_name={val.first_name} last_name={val.last_name} email={val.email}/>
        }) : ""}
        {!isClicked ? <h2 className="placeholder">Click on <code>Get Users</code> to get Users data</h2> : ""}
        <Loading show={isLoading}/>
      </main>
      {data ?
      <footer>
        <button disabled={prevBtn} onClick={pagePrevious}>Previous</button>
        <p className="pageNumber">{page}/2</p>
        <button disabled={nextBtn} onClick={pageNext}>Next</button>
      </footer> : ""}
    </div>
  );
}

export default App;
