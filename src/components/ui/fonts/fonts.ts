import { DM_Sans, Numans, Poppins } from "next/font/google";

const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
    variable: "--font-poppins",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

const numans = Numans({
    variable: "--font-numans",
    subsets: ["latin"],
    weight: ["400"],
});

export { dmSans, poppins, numans };