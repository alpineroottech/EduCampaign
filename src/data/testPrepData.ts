export interface TestPreparationCard {
  id: string;
  slug: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  color: string;
}

export const testPreparationCards: TestPreparationCard[] = [
  {
    id: "1",
    slug: "japaneselanguage",
    icon: "/images/Translation.png",
    title: "Japanese Language (JLPT)",
    description:
      "Master Japanese through the internationally recognized JLPT exam preparation. Our comprehensive courses cover N5 to N1 levels, focusing on grammar, vocabulary, kanji, reading comprehension, and listening skills. Learn from experienced teachers who graduated from reputed Japanese institutions in a supportive, exam-oriented environment.",
    image: "/images/testpreparation/japanese.jpg",
    color: "#e8d9fd",
  },
  {
    id: "2",
    slug: "sswpreparation",
    icon: "/images/Translation.png",
    title: "SSW Preparation (JFT-Basic)",
    description:
      "Prepare for Japan's Specified Skilled Worker visa with our specialized SSW/JFT Type1 preparation course. Equivalent to JLPT N4 level, this program combines Japanese language training with workplace skills, covering listening, reading, grammar, and industry-specific vocabulary. Includes mock tests, interview preparation, and Japanese work culture guidance.",
    image: "/images/testpreparation/ssw.webp",
    color: "#fdfcda",
  },
  {
    id: "3",
    slug: "ielts",
    icon: "/images/Translation.png",
    title: "IELTS Preparation",
    description:
      "Excel in the IELTS exam with our intensive preparation programs designed for both Academic and General Training modules. Our expert instructors provide comprehensive training in all four skills—Listening, Reading, Writing, and Speaking—with personalized feedback, regular practice tests, and proven strategies to achieve your target band score.",
    image: "/images/testpreparation/ielts.png",
    color: "#fddada",
  },
  {
    id: "4",
    slug: "pte",
    icon: "/images/Translation.png",
    title: "PTE Academic Preparation",
    description:
      "Achieve your desired PTE Academic score with our computer-based test preparation program. Our courses cover all three sections—Speaking & Writing, Reading, and Listening—using AI-scored practice tests, expert strategies for each question type, and comprehensive training to help you succeed in this globally recognized English proficiency exam.",
    image: "/images/testpreparation/pte.jpg",
    color: "#dae9fd",
  },
];
