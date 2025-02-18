export interface User {
  id: number;
  username: string;
  password: string;
  created_at: string;
}

export type UserResponse = {
  data: User | null;
  error: Error | null;
};
