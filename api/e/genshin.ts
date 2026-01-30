import type { IncomingMessage, ServerResponse } from "http";
import { parse } from "url";

export default function handler(
  req: IncomingMessage,
  res: ServerResponse
) {
  const { pathname } = parse(req.url ?? "", true);
  const slug = pathname?.split("/").pop();

  const protocol = process.env.VERCEL_ENV === "production" ? "https" : "https";

  const host = process.env.VERCEL_URL ?? "localhost:3000";

  const baseUrl = `${protocol}://${host}`;

  if (slug !== "genshin") {
    res.statusCode = 404;
    res.end("Not found");
    return;
  }

  const title = "Genshin Impact";
  const description = "Launch Genshin Impact";
  const redirect = `${baseUrl}/event/genshin`;

  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(`<!DOCTYPE html>
<html>
<head>
  <title>${title}</title>

  <meta property="og:type" content="website" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:url" content="${baseUrl}/e/genshin" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />

  <meta http-equiv="refresh" content="0; url=${redirect}" />
</head>
<body></body>
</html>`);
}
