// import { useUser } from "@clerk/nextjs"; TODO: comment this line in to use Clerk Auth 
import React from 'react';
import getArt from "@/api/artData";
import ArtCard from "@/components/ArtCard/ArtCard";
// import Image from "next/image";
// import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [art, setArt] = useState([]);

  // const router = useRouter();
  // const { user } = useUser(); TODO: comment this line in to use Clerk Auth
  useEffect(() => {
    getArt().then(setArt);
    console.log(art);
  }, [])
  return (
    <>
      <h1 className="mb-3">Home Page</h1>
      <div className="d-flex flex-wrap justify-content-center">
        {art.map((artObj) => <ArtCard key={artObj.pic} artObj={artObj} />)}
      </div>
    </>
  )
}
