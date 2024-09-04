import React from "react";
import list from "../../public/list.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            omnis, ea minus eum nam ratione dignissimos suscipit neque amet! A
            maiores autem soluta voluptas optio dolor, tenetur omnis quia dicta
            tempora nam id pariatur ad ea architecto. Ea minus eligendi, sed
            necessitatibus corrupti qui distinctio itaque! Distinctio esse earum
            deserunt?
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-pink-700 duration-200">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
