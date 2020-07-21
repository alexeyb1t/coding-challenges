export function urlify(url: string) {
  return url.trim().split(' ').join('%20');
}
