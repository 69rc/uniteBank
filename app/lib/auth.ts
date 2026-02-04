import { storage } from '@server/storage';
import { comparePasswords } from '../api/utils/auth';
import { cookies } from 'next/headers';

// Mock session storage - in production you might use Redis, DB, or JWT
// Note: This in-memory storage is not suitable for serverless/production environments.
const mockSessions = new Map();

// Function to check if user is authenticated
export async function isAuthenticated(request: Request) {
  const sessionId = getSessionIdFromRequest(request);
  if (!sessionId) {
    return false;
  }

  const session = mockSessions.get(sessionId);
  return !!session;
}

// Function to check if user is admin
export async function isAdmin(request: Request) {
  const user = await getCurrentUserFromRequest(request);
  return user && user.role === 'ADMIN';
}

// Function to get current user from session
export async function getCurrentUserFromRequest(request: Request) {
  const sessionId = getSessionIdFromRequest(request);
  if (!sessionId) {
    return null;
  }

  const session = mockSessions.get(sessionId);
  if (!session) {
    return null;
  }

  // In a real implementation, you would fetch user from your DB
  const user = await storage.getUser(session.userId);
  return user;
}

// Helper function to extract session ID from request
function getSessionIdFromRequest(request: Request): string | undefined {
  // Look for session ID in cookies
  const cookieHeader = request.headers.get('cookie');
  if (!cookieHeader) return undefined;

  const cookies = cookieHeader.split(';').reduce((acc, cookieStr) => {
    const [key, value] = cookieStr.trim().split('=');
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);

  return cookies['sessionId'];
}

// Function to create session ID
export function createSessionId(userId: number): string {
  const sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  mockSessions.set(sessionId, { userId, createdAt: new Date() });
  return sessionId;
}

// Function to create session and set cookie
export async function createSession(userId: number) {
  const sessionId = createSessionId(userId);
  const cookieStore = await cookies();
  cookieStore.set('sessionId', sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 7 * 24 * 60 * 60 // 1 week
  });
  return sessionId;
}

// Function to destroy session
export async function destroySession() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sessionId')?.value;

  if (sessionId) {
    mockSessions.delete(sessionId);
    cookieStore.delete('sessionId');
  }
}

export function destroySessionById(sessionId: string) {
  mockSessions.delete(sessionId);
}