"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Card from "./components/Card";
import { MEALS } from "@/data/meals";
import Link from "next/link";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../config";

export default function Home() {
  const [meals, setMeal] = useState("");
  const fetchMeals = async () => {
    try {
      const mealsCollection = collection(db, "AllMeals");
      const getMeals = getDocs(mealsCollection);
      const mealsData = (await getMeals).docs.map((item) => {
        const data = item.data();
        data.id = item.id;
        return data;
      });
      const sortedMeals = [];
      for (let i in mealsData) {
        sortedMeals.push({
          title: mealsData[i].title,
          imageUrl: mealsData[i].imageUrl[0],
          id: mealsData[i].id,
          timestamp: mealsData[i].timestamp,
        });
      }
      sortedMeals.sort(function (a, b) {
        return b.timestamp - a.timestamp;
      });

      setMeal(sortedMeals);
      console.log(sortedMeals);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);
  if (!meals) {
    return;
  }
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      <Link href="/AddMeal">اضافة وصفة</Link>
      {meals.map((item) => {
        return (
          <div className="m-1" key={item.id}>
            <Card meal={item} key={item.id} />
          </div>
        );
      })}
    </div>
  );
}
