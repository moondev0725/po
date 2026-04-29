import { build } from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

const root = process.cwd();
const distDir = path.join(root, 'dist');
const publicDir = path.join(root, 'public');
const assetsDir = path.join(distDir, 'assets');

fs.mkdirSync(assetsDir, { recursive: true });

if (fs.existsSync(publicDir)) {
  if (process.platform === 'win32') {
    execFileSync(
      'powershell',
      ['-NoProfile', '-Command', 'Copy-Item -Path public\\* -Destination dist -Recurse -Force'],
      { stdio: 'inherit' }
    );
  } else {
    execFileSync('cp', ['-R', 'public/.', 'dist/'], { stdio: 'inherit' });
  }
}

await build({
  entryPoints: [path.join(root, 'src', 'main.jsx')],
  bundle: true,
  minify: true,
  format: 'esm',
  target: ['es2020'],
  /** React 17+ JSX transform — 모든 컴포넌트에 React import 없이도 번들이 동작하게 함 */
  jsx: 'automatic',
  jsxImportSource: 'react',
  outdir: assetsDir,
  entryNames: 'index',
  assetNames: '[name]',
  loader: {
    '.jsx': 'jsx',
    '.js': 'js',
    '.css': 'css',
  },
});

fs.writeFileSync(
  path.join(distDir, 'index.html'),
  `<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>문성훈 포트폴리오</title>
    <meta name="description" content="문성훈 개발자 포트폴리오 — Spring Boot, Django 기반 팀 프로젝트 경험" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
    <link rel="stylesheet" href="./assets/index.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="./assets/index.js"></script>
  </body>
</html>
`
);
