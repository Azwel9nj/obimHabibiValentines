import type { Route } from "./+types/home";
import ValentineProposal from "../components/ValentineProposal";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "💝 Will You Be My Valentine Obim? 💕" },
    { name: "description", content: "A special Valentine's Day proposal just for you!" },
  ];
}

export default function Home() {
  return <ValentineProposal />;
}
