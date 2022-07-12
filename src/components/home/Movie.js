import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import thumb from '../../images/home/thumb.svg';
import check from '../../images/home/check.svg';
import down from '../../images/home/down.svg';
import play from '../../images/home/play.svg';

function Movie(props) {

    const MovieMovement = {
        hidden: {
            scale: 1,
        },
        hover: {
            scale: 1.3,
            zIndex: 2
        }
    }

    const InfoMovement = {
        hidden: {
            backgroundColor: '#303030',
            zIndex: -1,
            marginTop: '-4rem',
            opacity: 0
        },
        hover: {
            marginTop: '0rem',     
            opacity: 1
        }

    }


    return (
        <motion.div 
            className="movie"
            variants={MovieMovement}
            initial='hidden'
            whileHover='hover'
            animate='hidden'
        >
            <img className="movie-img" src={props.src}/>
            <MovieInfo
                variants={InfoMovement}
            >
                <div className="movie-buttons">
                    <Icon src={play} icon="play" play={() => props.play()} />
                    <Icon src={check} icon="check" play={() => props.play()} />
                    <Icon src={thumb} icon="thumb" play={() => props.play()} />
                    <Icon src={down} icon="down" play={() => props.play()} />
                </div>
                <div className="movie-rating">
                </div>
                <div className="descriptive-words">

                </div>
            </MovieInfo>
        </motion.div>
    );
}


function Icon(props) {
    console.log(props)
    const style = {
        marginRight: props.icon === 'thumb' ? 'auto' : '',
        cursor: 'pointer'
    }
    return (
        <div 
            className={"movie-icon"} 
            style={style}
            onClick={props.play}
        >
            <img src={props.src} /> 
        </div>
    );
}

const MovieInfo = styled(motion.div)`
    box-shadow: 0px 0px 8px black;
    background-color: blue;
    border-radius: 4px;
    z-index: -1;
`;

export default Movie;