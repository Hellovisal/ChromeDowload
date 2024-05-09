import React from 'react'
import Table from './Components/Table'
import Modal from './Components/Modal'
import Header from './Components/Header'
import { useState  } from 'react'
import "./App.css"
const App = () => {
  const [modalOpen,setModalOpen]=useState(false);
  const [profile,setProfile] = useState([
    {
      imgSrc :"https://images.pexels.com/photos/824201/pexels-photo-824201.jpeg?auto=compress&cs=tinysrgb&w=600",
      title :"Brown Ceramic Cup",
      detail :"Uploaded on January 18th, 2024"
    },
    {
      imgSrc :"https://images.pexels.com/photos/14616832/pexels-photo-14616832.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title :"Coffee in a cup",
      detail :"Uploaded on December 1st, 2022"
    },
    {
      imgSrc : "https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title :"Close-up of Coffee Cup on Table",
      detail :"Uploaded on February 2nd, 2017"
    },
    {
      imgSrc :"https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title :"Cooked Seafoods",
      detail :"Uploaded on November 24th, 2017"
    },
    {
      imgSrc:"https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title :"Bread With Soup",
      detail :"Uploaded on June 13th, 2019"
    }
  ] )
  const [rowToEdit, setRowToEdit] = useState(null);
  const handleDelete = (targetIndex) => {
    setProfile(profile.filter((_, idx) => idx !== targetIndex));
  };
  const handleSubmit =(newProfile)=>{
    rowToEdit === null?
    setProfile ([...profile, newProfile])
    :setProfile(
      profile.map((currRow, idx) => {
        if (idx !== rowToEdit) return currRow;

        return newProfile;
      })
    )
  }
  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };
  const [searchQuery, setSearchQuery] = useState('');
  const filteredProfile = profile.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())||
    item.detail.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div>
       <header>
                <div id="logo"><i className="fa-brands fa-chrome"></i>Download</div>
                <div id="search">
                    <div className="i-search"><i className="fa-solid fa-magnifying-glass"></i></div>
                    <input 
                    type="text" 
                    name="" 
                    className="search-bar" 
                    placeholder="Search download" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    autoFocus />
                </div>
                <div id="colom">
                <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
        </header>
        <div id="profile">
                <p> <i className="fa-solid fa-user"></i> Your <u style={{ color: 'rgb(0, 68, 255)', cursor: 'pointer' }}>profile is manage</u> by sabaicode.com</p>
         </div>
      <Table profile={filteredProfile}deleteRow={handleDelete} editeRow={handleEditRow} />
      <button class="button-57" role="button" onClick={()=> setModalOpen(true)}><span class="text">Add</span><span>Create</span></button>
      {modalOpen && <Modal
      closeModal={()=>{
          setModalOpen(false);
          setRowToEdit(null);
       }}
       defaultValue={rowToEdit !== null && profile[rowToEdit]}
       onSubmit ={handleSubmit}
      />}
    </div>
  )
}

export default App