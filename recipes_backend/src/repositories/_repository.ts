export interface Repository<T, K = number> {
  list(): Promise<T[]>;
  create(data: Partial<T>): Promise<T>;
  read(key: K): Promise<T | null>;
  delete(key: K): Promise<boolean>;
}
