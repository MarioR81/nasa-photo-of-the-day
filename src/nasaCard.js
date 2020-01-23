import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';

const NasaCard = (props) => {
return (
  <Card>
        <CardBody>
          <CardTitle>{props.data.title}</CardTitle>
          <CardSubtitle>Date: {props.data.date}</CardSubtitle>
        </CardBody>
        <img width="100%" src={props.data.hdurl} alt={props.data.title} />
        <CardBody>
          <CardText>Description: {props.data.explanation}</CardText>
          <CardSubtitle>Photo Copyright by: {props.data.copyright}</CardSubtitle>
        </CardBody>
      </Card>
);
};

export default NasaCard;