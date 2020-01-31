import React from "react";
import styled from "styled-components"

const Card = styled.div`
width: 500px;
height: 600px;
margin: 0 auto;
margin-top: 30px;
background: #fff;
border: 2px solid grey;
display: flex;
flex-wrap: wrap;
border-radius: 15px 15px;
justify-content: space-between;
`;

const Columns = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
padding: 10px;
`;

const PicBox = styled.div`
width: 200px;
height: 200px;
padding: 10px;
`;
const img = styled.div`
width: 80%
height: 80%
`;

const Font = styled.div`
font-size: ${props =>(props.primary ? `2rem` : `1.0rem`)};
color: #black;
display: flex;
align-items: center;
padding-bottom: ${props =>(props.primary ? `30px` : `20px`)};
`;


const CharacterCard = props => {
    console.log(props);
    return (
        <Card>
            <Columns>
                <Font primary>{props.name}</Font>
                <PicBox>Image: <img alt="" src={props.image} /></PicBox> 
            </Columns>
            <Columns>
                <Font>Species: {props.species}</Font>
                <Font>Status: {props.status}</Font>
            </Columns>
        </Card>
  )
}


export default CharacterCard;