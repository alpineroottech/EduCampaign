import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
    variable: "--font-dm-sans",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

export { dmSans };
