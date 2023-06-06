import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error(error);

    return (
      <>
        <div class="flex flex-col justify-center items-center m-auto w-11/12 md:max-w-md lg:max-w-lg h-screen md:max-h-screen text-xl" >
          <h1>Oops!</h1>
          <p> Sorry, an unexpected error has occurred.</p>
          <p>
            <i>{error.statusText || error.message}</i>
          </p>
        </div>
      </>
    );
}

export default Error;