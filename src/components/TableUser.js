import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import {fetchAllUser} from  '../services/UsserService'
const TableUsers = (props)=> {

const [listUser,SetListUser]= useState([]);
   
 useEffect (()=>{
   //call apis list user

   getUser();
  
 },[])

 const getUser = async()=>{
   let res = await fetchAllUser();

    if (res && res.data && res.data.data){
      SetListUser(res.data.data)
    }
   
 }


 console.log(listUser)
    return(<>
 <Table striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>email</th>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
  </thead>
  <tbody>
    {listUser && listUser.length > 0 && listUser.map((item, index) => {
      return (
        <tr key={`user-${index}`}>
          <td>{item.id}</td>
          <td>{item.email}</td>
          <td>{item.first_name}</td>
          <td>{item.last_name}</td>
        </tr>
      );
    })}
  </tbody>
</Table>  

    </>)

}
export default TableUsers;