import Image from 'next/image'

interface HeroSectionProps {
    imageSrc: string;
    title: string;
}

// Dynamic padding based on title length for cohesive appearance
const getTitlePadding = (title: string): string => {
    const length = title.length;
    if (length <= 10) return 'px-16 sm:px-20'; // Short titles like "About Us"
    if (length <= 18) return 'px-12 sm:px-16'; // Medium titles like "Test Preparation"
    return 'px-8 sm:px-12'; // Longer titles like "Japanese Language"
};

const HeroSection = ({ imageSrc, title }: HeroSectionProps) => {
    const titlePadding = getTitlePadding(title);
    
    return (
        <div className="relative h-[250px] sm:h-[300px] md:h-[350px] grid grid-cols-1 sm:grid-cols-6 grid-rows-1 mb-8 sm:mb-12 transition-[height] duration-300">
            <div className="hidden sm:grid col-span-1 row-span-1 h-full bg-[#ebe9e1] items-center">
                <div className={`absolute z-20 ml-4 sm:ml-8 bg-gradient-to-r from-white/80 to-white/10 py-8 sm:py-15 ${titlePadding} border-l-8 sm:border-l-10 border-l-[#df5252] shadow-[0_2px_24px_rgba(0,0,0,0.04)] transition-all duration-300`}>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl transition-[font-size] duration-300">{title}</h2>
                </div>
            </div>

            <Image
                src={imageSrc}
                width={1220}
                height={400}
                alt={`${title} Hero`}
                className="grid col-span-1 sm:col-span-5 h-full w-full object-cover"
            />

            {/* Mobile Title Overlay */}
            <div className="absolute inset-0 sm:hidden bg-gradient-to-r from-black/70 to-black/40 flex items-center">
                <div className="ml-4 p-6 border-l-8 border-l-[#df5252]">
                    <h2 className="text-2xl text-white font-bold">{title}</h2>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;