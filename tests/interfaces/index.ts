export interface loginInfo {
  email: string;
  password: string;
}

export interface registerInfo {
  email: string;
  password: string;
}

export interface createInfo {
  name: string;
  job: string;
}

export interface updateInfo {
  id: number;
  data: {
    name: string;
    job: string;
  };
}
