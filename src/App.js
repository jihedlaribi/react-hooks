
import './App.css';
import Movie from './components/Movie';
import MovieList from './components/MovieList';
import {useState} from 'react'
import MovieNav from './components/MovieNav';


function App() {
  const [movieList, setMovieList] = useState([
    {id:1,
    image:'https://i.ebayimg.com/images/g/RScAAOSwsJpfCgYB/s-l300.jpg',
    
    title: 'The Green Mile',
    rating: 2,
    description:'1999'},
    {id:2,
    image:'https://images-na.ssl-images-amazon.com/images/I/81luv8TaKlL._AC_SY879_.jpg',
    
    title: 'The Revenant',
    rating: 4,
    description:'2015'},
    {id:3,
    image:'https://www.cdiscount.com/pdt2/9/4/8/1/700x700/clo4035519880948/rw/poster-batman-the-dark-knightle-joker-heath.jpg',
    title: 'Dark Knight',
    rating: 3,
    description:'2008'},
    {
      id:1,
      image:'https://images-na.ssl-images-amazon.com/images/I/817O-vUusjL._AC_SL1500_.jpg',
    title: 'Jurassic World',
    rating:4,
    description:'2015'
  }]);
  const handleAdd = (title, image, rating, text) =>
  setMovieList([...movieList, { title, image, rating, text }]);
   
  return (
    <div className="movie">
      <MovieNav handleAdd={handleAdd} movies={movieList}/>
    <MovieList movies={movieList}/>
     <Movie/>
     

    </div>
  );
}

export default App;
