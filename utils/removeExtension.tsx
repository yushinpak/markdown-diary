export default function removeExtension(filename: string): string {
  return filename.slice(0, -3)
}