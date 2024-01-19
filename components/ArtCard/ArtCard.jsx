import React from 'react';
import { Button, Card } from 'react-bootstrap';
import styles from './artcard.module.css';

export default function ArtCard({ artObj }) {
  const cloudinaryURL = 'https://res.cloudinary.com/dsakdzjkk/';
  return (
    <Card className={styles.artCard} style={{ width: '12rem' }}>
      <Card.Body className="p-0">
        <Card.Title className={`art-card-title ${styles.cardTitle}`}>
          {artObj.title || 'Untitled'}
        </Card.Title>
        {/* <Card.Text>{artObj.description || 'No Description'}</Card.Text> */}
        {/* <Button variant="primary" className="btn-sm">
          View Art
        </Button> */}
      </Card.Body>
      <Card.Img
        className={styles.cardImg}
        src={`${cloudinaryURL}${artObj.pic}`}
      />
    </Card>
  );
}
