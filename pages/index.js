// import { useUser } from "@clerk/nextjs"; TODO: comment this line in to use Clerk Auth 
import React from 'react';
import { getArt } from "@/api/artData";
import ArtCard from "@/components/ArtCard/ArtCard";
import { useEffect, useState } from "react";
import Head from 'next/head';
// import { useUser } from "@clerk/nextjs"; TODO: comment this line in to use Clerk Auth

export default function Home() {
  const [art, setArt] = useState([]);
  // const { user } = useUser(); TODO: comment this line in to use Clerk Auth
  useEffect(() => {
    getArt().then(setArt);
  }, [])
  return (
    <>
      <Head>
        <title>The Sonatore Archive</title>
      </Head>
      <div className="d-flex flex-wrap justify-content-center" >
        {art.map((artObj) => <ArtCard key={artObj.pic} artObj={artObj} />)}
      </div>
    </>
  );
}
