export interface ShowingInfo {
  name: string;
  showingTime: string;
  date: string;
  showingDescriptors?: string;
}

export interface Movie {
  title: string;
  logline: string;
  runtime: string;
  showings: ShowingInfo[]; // 1 showing means ticket is purchased for that. multiple means still deciding
  posterImageName: string;
  rating: string; //type to enum
  releaseYear: string; //type to date?
  genres: string[]; //type to enum?
  styleClassName: string;
}
