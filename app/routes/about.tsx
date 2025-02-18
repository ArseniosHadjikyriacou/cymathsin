import type { Route } from "./+types/about";
import { lorem } from "../utils/dummyText";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CY-MATHS-IN | About Us" },
    { name: "description", content: "About Us" },
  ];
}

export default function About() {
  return (
    <main>

      <h1>About Us</h1>

      <p>{lorem.generateSentences(15)}</p>
      <p>{lorem.generateSentences(15)}</p>

    </main>
  );
};