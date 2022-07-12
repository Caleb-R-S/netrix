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
                    newDistance = genre.distance === 'auto' ? '-12rem': 'auto';
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
            console.log(genre.toggled);
            return (
                <motion.div 
                    className="genre" 
                    key={nanoid()}
                    initial='hidden'
                    animate='hidden'
                    whileHover='hover'
                >
                   {genre.toggled && <LeftArrow
                        variants={MoveVideosButtonAnimation}
                        onClick={() => showNewMovies(genre.id)}
                    >
                        {String.fromCodePoint(12296)}
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
                        {String.fromCodePoint(12297)}
                    </RightArrow>} 
                </motion.div>
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
        // display: 'none'
        opacity: 0
    },
    hover: {
        // display: 'flex',
        opacity: 1,
        zIndex: 3
    }
}

const MovieRow = styled(motion.div)`
    dipslay: flex;
    flex-direction: column;
`;

const RightArrow = styled(motion.button)`
    background: linear-gradient(to right, #00000000, #000000FF);
    border: none;
    position: absolute;
    right: 0;
    height: 175px;
    margin-top: 2.5rem;
    width: 4rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1.5rem;
`;


const LeftArrow = styled(motion.button)`
    background: linear-gradient(to right, #000000FF, #00000000);
    border: none;
    position: absolute;
    left: 0;
    height: 175px;
    margin-top: 2.5rem;
    width: 4rem;
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.5rem;
`;

export default Home;