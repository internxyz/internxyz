import { Button } from "@/components/ui/button";
import Link from "next/link";
import HomeHero from "@/components/home-hero";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <HomeHero />
      <div className="flex flex-col items-center max-w-[320px] md:max-w-lg mt-10">
        <p className="text-center text-xl md:text-2xl">
          Explore crypto with an intern that knows everything and is always
          ready to help.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 mt-10 w-[200px] md:w-[380px]">
        <Button
          asChild
          className="flex items-center p-6 w-full"
        >
          <Link href="https://app.intern.xyz">
            <span className="text-lg md:text-xl">Go to app</span>
          </Link>
        </Button>
        <Button
          variant="secondary"
          asChild
          className="flex items-center p-6 w-full"
        >
          <Link target="_blank" href="https://x.com/internxyz_">
            <span className="mr-1 text-lg">𝕏</span>
            <span className="text-lg md:text-xl">Follow us</span>
          </Link>
        </Button>
      </div>
    </div>
  );
}
