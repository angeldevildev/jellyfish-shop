import GameStore from "./Components/Sidebar";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
   <div>
      <GameStore />
      <Analytics />
   </div>
  );
}
