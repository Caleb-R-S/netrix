import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
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

    const [allMovies, setAllMovies] = React.useState(Array(4).fill(0).map((val, index) => {
        return ({
            // For whatever reason, the init() in the use effect portion doesn't run if I don't initialize 
            // The values that I need here
            toggled: false,
            distance: 'auto',
            movies: [],
            id: index
        })
    }));
    const [playVideo, setPlayVideo] = React.useState(false);

    function showNewMovies(id) {
        setAllMovies((prevState) => {
            return prevState.map((genre) => {
                let newDistance = genre.distance;
                if (id === genre.id) {
                    newDistance = genre.distance === 'auto' ? '-32%': 'auto';
                }
                return ({
                    ...genre,
                    toggled: id === genre.id ? !genre.toggled : genre.toggled,
                    distance: newDistance
                });
            });
        });
    }

    function toggleVideo() {
        setPlayVideo(prevState => !prevState);
    }

    function init() {
        setAllMovies(prevState => {
            return prevState.map((genre, genreIndex) => {
                return ({
                    ...genre,
                    movies: Array(6).fill(0).map((movie, index) => {
                        let randomImage = (genreIndex * 4) + index;
                        return {
                            src: `https://picsum.photos/300/175?random=${randomImage}`,
                            id: `${genreIndex}${index}`,
                        }
                    }),
                });
            });
        });
    }

    React.useEffect(() => {
        init();
    }, []);

    const genresElements = allMovies.map((genre, index) => {
            return (
                <MovieRow
                    className="genre" 
                    key={nanoid()}
                    initial='hidden'
                    // animate={{x: genre.distance, transition: {duration: 4}}} you can add 'transition and duration to control how long things take'
                    whileHover='hover'
                    distance={genre.distance}
                >
                   {genre.toggled && <LeftArrow
                        variants={MoveVideosButtonAnimation}
                        onClick={() => showNewMovies(genre.id)}
                    >
                        <p>{String.fromCodePoint(12296)}</p>
                    </LeftArrow>} 
                    <h2>{genres[index]}</h2>
                    <div className="movie-row">
                        {
                            genre.movies.map(movie => {
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
                   {!genre.toggled && <RightArrow
                        variants={MoveVideosButtonAnimation}
                        onClick={() => showNewMovies(genre.id)}
                    >
                        <p>{String.fromCodePoint(12297)}</p>
                    </RightArrow>} 
                </MovieRow>
            );
    })
    

    return (
        <div className="home">
            <h1>HOME</h1>
            {playVideo ? <RickRoll closeVideo={toggleVideo}/> : <>{genresElements}</>}
        </div>
    );
}


const MoveVideosButtonAnimation = {
    hidden: {
        opacity: 0
    },
    hover: {
        opacity: 1,
        zIndex: 3
    }
}

const MovieRow = styled(motion.div)`
    dipslay: flex;
    gap: 1rem;
    margin-left: ${({...props}) => props.distance}
`;

const RightArrow = styled(motion.button)`
    background: radial-gradient(circle 5rem at 110% 50%, #000000FF, #00000000);
    // background: linear-gradient(to right, #00000000, #000000FF);
    border: none;
    position: absolute;
    right: 0;
    height: 200px;
    margin-top: 1.75rem;
    width: 6rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1.5rem;
    & p {
        margin-right: -.75rem;
    }
`;


const LeftArrow = styled(motion.button)`
    background: radial-gradient(circle 5rem at -30% 50%, #000000FF, #00000000);
    border: none;
    position: absolute;
    left: 0;
    height: 200px;
    margin-top: 1.75rem;
    width: 6rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.5rem;
    & p {
        margin-left: -.75rem;
    }
`;

export default Home;