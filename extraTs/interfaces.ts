interface Iusers {
  getUsers: Imodule;
}

interface Imodule {
  all: string[];
  read: string[];
  write: string[];
  delete: string[];
}
interface Iuser {
  traineeEmail: string;
  reviewerEmail: string;
}
export { Iusers, Iuser };
