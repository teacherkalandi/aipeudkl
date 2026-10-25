import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { transform } from 'esbuild';

// Exercise the real validator without initializing a live Firebase connection.
const source = readFileSync(new URL('../src/services/portalApps.ts', import.meta.url), 'utf8');
const validation = source.slice(source.indexOf('export const MAX_APP_BYTES'), source.indexOf('export function subscribePortalApps'));
const { code } = await transform(validation, { loader: 'ts', format: 'esm' });
const { readHtmlApp, MAX_APP_BYTES } = await import(`data:text/javascript;base64,${Buffer.from(code).toString('base64')}`);

test('preserves HTML, CSS, scripts, Unicode and uppercase extension', async () => {
  const html = '<!doctype html><html><style>body{color:red}</style><button>ଓଡ଼ିଆ</button><script>document.title="App"</script></html>';
  assert.equal(await readHtmlApp(new File([html], 'tool.HTML')), html);
});

test('rejects wrong extensions, empty files, plain text and oversized files', async () => {
  for (const file of [new File(['<p>app</p>'], 'app.txt'), new File([], 'app.html'), new File(['plain text'], 'app.htm'), new File(['x'.repeat(MAX_APP_BYTES + 1)], 'large.html')]) {
    await assert.rejects(readHtmlApp(file));
  }
});

test('accepts HTML at the supported byte limit', async () => {
  const html = '<p>' + 'x'.repeat(MAX_APP_BYTES - 7) + '</p>';
  assert.equal((await readHtmlApp(new File([html], 'app.htm'))).length, MAX_APP_BYTES);
});

test('viewer isolates uploaded scripts from site origin while allowing downloads', () => {
  const viewer = readFileSync(new URL('../src/components/HtmlAppViewer.tsx', import.meta.url), 'utf8');
  const sandbox = viewer.match(/sandbox="([^"]+)"/)[1].split(' ');
  assert.ok(sandbox.includes('allow-scripts'));
  assert.ok(sandbox.includes('allow-downloads'));
  assert.ok(!sandbox.includes('allow-same-origin'));
  assert.ok(!sandbox.includes('allow-top-navigation'));
});

test('shared apps start empty rather than restoring built-in portal cards', () => {
  assert.ok(source.includes('new Map<string, CustomPortalApp>()'));
  assert.ok(!source.includes('DEFAULT_MY_APPS'));
});
