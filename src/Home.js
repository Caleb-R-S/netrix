import React from "react";
import Movie from "./components/home/Movie";
import RickRoll from "./components/home/RickRoll";
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
    const [playVideo, setPlayVideo] = React.useState(false);

    function toggleVideo() {
        setPlayVideo(prevState => !prevState);
    }

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
                    }
                });
            });
        });
    }

    React.useEffect(() => {
        init();
    }, []);

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
                                        src={movie.src}
                                        play={toggleVideo}
                                        key={nanoid()}
                                    />
                                ); 
                            })
                        }
                    </div>
                </div>
            );
        })
    console.log(playVideo);
    return (
        <div className="home">
            <h1>HOME</h1>
            {playVideo ? <RickRoll closeVideo={toggleVideo}/> : <>{genresElements}</>}
        </div>
    );
}

export default Home;