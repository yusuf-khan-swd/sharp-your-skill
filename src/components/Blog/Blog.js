import React from "react";

const Blog = () => {
  return (
    <div className="max-w-3xl mx-auto p-3 mb-12">
      <div className="mb-8">
        <h2 className="font-bold mb-2 text-xl">
          What is the purpose of React Router?
        </h2>
        <p>
          In Single Page Application React Router is very important to make and
          feel website dynamic.
        </p>
        <p>We used it to load component dynamically based on url.</p>
      </div>
      <div className="mb-8">
        <h2 className="font-bold mb-2 text-xl">How does context api work?</h2>
        <p>Its work like a global variable.</p>
        <p>
          In react data can only pass data from parent component to children
          component.
        </p>
        <p>
          And if we want to access some data from a different children component
          to another parent component we have to use props drilling. And here
          come context api to rescue us.
        </p>
        <p>
          Its value can be share with all the children component. Its declare
          using <code className="text-red-600">createContext()</code> Hook.
        </p>
        <p>
          For Using its value we have to call{" "}
          <code className="text-red-600">useContext()</code> Hook.
        </p>
      </div>
      <div className="mb-8">
        <h2 className="font-bold mb-2 text-xl">
          React <code className="text-red-600">useRef</code> Hook.{" "}
        </h2>
        <p>
          The <code className="text-red-600">useRef</code> Hook allows us to
          persist values between renders.
        </p>
        <p>
          It can be used to store a mutable value that does not cause a
          re-render when updated.
        </p>
        <p>It can be used to access a DOM element directly.</p>
      </div>
    </div>
  );
};

export default Blog;
