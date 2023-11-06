import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "600",
});

const Logo = () => {
  return (
    <div className={`${poppins.className} hidden md:block text-2xl text-blue-800 cursor-pointer`}>
      flatmates
    </div>
  );
};

export default Logo;
