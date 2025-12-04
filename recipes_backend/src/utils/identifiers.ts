export function autoIncrement(existing: number[]): number {
  return existing.length === 0 ? 1 : Math.max(...existing) + 1;
}
