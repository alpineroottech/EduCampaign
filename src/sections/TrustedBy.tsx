import Image from 'next/image'
import Link from 'next/link';

interface EndorsersProps {
    image: string;
    infoText: string;
}

const EndorsersInfo = [
    {
        image: "/images/homepage/image.svg",
        infoText: "Universities Australia",
        href: "https://www.universitiesaustralia.edu.au/"
    },
    // {
    //     image: "images/homepage/Emblem_of_Nepal.svg",
    //     infoText: "Ministry Of Education Nepal",
    //     href: "https://www.moest.gov.np/"
    // },
    {
        image: "/images/homepage/University_of_Tokyo.svg",
        infoText: "University Of Tokyo",
        href: "https://www.u-tokyo.ac.jp/en/"
    },
    {
        image: "/images/homepage/University_of_Tokyo.svg",
        infoText: "University Of Tokyo",
        href: "https://www.u-tokyo.ac.jp/en/"
    }
]

const Endorsers = () => {
    return (
        <div className="flex flex-col md:flex-row md:items-stretch gap-6">
            {/* MOEST Logo - Left Side */}
            {/* <div className="flex flex-col items-center md:items-start md:justify-center gap-4 md:w-[300px] shrink-0">
                <p className='font-extrabold text-xl text-[#9976d0]'>Approved By:</p>
                <div className="bg-[#faf7fc] border border-[#a4a0d0] rounded-xl p-4 h-[calc(100%-2rem)] flex flex-wrap justify-center md:justify-around items-center gap-4 w-full">

                        <Link
                            href="https://www.moest.gov.np"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center"
                        >
                            <Image
                                src="/images/homepage/Emblem_of_Nepal.svg"
                                className="object-contain filter grayscale brightness-150 max-h-full"
                                width={100}
                                height={100}
                                alt="Ministry of Education Nepal Logo"
                            />
                            <p className="mt-2 text-center text-xs sm:text-sm text-gray-700 font-medium">
                                Ministry of Education Nepal
                            </p>
                        </Link>

                </div>
            </div> */}
            <div className="">
                <p className="font-extrabold text-xl text-[#9976d0] mb-2">APPROVED BY:</p>

                {/* e2d4f9 */}
                <div className="bg-[#faf7fc] border border-[#a4a0d0] rounded-xl p-4 h-[calc(100%-2rem)] flex flex-wrap justify-center md:justify-around items-center gap-4">
                    <div className="">

                            <Link
                                href="https://www.moest.gov.np"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col items-center"
                            >
                                <Image
                                    src="/images/homepage/Emblem_of_Nepal.svg"
                                    className="object-contain filter brightness-150 max-h-full"
                                    width={100}
                                    height={100}
                                    alt="Ministry of Education Nepal Logo"
                                />
                                <p className="mt-2 text-center text-xs sm:text-sm text-gray-700 font-medium">
                                    Ministry of Education, Nepal
                                </p>
                            </Link>

                    </div>
                </div>
            </div>


            {/* Trusted By - Right Side */}
            <div className="flex-1">
                <p className="font-extrabold text-xl text-[#9976d0] mb-2">TRUSTED BY:</p>

                {/* e2d4f9 */}
                <div className="bg-[#faf7fc] border border-[#a4a0d0] rounded-xl p-4 h-[calc(100%-2rem)] flex flex-wrap justify-center md:justify-around items-center gap-4">
                    {EndorsersInfo.map((endorser, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-start w-24 sm:w-28 md:w-32"
                        >
                            {/* Smaller fixed-height container */}
                            <div className="flex items-center justify-center h-16 sm:h-20 md:h-24 w-full">
                                <Link
                                    href={endorser.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src={endorser.image}
                                        className="object-contain filter grayscale brightness-150 max-h-full"
                                        width={200}
                                        height={200}
                                        alt={endorser.infoText}
                                    />
                                </Link>
                            </div>

                            {/* Slightly smaller, neat text below */}
                            <p className="mt-1 text-center text-xs sm:text-sm text-gray-700 font-medium">
                                {endorser.infoText}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};



const TrustedBy = () => {
    return (
        <div>
            <div className="relative px-standard mb-6">

                <div>
                    <Endorsers />
                </div>
            </div>
        </div>
    )
}

export default TrustedBy
