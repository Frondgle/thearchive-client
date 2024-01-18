// import { useUser } from "@clerk/nextjs"; TODO: comment this line in to use Clerk Auth 
import getArt from "@/api/artData";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [art, setArt] = useState([]);
  const cloudinaryURL = 'https://res.cloudinary.com/dsakdzjkk/';
  // const router = useRouter();
  // const { user } = useUser(); TODO: comment this line in to use Clerk Auth
  useEffect(() => {
    getArt().then(setArt);
    console.log(art);
  }, [])
  return (
    <>
      <h1 className="mb-3">Home Page</h1>
      <div className="d-flex flex-wrap ">
        {art?.map(taco => (
          <div key={taco.pic} >
            <Image src={`${cloudinaryURL}${taco.pic}`} width={300} height={300} alt="art" />
            <h3>{taco.title}</h3>
          </div>
        ))}
      </div>
    </>
  )
}
