import { Helmet } from "react-helmet-async";

export default function Error404() {
  return (
    <>
      <Helmet>
        <title>Page Not Found – KJAR Eyewear</title>
        <meta
          name="description"
          content="Oops! The page you're looking for doesn't exist. Return to KJAR Eyewear homepage or browse products."
        />
      </Helmet>
      <div className="flex justify-center items-center min-h-screen">
        <h1>Oops!!! Page Not Found</h1>
      </div>
    </>
  );
}
