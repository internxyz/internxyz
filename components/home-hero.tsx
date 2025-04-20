import Image from "next/image";

export default function HomeHero() {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Top row - Your AI */}
      <div className="flex items-center">
        <Image className="mr-2 rotate-[-15deg]" src="/logo.svg" alt="Logo" width={50} height={50} />
        <span className="text-2xl md:text-5xl font-bold mr-4">Your</span>
        <span className="text-xl md:text-5xl font-bold bg-[#1a1a1a] text-white px-3 py-2 rounded-md transform rotate-[8deg] inline-block">
          AI Intern
        </span>
      </div>

      {/* Stylized plus with shadow and tilt */}
      <div className="relative w-8 h-8 flex items-center justify-center transform rotate-[10deg]">
        {/* Shadow layer */}
        <div className="absolute w-10 h-3 bg-gray-400 rounded-full transform translate-x-[5px] translate-y-[4px]"></div>
        <div className="absolute w-3 h-10 bg-gray-400 rounded-full transform translate-x-[5px] translate-y-[4px]"></div>

        {/* Main plus */}
        <div className="absolute w-10 h-3 bg-[#eeeeee] rounded-full"></div>
        <div className="absolute w-3 h-10 bg-[#eeeeee] rounded-full"></div>
      </div>

      {/* Bottom row - Crypto wallet */}
      <div className="flex items-center mt-4">
        <span className="text-xl md:text-5xl font-bold bg-[#1a1a1a] text-white px-3 pt-2 pb-2 md:pb-4 rounded-md transform rotate-[-8deg] inline-block">
          Crypto
        </span>
        <span className="text-2xl md:text-5xl font-bold ml-4">app</span>
      </div>
    </div>
  );
}
