const CANONICAL_HOST = 'echo4ever.com';

// Hosts that serve a duplicate of the site and should permanently redirect to the main domain.
// Preview deployments (e.g. abc123.echo4ever-website.pages.dev) are intentionally left alone.
const REDIRECT_HOSTS = new Set([
  'www.echo4ever.com',
  'echo4ever-website.pages.dev',
]);

export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (REDIRECT_HOSTS.has(url.hostname)) {
    url.hostname = CANONICAL_HOST;
    url.protocol = 'https:';
    url.port = '';
    const method = context.request.method;
    // 308 keeps the method and body (e.g. chatbot POSTs); 301 is the standard for page views.
    const status = method === 'GET' || method === 'HEAD' ? 301 : 308;
    return Response.redirect(url.toString(), status);
  }

  return context.next();
}
