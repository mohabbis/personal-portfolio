export function cn(...values: Array<string | false | null | undefined>) {
  return values.filter(Boolean).join(" ");
}

export function shouldSkipOptimization(src?: string): boolean {
  if (!src) return false;
  const cleanSrc = src.split("?")[0]?.toLowerCase() ?? "";
  const isLocalImage = !cleanSrc.startsWith("http");
  const isGifOrSvg = cleanSrc.endsWith(".svg") || cleanSrc.endsWith(".gif");
  return isLocalImage || isGifOrSvg;
}
