export interface CurrentUser {
  userId: string;
  vendor: string;
  role: string;
  fullName: string;
}

export interface CurrentUserState {
  user: CurrentUser | null;
}
