import { useRouter } from 'next/router';
import React from 'react';

export default function ViewArtPage() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <h1>View Art Page</h1>
      <h2>{id}</h2>
    </>
  );
}
