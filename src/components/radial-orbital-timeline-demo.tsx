"use client";

import { User, Cpu, Briefcase, GraduationCap, Mail, Award, Globe, Terminal } from "lucide-react";
import RadialOrbitalTimeline from "@/src/components/ui/radial-orbital-timeline";

const portfolioData = [
  {
    id: 1,
    title: "About Me",
    date: "Profile",
    content: "Versatile Web Developer and IT professional with a strong track record in building internal tools, CRM systems, and travel platforms. Dedicated to operational efficiency and technical excellence.",
    category: "Profile",
    icon: User,
    relatedIds: [2, 4, 5],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Technical Skills",
    date: "Stack",
    content: "Expertise in PHP, Laravel, MySQL, React, TypeScript,TailwindCSS and Node.js. Experienced in Linux (Ubuntu/Zorin) administration, Asterisk VOIP servers, and network maintenance.",
    category: "Technical",
    icon: Cpu,
    relatedIds: [1, 4, 5],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 3,
    title: "Featured Projects",
    date: "Portfolio",
    content: "Creator of 'Royalty Travel Discount'. Developed a company-wide CRM, along with POS and Inventory systems that automated business processes. I've primarily worked on internal systems (intranet tools, QA and coaching portals) that are not publicly accessible due to company confidentiality. These projects involve real-world production use, and I'm happy to walk through the technical implementation, architecture, and impact.",
    category: "Portfolio",
    icon: Globe,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 98,
  },
  {
    id: 4,
    title: "Acquire BPO",
    date: "2022 - Present",
    content: "Intranet Developer & 3x Rockstar Employee. Developed coaching and QA portals, increasing productivity by 20% and reducing navigation time by 30%.",
    category: "Career",
    icon: Award,
    relatedIds: [1, 2, 3, 5],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 5,
    title: "IT Leadership",
    date: "2016 - 2022",
    content: "Former IT Supervisor and Programmer/Analyst. Managed IT teams, maintained BPO networks, and developed business systems using PHP/MySQL.",
    category: "Career",
    icon: Briefcase,
    relatedIds: [1, 2, 4],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 6,
    title: "Connect",
    date: "LinkedIn",
    content: "Let's collaborate! Find me on LinkedIn at linkedin.com/in/nicocarinan or reach out for technical consultations and project inquiries.",
    category: "Social",
    icon: Mail,
    relatedIds: [1, 4],
    status: "pending" as const,
    energy: 100,
  },
];

export function RadialOrbitalTimelineDemo() {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-10 left-10 z-50 pointer-events-none">
        <h1 className="text-4xl font-bold text-white tracking-tighter">
          Nico<span className="text-blue-500"> Carinan</span>
        </h1>
        <p className="text-white/50 text-sm mt-2 font-mono uppercase tracking-widest">
          Web Developer
        </p>
      </div>
      
      <RadialOrbitalTimeline 
        timelineData={portfolioData} 
        centerImage="https://media.licdn.com/dms/image/v2/C5103AQFpBFHc75agOw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1548902034528?e=1776902400&v=beta&t=iYm3-RTeQWANlkuFL8IaoPMulpIhfxrqaTYlWWz4MOY"
      />
      
      <div className="absolute bottom-10 right-10 z-50 flex items-center gap-4 text-white/30 text-xs font-mono uppercase tracking-widest">
        <span>Scroll to Explore</span>
        <div className="w-10 h-px bg-white/20"></div>
        <span>Click Nodes to Expand</span>
      </div>
    </div>
  );
}

export default RadialOrbitalTimelineDemo;
