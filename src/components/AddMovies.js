import React, { useState } from "react";
import { Modal, FormControl, Button} from "react-bootstrap";

function AddMovies ({newMovie,setNewMovie,Add}) {
  const handleChange = (e) => {

    setNewMovie({...newMovie, [e.target.name] : e.target.value});

}
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
    
  
  return (
    <div className='addmovie'>
     
      <Button variant="primary" onClick={handleShow}>
        Add A New Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>GO Ahead</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FormControl type="text" placeholder=" title" name="title" className="mr-sm-2"  onChange={handleChange}  />
          <FormControl type="text" placeholder="rate" name="rate" className="mr-sm-2"  onChange={handleChange}  />
          <FormControl type="text" placeholder="description" name="description" className="mr-sm-2"  onChange={handleChange}  />
          <FormControl type="text" placeholder="img" name="img" className="mr-sm-2"   onChange={handleChange} />
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {handleClose() ; Add(newMovie)}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  
    </div>
  );
};

export default AddMovies;
