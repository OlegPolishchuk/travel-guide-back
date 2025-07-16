declare global {
  type Nullable<T> = T | null;

  type Session = Record<string, any> & { user_id: string };
}

export {};
