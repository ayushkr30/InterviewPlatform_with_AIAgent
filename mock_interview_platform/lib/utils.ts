import { interviewCovers, mappings } from "@/constants"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const techIconsBaseURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

const normalizeTechName = (tech: string) => {
  const key = tech.toLowerCase().replace(/\.js$/,"").replace(/\s+/g,"");
  return mappings[key as keyof typeof mappings];
};

const checkIconsExists = async (url:string) => {
  try{
    const response = await fetch(url, {method: "HEAD"});
    return response.ok;
  }
  catch{
    return false;
  }
};

export const getTechLogos = async (techArray: string[])=> {
  const logoURLs = techArray.map((tech) => {
    const normalized = normalizeTechName(tech);
    return {
      tech,
      url: `${techIconsBaseURL}/${normalized}/${normalized}-original.svg`,
    };
  });

  const results = await Promise.all(
    logoURLs.map(async ({tech, url})=> ({
      tech,
      url: (await checkIconsExists(url)) ? url: "/tech.svg",
    }))
  );
  return results;
};

export const getRandomInterviewCover= () => {
  const randomIndex = Math.floor(Math.random()* interviewCovers.length);
  return `/covers${interviewCovers[randomIndex]}`;
};

