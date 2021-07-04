import React from 'react'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';
const MovieList = ({movies,searchMovie}) => {
    return (
        <div className="movieList">
 {searchMovie.map((el,index) =>  <div className="movie">
 <Card key={el.id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.image} />
  <Card.Body>
    <Card.Title> {el.title} </Card.Title>
    <Card.Text> {el.description} </Card.Text>
   <StarRatingComponent value={el.rating} />
  </Card.Body>

</Card> </div> )}

        </div>
    )
}

export default MovieList
