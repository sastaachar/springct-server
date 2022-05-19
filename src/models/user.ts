type User = {
  userid: string;
  pass: string;
  admin: boolean;
};

export type Users = {
  [userid: string]: User;
};
