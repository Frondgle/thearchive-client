// import { useUser } from "@clerk/nextjs"; TODO: comment this line in to use Clerk Auth 
import React from 'react';
import { getArt } from "@/api/artData";
import ArtCard from "@/components/ArtCard/ArtCard";
import { useEffect, useState } from "react";
import Head from 'next/head';
import { Pagination } from 'react-bootstrap';
// import { useUser } from "@clerk/nextjs"; TODO: comment this line in to use Clerk Auth

export default function Home() {
  const [art, setArt] = useState([]);
  const [arrLength, setArrLength] = useState([]);


  // const { user } = useUser(); TODO: comment this line in to use Clerk Auth
  useEffect(() => {
    getArt().then(setArt);
    const lengthArr = new Array(Math.ceil((art.length / 6)));
    setArrLength(lengthArr.fill(0));
  }, [])
  return (
    <>
      <Head>
        <title>The Sonatore Archive</title>
      </Head>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        {arrLength.map((_, idx) => <Pagination.Item key={idx}>{idx + 1}</Pagination.Item>)}
        {/* <Pagination.Item>{1}</Pagination.Item> */}
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
      <div className="d-flex flex-wrap justify-content-center" >
        {art.map((artObj) => <ArtCard key={artObj.pic} artObj={artObj} />)}
      </div>
    </>
  );
}
