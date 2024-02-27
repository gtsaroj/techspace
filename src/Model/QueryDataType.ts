export interface QueryDataType {
  id: number;
  step: string;
  question: string;
  options: string[];
  note?: string;
}

export const QueryData: QueryDataType[] = [
  {
    id: 0,
    step: "first",
    question: "What is the primary purpose of the static website ?",
    options: [
      "Portfolio website",
      "Brochure website",
      "Landing page",
      "Education website",
      "Event website",
      "Documentation website",
    ],
  },
  {
    id: 1,
    step: "second",
    question: "What type of advance services you want ?",
    options: [
      "SEO Optimization",
      "Dynamic pages (include UI | content)",
      "Fast Performance",
      "Over 10+ pages",
      "High Security protection",
    ],
  },
  {
    id: 2,
    step: "third",
    question: "What type of advance services you want ?",
    options: [
      "SEO Optimization",
      "Dynamic pages (include UI | content)",
      "Fast Performance",
      "Over 10+ pages",
      "High Security protection",
    ],
  },

  {
    id: 3,
    step: "third",
    question: "How many users will view your website approximately as expected",
    options: [
      "upto 100",
      "100 - 1000",
      "1000 - 10000",
      "10,000 - 1,00,000",
      "over 1,00,000",
    ],
  },
  {
    id: 4,
    step: "fourth",
    question: "what is your timeline to completing the website ?",
    options: [
      "under 1 month",
      "1 - 2 month",
      "2 - 3 month",
      "3 - 4 month",
      "over 4 month",
    ],
  },
  {
    id: 5,
    step: "five",
    question:
      "what budget have you allocated for developing & hosting of your website ?",
    options: [
      "20k - 30k",
      "30k - 40k",
      "40k - 50k",
      "50k - 60k",
      "upto 1 lakh",
    ],
  },
  {
    id: 6,
    step: "six",
    question: "Do you want to maintainance your website in every month ?",
    options: [
      "under 1 month",
      "1 - 2 month",
      "2 - 3 month",
      "3 - 4 month",
      "over 4 month",
    ],
    note: "we will provide 2 month free maintance service at first",
  },
];
