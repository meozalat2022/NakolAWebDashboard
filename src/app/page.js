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
} from "firebase/firestore";
import { db } from "../../config";

export default function Home() {
  const [meals, setMeal] = useState([]);
  const [latestVisited, setLatestVisited] = useState();
  const fetchMeals = async () => {
    try {
      const mealsCollection = query(
        collection(db, "AllMeals"),
        orderBy("timestamp", "desc"),
        limit(2)
      );
      const getMeals = await getDocs(mealsCollection);
      const allMeals = getMeals.docs.map((item) => {
        const data = item.data();
        data.id = item.id;
        return data;
      });

      setMeal(allMeals);
      const lastVisible = getMeals.docs[getMeals.docs.length - 1];
      setLatestVisited(lastVisible);
    } catch (error) {
      console.log("error", error);
    }
  };

  const fetChMore = async () => {
    try {
      const mealsCollection = query(
        collection(db, "AllMeals"),
        orderBy("timestamp", "desc"),
        startAfter(latestVisited),
        limit(2)
      );
      const getMeals = await getDocs(mealsCollection);
      const allMeals = getMeals.docs.map((item) => {
        const data = item.data();
        data.id = item.id;
        return data;
      });

      setMeal((prev) => [...prev, ...allMeals]);
      const lastVisible = getMeals.docs[getMeals.docs.length - 1];
      setLatestVisited(lastVisible);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);
  if (!meals) {
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
      <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
        {meals &&
          meals.map((item) => {
            return (
              <div className="m-1" key={item.id}>
                <Card meal={item} key={item.id} />
              </div>
            );
          })}
      </div>
      <button onClick={fetChMore}>More</button>
    </>
  );
}
