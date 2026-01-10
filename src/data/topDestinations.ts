export type CountryCardProps = {
  imageSrc: string;
  href?: string;
  title: string;
  description: string;
  slug: string;
  priority?: boolean;
};

export const countryCardProps: CountryCardProps[] = [
  {
    slug: "japan",
    href: "/studyabroad/japan",
    imageSrc: "/images/countries/japan.png",
    title: "Study in Japan",
    description:
      "Japan has become one of the most popular destinations for international students who wish to combine quality education with cultural immersion.",
  },
  {
    slug: "australia",
    href: "/studyabroad/australia",
    imageSrc:
      "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=2130",
    title: "Study in Australia",
    description:
      "Australia continues to be a highly sought-after destination for international students, particularly from Nepal, thanks to its world-class universities...",
  },
  {
    slug: "uk",
    imageSrc: "/images/countries/uk.jpg",
    title: "Study in UK",
    description:
      "Discover prestigious institutions, rich academic heritage, and globally recognized degrees in the United Kingdom.",
  },

  {
    slug: "canada",
    imageSrc: "/images/countries/canada.jpg",
    title: "Study in Canada",
    description:
      "Explore quality education, multicultural environment, and excellent post-study work opportunities in Canada.",
  },

  {
    slug: "new-zealand",
    imageSrc: "/images/countries/uk.jpg",
    title: "Study in New Zealand",
    description:
      "Experience innovative teaching methods, stunning natural beauty, and a welcoming international community.",
  },
  {
    slug: "south-korea",
    imageSrc: "/images/countries/southkorea.jpg",
    title: "Study in South Korea",
    description:
      "Benefit from tuition-free education at public universities and gain access to Europe's strongest economy.",
  },
  // {
  //   slug: 'ireland',
  //   imageSrc: "/images/countries/japan.png",
  //   title: "Study in Ireland",
  //   description: "Access quality education in English, enjoy European culture, and benefit from a thriving tech industry."
  // },
];