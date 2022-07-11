import React from "react";
import Movie from "./components/home/Movie";

import './components/home-style.css';
import { nanoid } from "nanoid";

function Home() {
    const genres = [
        "Action",
        "Horror",
        "Drama",
        "Comedy"
    ]

    const [allMovies, setAllMovies] = React.useState(Array(4).fill(Array(6).fill({})));

    function init() {
        setAllMovies(prevState => {
            return prevState.map((genre, genreIndex) => {
                return genre.map((movie, index) => {
                    let randomImage = (genreIndex * 4) + index;
                    console.log(randomImage)
                    return {
                        src: `https://picsum.photos/300/175?random=${randomImage}`,
                        withInfo: false,
                        id: `${genreIndex}${index}`,
                        selected: false
                    }
                });
            });
        });
    }

    React.useEffect(() => {
        init();
    }, []);


    function toggleSelection(id, selected) {
        console.log(selected)
        setAllMovies(prevState => {
            return prevState.map((genre, genreIndex) => {
                return genre.map((movie, index) => {
                    console.log('MOVIE ID: ' + movie.id + " ID: " + id + " " + (id === movie.id))
                    return {
                        ...movie,
                        selected: id === movie.id ? selected : false
                    }
                });
            });
        });
    }
    
    const genresElements = allMovies.map((genre, index) => {
            return (
                <div className="genre" key={nanoid()}>
                    <h2>{genres[index]}</h2>
                    <div className="movie-row">
                        {
                            genre.map(movie => {
                                return (
                                    <Movie 
                                        id={movie.id} 
                                        selected={movie.selected} 
                                        src={movie.src}
                                        grow={() => toggleSelection(movie.id, true)}
                                        shrink={() => toggleSelection(movie.id, false)}
                                        key={nanoid()}
                                    />
                                ); 
                            })
                        }
                    </div>
                </div>
            );
        })
    
    return (
        <div className="home">
            <h1>HOME</h1>
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
            {genresElements}
        </div>
    );
}

export default Home;