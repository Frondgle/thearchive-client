import React from 'react';
import { Button, Card } from 'react-bootstrap';

export default function ArtCard({ artObj }) {
  const cloudinaryURL = 'https://res.cloudinary.com/dsakdzjkk/';
  return (
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={`${cloudinaryURL}${artObj.pic}`} />
      <Card.Body>
        <Card.Title>{artObj.title || 'Untitled'}</Card.Title>
        <Card.Text>{artObj.description || 'No Description'}</Card.Text>
        <Button variant="primary">View Art</Button>
      </Card.Body>
    </Card>
  );
}
