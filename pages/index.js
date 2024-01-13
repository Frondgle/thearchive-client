// import { useUser } from "@clerk/nextjs"; TODO: comment this line in to use Clerk Auth 
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  // const { user } = useUser(); TODO: comment this line in to use Clerk Auth
  return (
    <>
      <h1 className="mb-3">Home Page</h1>
    </>
  )
}
