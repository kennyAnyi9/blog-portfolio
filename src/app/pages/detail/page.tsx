import React from "react";

export default function Detail() {
  return (
    <React.Fragment>
      <div className="flex min-h-screen flex-col  items-center space-y-10 mt-10">
        <div className="w-11/12 lg:w-3/6 space-y-10 h-fit p-5 rounded-lg bg-background/70 backdrop-blur-lg ring-1 ring-gray-300">
          <h1
            className="text-left  text-2xl md:text-4xl font-bold 
                text-gray-900
                "
          >
            Enhancing Your Next.js Application with Custom Layouts
          </h1>
          <div>
            <h1
              className="text-left  text-lg md:text-xl font-bold 
             text-gray-900
             "
            >
              Introduction
            </h1>
            <p>
              Imagine you’re building a Next.js application. You have a common
              header and footer on every page and only the content in between
              changes. You could include the header and footer on every page,
              but that would mean re-rendering them unnecessarily every time the
              page changes. This is where custom layouts come in.
            </p>
          </div>
          <div>
            <h1
              className="text-left  text-lg md:text-xl font-bold 
             text-gray-900
             "
            >
              Why Custom Layouts?
            </h1>
            <p>
              Imagine you’re building a Next.js application. You have a common
              header and footer on every page and only the content in between
              changes. You could include the header and footer on every page,
              but that would mean re-rendering them unnecessarily every time the
              page changes. This is where custom layouts come in.
            </p>
          </div>
          <div>
            <h1
              className="text-left  text-lg md:text-xl font-bold 
             text-gray-900
             "
            >
              Why Custom Layouts?
            </h1>
            <p>
              Imagine you’re building a Next.js application. You have a common
              header and footer on every page and only the content in between
              changes. You could include the header and footer on every page,
              but that would mean re-rendering them unnecessarily every time the
              page changes. This is where custom layouts come in.
            </p>
          </div>
          <div>
            <h1
              className="text-left  text-lg md:text-xl font-bold 
                text-gray-900
                "
            >
              Implementing Custom Layouts with the getLayout Pattern
            </h1>
            <p>
              Imagine you’re building a Next.js application. You have a common
              header and footer on every page and only the content in between
              changes. You could include the header and footer on every page,
              but that would mean re-rendering them unnecessarily every time the
              page changes. This is where custom layouts come in.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 w-11/12 gap-5 lg:w-3/6 "></div>
      </div>
    </React.Fragment>
  );
}
