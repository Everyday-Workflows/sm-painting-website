import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

const PROTECTED_REALM = 'S&M Painting Preview';

function isProtectedEnvironment() {
  if (process.env.BASIC_AUTH_ENABLED !== 'true') {
    return false;
  }

  if (process.env.NODE_ENV !== 'production') {
    return false;
  }

  const railwayEnvironment = process.env.RAILWAY_ENVIRONMENT_NAME;

  if (!railwayEnvironment) {
    return true;
  }

  return railwayEnvironment === 'production';
}

function unauthorizedResponse() {
  return new NextResponse('Authentication required.', {
    status: 401,
    headers: {
      'WWW-Authenticate': `Basic realm="${PROTECTED_REALM}", charset="UTF-8"`,
      'Cache-Control': 'no-store',
    },
  });
}

function misconfiguredResponse() {
  return new NextResponse('Basic auth is enabled but credentials are not configured.', {
    status: 503,
    headers: {
      'Cache-Control': 'no-store',
    },
  });
}

function getProvidedCredentials(request: NextRequest) {
  const authorizationHeader = request.headers.get('authorization');

  if (!authorizationHeader?.startsWith('Basic ')) {
    return null;
  }

  try {
    const encodedCredentials = authorizationHeader.slice('Basic '.length);
    const decodedCredentials = atob(encodedCredentials);
    const separatorIndex = decodedCredentials.indexOf(':');

    if (separatorIndex === -1) {
      return null;
    }

    return {
      username: decodedCredentials.slice(0, separatorIndex),
      password: decodedCredentials.slice(separatorIndex + 1),
    };
  } catch {
    return null;
  }
}

export function middleware(request: NextRequest) {
  if (!isProtectedEnvironment()) {
    return NextResponse.next();
  }

  const expectedUsername = process.env.BASIC_AUTH_USERNAME;
  const expectedPassword = process.env.BASIC_AUTH_PASSWORD;

  if (!expectedUsername || !expectedPassword) {
    return misconfiguredResponse();
  }

  const providedCredentials = getProvidedCredentials(request);

  if (!providedCredentials) {
    return unauthorizedResponse();
  }

  if (
    providedCredentials.username !== expectedUsername ||
    providedCredentials.password !== expectedPassword
  ) {
    return unauthorizedResponse();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'],
};
