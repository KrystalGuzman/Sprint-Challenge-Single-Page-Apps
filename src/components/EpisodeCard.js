import React from "react";
import styled from "styled-components"

const Card = styled.div`
width: 500px;
height: 200px;
margin: 0 auto;
margin-top: 30px;
background: #fff;
border: 2px solid gray;
display: flex;
flex-wrap: wrap;
border-radius: 15px 40px;
justify-content: space-between;
`;

const Columns = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 10px;
`;

const Font = styled.div`
font-size: ${props =>(props.primary ? `2rem` : `1.0rem`)};
color: black;
display: flex;
align-items: center;
padding-bottom: ${props =>(props.primary ? `30px` : `20px`)};
`;


const EpisodeCard = props => {
    console.log(props);
    return (
        <Card>
            <Columns>
                <Font primary>{props.name}</Font>
                <Font>Air Date: {props.air_date}</Font>
                <Font>Episode: {props.episode}</Font>
            </Columns>
        </Card>
    )
}


export default EpisodeCard;
