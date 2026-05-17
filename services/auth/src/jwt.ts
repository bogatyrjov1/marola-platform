// JWT verification — RS256 primary, HS256 fallback during migration window.
// HS256 fallback removed in a later PR after the migration window closes.
export const JWT_ALGORITHMS = ['RS256', 'HS256'] as const;
