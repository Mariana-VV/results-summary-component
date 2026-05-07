import data from "../../public/data.json";

export type Score = {
  category: string;
  score: number;
  icon: string;
};

export function getData(): Promise<Score[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 1500);
  });
}
