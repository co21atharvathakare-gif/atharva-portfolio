import b2bImage from "@/assets/projects/b2b-crm.png";
import olistImage from "@/assets/projects/olist-supply-chain.png";
import employeeImage from "@/assets/projects/employee-attrition.png";
import salesImage from "@/assets/projects/sales-data-analysis.png";

export type PortfolioProject = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
  caseStudyUrl?: string;
  keyPoints: string[];
  featured: boolean;
};

// Add another object to this array to publish a new project automatically.
// Images and links are optional until the real repository assets are available.
export const projects: PortfolioProject[] = [
  {
    title: "B2B CRM Sales Pipeline Analysis",
    category: "Data Analytics",
    description:
      "Standardized 8,800+ CRM records and used PostgreSQL to analyze revenue momentum, sales velocity, and manager performance.",
    technologies: ["PostgreSQL", "SQL"],
    image: b2bImage,
    githubUrl: "https://github.com/co21atharvathakare-gif/crm-sales-performance-sql",
    keyPoints: [
      "Standardized inconsistent CRM data",
      "Used CTEs and window functions",
      "Analyzed QoQ revenue momentum",
      "Built a sales-velocity analysis",
      "Identified a 171% Q2 growth spike",
      "Analyzed manager win rates",
    ],
    featured: true,
  },
  {
    title: "Olist E-commerce Logistics & Supply Chain Analysis",
    category: "Data Analytics",
    description:
      "Analyzed 110K+ Olist orders to understand delivery performance, product weight, category demand, and customer review patterns.",
    technologies: ["PostgreSQL", "SQL", "Power BI", "DAX"],
    image: olistImage,
    githubUrl: "https://github.com/co21atharvathakare-gif/olist-supply-chain-analysis",
    keyPoints: [
      "Analyzed 110K+ orders",
      "Measured average delivery time",
      "Compared product weight by category",
      "Analyzed category-level order volume",
      "Reviewed delivery and review KPIs",
    ],
    featured: true,
  },
  /* {
    title: "AI-Powered Document Intelligence & Data Extraction Suite",
    category: "AI / Data Automation",
    description:
      "Built a Streamlit application using Python and the Gemini API to extract structured information from invoices and challans.",
    technologies: ["Python", "Gemini API", "Streamlit"],
    keyPoints: [
      "Multimodal document extraction",
      "Dynamic extraction fields",
      "Editable validation grid",
      "Export to Excel, CSV and PDF",
      "Automated manual data-entry workflow",
    ],
    featured: true,
  }, */
  {
    title: "Employee Attrition Analysis",
    category: "Data Analytics",
    description:
      "An Excel-based workforce analysis using Power Query, Pivot Tables, and interactive filters to explore employee attrition patterns.",
    technologies: ["Excel", "Power Query", "Pivot Tables"],
    image: employeeImage,
    githubUrl: "https://github.com/co21atharvathakare-gif/Employee-Attrition-Analysis",
    keyPoints: [
      "Analyzed overall attrition",
      "Compared attrition by age and job role",
      "Explored overtime patterns",
      "Examined job satisfaction and work-life balance",
    ],
    featured: true,
  },
  {
    title: "Sales Data Analysis Dashboard",
    category: "Data Analytics",
    description:
      "An Excel sales dashboard analyzing revenue, orders, top products, and hourly sales patterns across multiple cities.",
    technologies: ["Excel", "Pivot Tables", "Charts"],
    image: salesImage,
    keyPoints: [
      "Analyzed overall sales and order KPIs",
      "Identified top products by sales and orders",
      "Compared sales performance across cities",
      "Analyzed sales patterns by hour",
    ],
    featured: false,
  },
  {
    title: "Data Cleaning using Python",
    category: "Data Analytics",
    description:
      "A Python and Pandas project focused on preparing inconsistent raw data for reliable downstream analysis.",
    technologies: ["Python", "Pandas"],
    keyPoints: ["Cleaned and standardized raw data", "Prepared analysis-ready outputs"],
    featured: false,
  },
];