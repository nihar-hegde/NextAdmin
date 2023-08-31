import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";
import { Hexagon } from "lucide-react";

const Navbar = () => {
  return (
    <div className="bg-zinc-100 py-2 border-b border-s-zinc-200 fixed w-full z-10 top-0">
      <div className="container flex items-center justify-between">
        <Link href={"/"} className="flex flex-row gap-3">
          <Hexagon /> Next Admin
        </Link>
        <Link
          href={"signin"}
          className={buttonVariants({ variant: "default" })}
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
