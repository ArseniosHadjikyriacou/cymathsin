import type { Route } from "./+types/home";
import { lorem } from "../utils/dummyText";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CY-MATHS-IN | Homepage" },
    { name: "description", content: "Welcome to CY-MATHS-IN!" },
  ];
}

export default function Home() {
  return (
    <main>

      <h1>Homepage</h1>

      <p>CY-MATHS-IN is a newly established national network of academics whose research lies in the broad field of mathematical sciences and are interested in collaborative projects with industry.</p>

      <p>{lorem.generateSentences(15)}</p>
      <p>{lorem.generateSentences(15)}</p>

    </main>
  );
};