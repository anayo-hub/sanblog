import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

function Navbar() {
  return (
    <div className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] w-full relative flex items-center justify-between max-w-5xl mx-auto px-4 py-3 shrink-[2] mb-10">
      <Link href="/" className="font-bold text-3xl">
        Mussia<span className="text-primary">Blog</span>
      </Link>
      <ModeToggle />
    </div>
  );
}

export default Navbar;
