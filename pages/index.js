// import { useUser } from "@clerk/nextjs"; TODO: comment this line in to use Clerk Auth 
import React from 'react';
import { getArt } from "@/api/artData";
import ArtCard from "@/components/ArtCard/ArtCard";
import { useEffect, useState } from "react";
// import { useUser } from "@clerk/nextjs"; TODO: comment this line in to use Clerk Auth
import { useRouter } from 'next/router';

export default function Home() {
  const [art, setArt] = useState([]);
  // const { user } = useUser(); TODO: comment this line in to use Clerk Auth
  useEffect(() => {
    getArt().then(setArt);
  }, [])
  return (
    <>
      <div className="d-flex flex-wrap justify-content-center" >
        {art.map((artObj) => <ArtCard key={artObj.pic} artObj={artObj} />)}
      </div>
    </>
  );
}
