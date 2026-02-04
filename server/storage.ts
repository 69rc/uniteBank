// This is a facade that exposes the right storage methods for different contexts
// For API routes that need admin operations, import adminStorage directly
// For public operations, use publicStorage directly
export { adminStorage, publicStorage } from './admin-storage';