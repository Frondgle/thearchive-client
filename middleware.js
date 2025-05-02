export default function middleware(req) {
  return NextResponse.next(); // Allow all requests to proceed
}
