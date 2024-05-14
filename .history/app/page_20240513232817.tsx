import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import News from "@/components/News";
import Image from "next/image";

export default async function Home() {
  const user = await Current
  return (
    <div className="pt-20">
      <div className="max-w-6xl mx-auto flex justify-between gap-8">
        <Sidebar/>
        <Feed/>
        <News/>

      </div>
    </div>
  );
}
