import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import styled from 'styled-components';

const NasaImg = styled.img`
  width: 1000px;
  

`;

const NasaCard = (props) => {
return (
  <Card>
        <CardBody>
          <CardTitle>{props.data.title}</CardTitle>
          <CardSubtitle>Date: {props.data.date}</CardSubtitle>
        </CardBody>
        <NasaImg width="100%" src={props.data.hdurl} alt={props.data.title} />
        <CardBody>
          <CardText>Description: {props.data.explanation}</CardText>
          <CardSubtitle>Photo Copyright by: {props.data.copyright}</CardSubtitle>
        </CardBody>
      </Card>
);
};

export default NasaCard;