// JWT verification — RS256-only. HS256 fallback retired after migration.
export const JWT_ALGORITHMS = ["RS256"] as const;
