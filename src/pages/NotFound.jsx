import React from "react";

const NotFound = () => {
  return (
    <div className="flex justify-center  min-h-screen items-center flex-col">
      <h1 className="text-3xl font-bold text-red-600">Ooops!</h1>
      <p className="my-2 text-xl">Sorry, an unexpected error has occured</p>
      <p className="text-4xl font-bold">Page not found</p>
    </div>
  );
};

export default NotFound;
