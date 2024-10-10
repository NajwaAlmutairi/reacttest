import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
    <div className="flex justify-center items-center w-full h-screen bg-slate-100">
    <div className="flex felx-col items-center justify-center w-[50%] bg-white shadow-md p-4
    ring-2 ring-red-500">
    <div id="error-page ">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
    </div>
    </div>
    </>
  );
}