import Image from "next/image";
import Link from "next/link";
import React from "react";
const Card = ({ meal, deleteMeal }) => {
  return (
    <>
      <div className="w-[280px]  group cursor-pointer p-3 hover:shadow-slate-400 shadow-md rounded-lg border border-slate-400 m-2 transition-shadow duration-200">
        <div className="mb-2 text-center text-blue-600 hover:underline">
          <h4>{meal.title}</h4>
        </div>
        <div className=" mx-auto  w-[250px] h-[200px]">
          <img
            className="max-w-[250px] max-h-[200px] rounded-md"
            src={meal.imageUrl}
            alt={meal.title}
            style={{ minWidth: 250, minHeight: 200 }}
          />
        </div>
      </div>
      <div className="flex justify-center items-center ">
        <Link
          className="mx-2 bg-blue-600 p-2 text-center text-white text-sm rounded-lg "
          href={`/EditMeal/${meal.id}`}
        >
          تعديل الوصفة
        </Link>

        {/* <button className="mx-2 bg-blue-600 p-2 text-center text-white text-sm rounded-lg ">
          تعديل الوصفة
        </button> */}
        <button
          onClick={deleteMeal}
          className="mx-2 bg-blue-600 p-2 text-center text-white text-sm rounded-lg "
        >
          مسح الوصفة
        </button>
      </div>
    </>
  );
};

export default Card;
