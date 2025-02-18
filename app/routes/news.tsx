import type { Route } from "./+types/news";
import { lorem } from "../utils/dummyText";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CY-MATHS-IN | News" },
    { name: "description", content: "News" },
  ];
}

export default function News() {
  return (
    <main>

      <h1>News</h1>

      <p>{lorem.generateSentences(15)}</p>
      <p>{lorem.generateSentences(15)}</p>

    </main>
  );
};