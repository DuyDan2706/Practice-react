import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { PutEditUser } from "../services/UsserService";
import { toast } from "react-toastify";

const ModalEditUser = (props) => {
  const { show, handleClose, dataUserEdit,handleEditFromModal } = props;

  const [name, setName] = useState("");
  const [job, SetJob] = useState("");

  const handleEditUser = async () => {
    
   let res= await PutEditUser(name,job)
   if(res && res.updatedAt){
    //sucess
    handleEditFromModal({
    first_name:name,
    id:dataUserEdit.id
    })
    handleClose()
    toast.success("A user is edit success")
    //handleUpdateTabe({first_name:name,id:res.id})
    //success
   
   }else {
    //erorr
    toast.error("An enrrorr........")
   }
 
   console.log("111111",res)
  };
 
  useEffect(() => {
    if (show) {
      setName(dataUserEdit.first_name);
  
    }
  }, [dataUserEdit]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User</Modal.Title>
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
        <Button variant="primary" onClick={() => handleEditUser()}>
          comfirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalEditUser;
