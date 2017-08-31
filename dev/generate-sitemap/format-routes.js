// @flow

export default function formatRoutes(routes: string[]): string {
  return routes
    .map(route => `    <url>
        <loc>
          https://red-badger.com/${route}
        </loc>
    </url>`)
    .join('\n');
}
