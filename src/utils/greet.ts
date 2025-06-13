export function greet(name: string): string {
  if (!name.trim()) {
    throw new Error('Name cannot be empty');
  }
  return `Hello, ${name}!`;
}
