import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {PostCreatUser} from  "../services/UsserService";
import {  toast } from "react-toastify";


const ModalAddNewUser = (props) => {
  const { show, handleClose,handleUpdateTabe } = props;

  const [name, setName] = useState("");
  const [job, SetJob] = useState("");

  const handleSaveUser =  async() => {
    let res = await PostCreatUser(name,job)
     if(res && res.id){
      handleClose();
      setName('')
      SetJob('')
      toast.success("A user is create success")
      handleUpdateTabe({first_name:name,id:res.id})
      //success
     
     }else {
      //erorr
      toast.error("An enrrorr........")
     }
   
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add new User</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="body-add-new">
          <div>
            <form>
              {/* <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                    className="form-control"
                  value={name}
                  onChange={(event) => setName(event.target.name)}
                />
              </div> */}

              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Job</label>
                <input
                  type="text"
                  className="form-control"
                  value={job}
                  onChange={(event) => SetJob(event.target.value)}
                />
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleSaveUser()}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalAddNewUser;
