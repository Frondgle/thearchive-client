/* eslint-disable react/no-unescaped-entities */
// import { useUser } from "@clerk/nextjs"; TODO: comment this line in to use Clerk Auth 
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  // const { user } = useUser(); TODO: comment this line in to use Clerk Auth
  return (
    <>
      <h1 className="mb-3">Home Page</h1>
      {/* {user?.id ? (
        <h3>Welcome {user.username}, you are currently logged in!</h3>
      ) : (
        <>
          <p>This is the main page. You can see all non-protected routes even if you aren't logged in!</p><p>
            <a href="#" onClick={() => router.push('/restricted')} className="text-white-50">
              Try to go to this Restricted Page while You are logged out.
            </a>
          </p>
        </>
      )} */}
    </>
  )
}
