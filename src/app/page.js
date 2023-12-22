"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Card from "./components/Card";
import { MEALS } from "@/data/meals";
import Link from "next/link";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  orderBy,
  query,
  limit,
  startAfter,
  getCountFromServer,
} from "firebase/firestore";
import { db } from "../../config";

export default function Home() {
  const [meals, setMeal] = useState([]);
  // const [latestVisited, setLatestVisited] = useState();
  // const [collectionCount, setCollectionCount] = useState(null);
  // const collectionArray = new Array(collectionCount);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchMeals = async () => {
    try {
      const col = collection(db, "Meal");
      // const mealsCount = await getCountFromServer(col);
      // setCollectionCount(mealsCount.data().count);
      const mealsCollection = query(
        col,
        orderBy("timestamp", "desc")
        // limit(2)
      );
      const getMeals = await getDocs(mealsCollection);
      const allMeals = getMeals.docs.map((item) => {
        const data = item.data();
        data.id = item.id;
        return data;
      });

      setMeal(allMeals);
      // const lastVisible = getMeals.docs[getMeals.docs.length - 1];
      // setLatestVisited(lastVisible);
    } catch (error) {
      console.log("error", error);
    }
  };
  // const fetChMore = async () => {
  //   try {
  //     const mealsCollection = query(
  //       collection(db, "AllMeals"),
  //       orderBy("timestamp", "desc"),
  //       startAfter(latestVisited),
  //       limit(2)
  //     );
  //     const getMeals = await getDocs(mealsCollection);
  //     const allMeals = getMeals.docs.map((item) => {
  //       const data = item.data();
  //       data.id = item.id;
  //       return data;
  //     });

  //     setMeal((prev) => [...prev, ...allMeals]);
  //     const lastVisible = getMeals.docs[getMeals.docs.length - 1];
  //     setLatestVisited(lastVisible);
  //   } catch (error) {
  //     console.log("error", error);
  //   }
  // };

  const deleteMeal = async (id) => {
    await deleteDoc(doc(db, "Meal", id));
  };

  useEffect(() => {
    fetchMeals();
  }, []);

  const searchedMeals = meals.filter((val) => {
    if (searchTerm == "") {
      return val;
    } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return val;
    }
  });

  if (!meals || meals.length < 1) {
    return (
      <div className="bg-white w-full h-screen  flex items-center justify-center">
        <img className="w-40" src="/loading.gif" alt="loading" />
      </div>
    );
  }
  return (
    <>
      <div className=" flex justify-center p-4">
        <Link
          className="p-4 rounded-lg bg-blue-900 hover:bg-blue-400 hover:text-blue-900 text-white font-semibold"
          href="/AddMeal"
        >
          اضافة وصفة
        </Link>
      </div>
      <div className="flex justify-center p-4">
        <input
          value={searchTerm}
          className="w-1/2 flex self-center mt-5 rounded-md p-2 text-center"
          type="text"
          placeholder="بحث عن وصفة"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <div className="sm:grid bg-gray-50 h-full rounded-md shadow-2xl sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-7xl mx-auto py-4">
        {searchedMeals &&
          searchedMeals.map((item) => {
            return (
              <div key={item.id} className="m-1">
                <Card
                  deleteMeal={() => {
                    deleteMeal(item.id);
                  }}
                  meal={item}
                />
              </div>
            );
          })}
      </div>

      <div className="flex justify-center items-center mt-10">
        {/* <button
          className="p-4 rounded-lg bg-blue-800 text-white hover:bg-blue-400 px-8"
          onClick={fetChMore}
        >
          المزيد
        </button> */}
      </div>
    </>
  );
}
