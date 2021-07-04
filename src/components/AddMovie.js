import React from 'react'
import { Modal,Button,Form } from 'react-bootstrap'
import { useState } from 'react';
const AddMovie = ({handleShow,handleHide,handleAdd,movies}) => {
 
const [title, setTitle] = useState('');
const [image, setSrc] = useState('');
const [rating, setRating] = useState(0);
const [text, setText] = useState('');



 
    return (
        <div>
   <Modal.Dialog  show={handleShow} onHide={handleHide} animation={false}>
    <Modal.Header closeButton onClick={handleHide}>
      <Modal.Title>Add new Movie</Modal.Title>
    </Modal.Header>
  
    <Modal.Body>
    <Form.Control placeholder="Title" onChange={(title)=>setTitle(title.target.value)}/>
        <Form.Control placeholder="image source" onChange={(e)=>setSrc(e.target.value)}/>
        <Form.Control placeholder="rating" onChange={(e)=>setRating(e.target.value)}/>
        <Form.Control as="textarea" rows={3} placeholder="description" onChange={(e)=>setText(e.target.value)}/>
    </Modal.Body>
  
    <Modal.Footer>
      <Button variant="secondary"  onClick={handleHide}>Close</Button>
      <Button variant="primary"onClick={()=>{handleHide()
        handleAdd(title,image,rating,text)}}
        
       >Save changes</Button>
    </Modal.Footer>
  </Modal.Dialog>
  
</div>
    )
}

export default AddMovie
