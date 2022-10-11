import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";
import hero from "../../images/hero.jpg";

const Home = () => {
  const topics = useLoaderData().data;

  return (
    <div>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 my-8 p-4 m-2 border">
        <img className="order-last md:order-first rounded-sm" src={hero} alt="" />
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-5">
            Sharp your skill and test your knowledge with our site.
          </h2>
          <p className="text-lg">
            A skill is the learned ability to perform an action with determined
            results with good execution often within a given amount of time,
            energy, or both. Skills can often be divided into domain-general and
            domain-specific skills.
          </p>
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
