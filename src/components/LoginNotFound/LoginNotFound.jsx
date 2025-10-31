import { Helmet } from "react-helmet-async";

export default function LoginNotFound() {
  return (
    <>
      <Helmet>
        <title>Login Error – KJAR Eyewear</title>
        <meta
          name="description"
          content="Something went wrong with login. Try again or contact support for assistance."
        />
      </Helmet>
      <div className="flex flex-col justify-center items-center min-h-screen p-4 text-lg font-bold">
        <div>Oops! You are not logged in.</div>
        <div>Login in for Happy Purchasing 👏💥</div>
      </div>
    </>
  );
}
