import Image from "next/image";
import Card from "./components/Card";
import { MEALS } from "@/data/meals";

export default function Home() {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4">
      {MEALS.map((item) => {
        return (
          <div className="m-1" key={item.id}>
            <Card meals={item} key={item.id} />
          </div>
        );
      })}
    </div>
  );
}
