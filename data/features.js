import { BrainCircuit, Briefcase, LineChart, ScrollText } from "lucide-react";

export const features = [
  {
    icon: <BrainCircuit className="w-10 h-10 mb-4 text-primary" />,
    title: "ASmart Resume Builder",
    description:
      "Create ATS-friendly, job-winning resumes in minutes.",
  },
  {
    icon: <Briefcase className="w-10 h-10 mb-4 text-primary" />,
    title: "AI Mock Interviews",
    description:
      "Practice with role-specific AI interviews and receive instant feedback.",
  },
  {
    icon: <LineChart className="w-10 h-10 mb-4 text-primary" />,
    title: "Industry Trends",
    description:
      "Explore real-time market insights to target the right opportunities.",
  },
  {
    icon: <ScrollText className="w-10 h-10 mb-4 text-primary" />,
    title: "Custom Cover Letters",
    description: "Auto-generate personalized cover letters tailored to each application.",
  },
];
