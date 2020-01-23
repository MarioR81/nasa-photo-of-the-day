import React from 'react';
import {
  Card, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';
import styled from 'styled-components';

const CardFormat = styled.div`
  align-items: center;
  width: 1600px;
  background-color: #ab7cbd;
  color: black;
  margin: auto;
`;

const NasaImg = styled.img`
  width: 100%;
  align-items: center;
  
`;

const Titleh1 = styled.h1`
  font-size: 3rem;
  text-align: center;
`;

const Titleh2 = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;
const CardText2 = styled.p`
  padding:20px 35px 0 35px; 
`;

const NasaCard = (props) => {
return (
  <CardFormat>
  <Card>
        <CardFormat>
          <Titleh1>{props.data.title}</Titleh1>
          <Titleh2>Date: {props.data.date}</Titleh2>
        <NasaImg width="100%" src={props.data.hdurl} alt={props.data.title} />
          <CardText2>Description: {props.data.explanation}</CardText2>
          <Titleh2>Photo Copyright by: {props.data.copyright}</Titleh2>
        </CardFormat>
      </Card>
  </CardFormat>
);
};

export default NasaCard;