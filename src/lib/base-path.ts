const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string) {
  if (!path || !path.startsWith("/")) {
    return path;
  }

  if (path.startsWith("//") || (basePath && path.startsWith(`${basePath}/`))) {
    return path;
  }

  return `${basePath}${path}`;
}
