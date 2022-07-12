import React from "react";
import styled from "styled-components";
import x from '../../images/home/x-symbol.svg'

function RickRoll(props) {
    

    const Screen = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 90vh;
        row-gap: 1rem;
        position: relative;
        background-color: black;
        padding: 2rem;
        margin-top: -7rem;
    `;

    const ExitButton = styled.div`
        filter: invert(100%) sepia(100%) saturate(100%) hue-rotate(10deg) brightness(200%) contrast(10%);
        cursor: pointer;
        width: 2rem;
        height: 2rem;
        top: 1rem;
        right: 1rem;
        position: absolute;
    `;

    return (
        <Screen>
            <iframe width="80%" height="80%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
            <ExitButton onClick={props.closeVideo}>
                <img src={x}/> 
            </ExitButton>
        </Screen>
    );
}

export default RickRoll;