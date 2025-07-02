interface User {
    _id: string;
    email: string;
    createdAt: string;
}

export interface RegisterResponse {
    data: {
        user: User;
        accessToken: string;
    };
}

export interface AuthUser {
  _id: string;
  email: string;
  createdAt: string;
}

export interface AuthResponse {
  user: AuthUser;
  accessToken: string;
}