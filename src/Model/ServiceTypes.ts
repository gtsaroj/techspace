
export interface ServiceTypes {
  id: number;
  title: string;
  image : string;
  completedProject: string;
}

export  const ServicesData: ServiceTypes[] = [
  {
    id: 0,
    title: "web design",
    image : "https://cdn.sanity.io/images/tlr8oxjg/production/cbce8b3ffe9e0b82f5d710b56ed210546228c415-1232x690.png?w=3840&q=80&fit=clip&auto=format",
    completedProject : "+6"
  },
  {
    id: 1,
    title: "frontend development",
    image : "https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg",
    completedProject : "+6"
  },
  {
    id: 2,
    title: "backend development",
    image : "https://t3.ftcdn.net/jpg/03/18/60/62/360_F_318606217_Hk8jo2MVoI33SQOkYrfOF929J7JgIP0P.jpg",
    completedProject : "+2"
  },
  {
    id: 3,
    title: "fullstack development",
    image : "https://wallpaperbat.com/img/873547-useful-websites-every-front-end.png",
    completedProject : "+3"
  },
]



export interface PlanPackageTypes {
  id: number;
  plan: string;
  PackagePrice: number,
  totalPage: string;
  features: string[];
}

export const PlanPackages: PlanPackageTypes[] = [
  {
    id: 0,
    plan: "Basic",
    totalPage: "10",
    PackagePrice: 10000,
    features: [
      "upto 10 pages",
      "Image Resolution",
      "Respons,ive/Movile Friendly",
      "Website security/SSL",
      "1 year hosting free",
    ],
  },
  {
    id: 1,
    plan: "Standard",
    totalPage: "20",
    PackagePrice: 30000,
    features: [
      "upto 10 pages",
      "Image Resolution",
      "Respons,ive/Movile Friendly",
      "Website security/SSL",
      "1 year hosting free",
    ],
  },
  {
    id: 2,
    plan: "Premium",
    totalPage: "unlimited",
    PackagePrice: 50000,
    features: [
      "upto 10 pages",
      "Image Resolution",
      "Respons,ive/Movile Friendly",
      "Website security/SSL",
      "1 year hosting free",
    ],
  },
];
