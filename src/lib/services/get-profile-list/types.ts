export type Profile = {
  name: string;
  position: string;
  experience: string;
  skills: Array<string>;
  image: string;
  flag: string;
};

export type GetProfileListResponse = Array<Profile>;
