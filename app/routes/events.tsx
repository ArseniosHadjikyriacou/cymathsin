import type { Route } from "./+types/events";
import { lorem } from "../utils/dummyText";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CY-MATHS-IN | Events" },
    { name: "description", content: "Events" },
  ];
}

export default function Events() {
  return (
    <main>

      <h1>Events</h1>

      <p>{lorem.generateSentences(15)}</p>
      <p>{lorem.generateSentences(15)}</p>

    </main>
  );
};