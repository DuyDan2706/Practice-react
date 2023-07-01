import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { fetchAllUser } from "../services/UsserService";
import ReactPaginate from "react-paginate";
import ModalAddNewUser from "./ModalAddNewUser";
import ModalEditUser from "./ModalEditUser";
import _ from "lodash"


const TableUsers = (props) => {
  const [listUser, SetListUser] = useState([]);
  const [totalUser, SetTotalUser] = useState(0);
  const [totalPages, setTotalPage] = useState(0);
  const [isshowModalAddNew, SetIsshowModalAddNew] = useState(false);

  const [isshowModaleditNew, SetIsshowModaleditNew] = useState(false); 
 
  const [dataUserEdit,SetDataUserEdit]=useState(); 

  const handleClose = () => {
    SetIsshowModalAddNew(false);
    SetIsshowModaleditNew(false)
  };
 
  const handleUpdateTabe = (user)=>  {
    SetListUser([user,...listUser])
  }

  const handleEditFromModal = (user)=>{
    let cloneListUser = _.cloneDeep(listUser)
    let index = listUser.findIndex(item => item.id=== user.id)
    cloneListUser[index].first_name=user.first_name
     SetListUser(cloneListUser)

  console.log("user",index)
  }

  useEffect(() => {
    //call apis list user

    getUser(1);
  }, []);

  const getUser = async (page) => {
    let res = await fetchAllUser(page);
   
    if (res && res.data) {
     
      SetTotalUser(res.total);
      SetListUser(res.data);
      setTotalPage(res.total_pages);
    
    }
  };

  const handlePageClick = (event) => {
    // getUser(1)
    getUser(+event.selected + 1);
  };
  const handleEditUser= (user)=> {
 
 SetDataUserEdit(user)
 SetIsshowModaleditNew(true)
  }
  return (
    <>
      <div className="my-3 add-new">
        <span>
          <b>List User :</b>
        </span>
        <button
          className="btn btn-success"
          onClick={() => SetIsshowModalAddNew(true)}
        >
          Add new user
        </button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <tr key={`user-${index}`}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td >
                    <button className="btn btn-warning mx-3 "
                      onClick={() => handleEditUser(item)}
                    >Edit</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={totalPages}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
      />
      <ModalAddNewUser show={isshowModalAddNew}
       handleClose={handleClose}
       handleUpdateTabe = {handleUpdateTabe}
        />
        <ModalEditUser 
          show={isshowModaleditNew}
          dataUserEdit={dataUserEdit}
          handleClose={handleClose}
          handleEditFromModal = {handleEditFromModal}
        />
    </>
  );
};
export default TableUsers;
