import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import hero from "../../images/hero.jpg";

const Home = () => {
  const topics = useLoaderData().data;

  return (
    <div className="mt-20 container mx-auto">
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 border m-3 mb-20 p-5 rounded-md shadow-lg">
        <div className="order-last md:order-first ">
          <img className="rounded-md max-h-80 w-full" src={hero} alt="" />
        </div>
        <div className="text-center mb-5 md:mb-0">
          <h2 className="text-2xl font-bold mb-5">
            Sharp your skill and test your knowledge with our site.
          </h2>
          <p className="text-lg">
            A skill is the learned ability to perform an action with determined
            results with good execution often within a given amount of time,
            energy, or both. Skills can often be divided into domain-general and
            domain-specific skills.
          </p>
          <div className="mt-5">
            <Link to='/topics'>
              <button className="bg-red-400 py-1 px-2 mr-2 rounded-md font-medium hover:bg-red-500">Quiz Topics</button>
            </Link>
            <Link to='/statistics'>
              <button className="bg-red-400 py-1 px-2 mr-2 rounded-md font-medium hover:bg-red-500">See Statistics</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-28">
        {topics.map((topic) => (
          <Topic key={topic.id} topic={topic}></Topic>
        ))}
      </div>
    </div>
  );
};

export default Home;
