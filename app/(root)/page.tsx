import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="p-4">
        <UserButton afterSignOutUrl="/" />
      </div>
      <div className="flex justify-center items-center capitalize font-bold">
        hello e-com dashboard
      </div>
    </div>
  );
}
