import type { Route } from "./+types/contact";
import { lorem } from "../utils/dummyText";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "CY-MATHS-IN | Contact Us" },
    { name: "description", content: "Contact Us" },
  ];
}

export default function Contact() {
  return (
    <main>

      <h1>Contact Us</h1>

      <p>{lorem.generateSentences(15)}</p>
      <p>{lorem.generateSentences(15)}</p>

    </main>
  );
};