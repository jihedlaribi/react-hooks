import React from 'react'
import { useState } from 'react'
import AddMovie from './AddMovie'
import { Navbar,Button,FormControl,Form,Nav } from 'react-bootstrap'
import ReactStars from "react-rating-stars-component";
import MovieList from './MovieList';


const MovieNav = ({handleAdd,movies}) => {
    const [show, setShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleHide = () => setShow(false);
    const ratingChanged = (newRating) => {
      console.log(newRating);
    };
 const [search, setSerch] = useState("");

const searchMovie = list.filter(li => li.toLowerCase().includes(search.toLowerCase()))
 
 
    
    return (
        <div>
   <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">NETFLIX</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">  </Nav.Link>
     
    </Nav>
    <Form inline>
    <ReactStars
    count={5}
    onChange={ratingChanged}
    size={24}
    activeColor="#ffd700"
  />
      
      <FormControl onChange={e => setSearch(e.target.value)} type="text" placeholder="Search" className="mr-sm-2" />
      
  
      <Button variant="outline-light" >Search</Button>
   
      <Button onClick={handleShow} variant="outline-light">Add</Button>
      {show ? <AddMovie handleShow={handleShow} handleHide={handleHide} handleAdd={handleAdd} movies={movies}/> : null }
    </Form>
  </Navbar>
 <MovieList searchMovie={searchMovie}/>
        </div>
    )
}

export default MovieNav
