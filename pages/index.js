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
  const [currentIndexStart, setCurrentIndexStart] = useState(0);
  const [currentArr, setCurrentArr] = useState([]);
  // const { user } = useUser(); TODO: comment this line in to use Clerk Auth

  const setCurrentArray = () => setCurrentArr(art.slice(currentIndexStart, currentIndexStart + 6));

  useEffect(() => {
    getArt().then(setArt);
    setCurrentArray();
    const lengthArr = new Array(Math.ceil((art.length / 6)));
    setArrLength(lengthArr.fill(0));
  }, [art, art.length]);

  const handlePagination = (e) => {
    setCurrentIndexStart((Number(e.target.innerText) - 1) * 6);
    setCurrentArray();
  }

  return (
    <>
      <Head>
        <title>The Sonatore Archive</title>
      </Head>
      <Pagination>
        <Pagination.First onClick={() => {
          setCurrentIndexStart(0);
          setCurrentArray();
        }} />
        <Pagination.Prev
          {...(currentIndexStart === 0 ? { disabled: true } : {})}
          onClick={() => setCurrentIndexStart(currentIndexStart - 6)}
        />
        {arrLength.map((_, idx) => (
          <Pagination.Item
            key={idx}
            onClick={handlePagination}
            {...(currentIndexStart / 6 === idx && { active: true })}
          >
            {idx + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          {...(currentIndexStart === ((arrLength.length - 1) * 6) ? { disabled: true } : {})}
          onClick={() => setCurrentIndexStart(currentIndexStart + 6)}
        />
        <Pagination.Last onClick={() => {
          setCurrentIndexStart((arrLength.length - 1) * 6);
          setCurrentArray();
        }} />
      </Pagination>
      <div className="d-flex flex-wrap justify-content-center" >
        {currentArr.map((artObj) => <ArtCard key={artObj.pic} artObj={artObj} />)}
      </div>
    </>
  );
}
