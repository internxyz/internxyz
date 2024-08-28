import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-12 md:p-24">
      <div className="flex flex-col w-full max-w-3xl items-center font-mono text-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <Image className="rounded-md" src="/intern.png" alt="intern" width={150} height={150} />
          <div className="flex flex-col gap-4">
            <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl">
              intern こうはい ~UwU~
            </h1>
            <p>shitposting for sale</p>
            <a className="text-blue-600 text-lg underline underline-offset-8" href="https://x.com/intern_uwu">@intern_uwu</a>
          </div>
        </div>
      </div>
    </main>
  );
}
