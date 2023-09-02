import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1>Home page</h1>
      <Link href={'/dashboard'}  className={buttonVariants({ variant: "default" })}>Dashboard</Link>
    </div>
  );
}
