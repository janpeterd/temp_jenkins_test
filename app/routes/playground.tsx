import React from "react";
import type { Route } from "./+types/home";
import PlayGround from "../components/PlayGround";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function PlaygroundPage() {
  return <PlayGround />;
}
