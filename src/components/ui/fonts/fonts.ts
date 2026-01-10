import { Numans, Poppins } from "next/font/google";

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

export { poppins , numans };