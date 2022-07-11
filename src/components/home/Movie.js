import React from "react";
import thumb from '../../images/home/thumb.svg';
import check from '../../images/home/check.svg';
import down from '../../images/home/down.svg';
import play from '../../images/home/play.svg';

function Movie(props) {



    let style = {
        display : props.selected ? 'block' : 'none',
        borderRadius: "4px"
    }


    return (
        <div onMouseLeave={props.shrink} onMouseEnter={props.grow} className="movie">
            <img className="movie-img" src={props.src}/>
            <div className="movie-info" style={style}>
                <div className="movie-buttons">
                    <Icon src={play} icon="play"/>
                    <Icon src={check} icon="check"/>
                    <Icon src={thumb} icon="thumb"/>
                    <Icon src={down} icon="down"/>
                </div>
                <div className="movie-rating">

                </div>
                <div className="descriptive-words">

                </div>
            </div>
        </div>
    );
}


function Icon(props) {
    const style = {
        marginRight: props.icon === 'thumb' ? 'auto' : ''
    }
    return (
        <div className={"movie-icon"} style={style}>
            <img src={props.src}/> 
        </div>
    );
}

export default Movie;