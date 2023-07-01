import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { fetchAllUser } from "../services/UsserService";
import ReactPaginate from "react-paginate";

const TableUsers = (props) => {
  const [listUser, SetListUser] = useState([]);
  const [totalUser, SetTotalUser] = useState(0);
  const [totalPages, setTotalPage] = useState(0);

  useEffect(() => {
    //call apis list user

    getUser(1);
  }, []);

  const getUser = async (page) => {
    let res = await fetchAllUser(page);
    console.log("chew new ", res);
    if (res && res.data) {
      console.log("res.data ", res);
      SetTotalUser(res.total);
      SetListUser(res.data);
      setTotalPage(res.total_pages);
    }
  };

  const handlePageClick = (event) => {
    // getUser(1)
    getUser(+event.selected + 1);
  };
  return (
    <>
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
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
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
    </>
  );
};
export default TableUsers;
