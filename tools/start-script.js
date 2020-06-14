const child_process = require('child_process');

child_process.execSync('docker-compose up -d', {
  cwd: 'tools',
  stdio: 'inherit',
});

const serveProcess = child_process.exec('npm run serve', {
  env: { ...process.env, FORCE_COLOR: 'true' },
});

process.on('SIGINT', () => {
  serveProcess.kill('SIGINT');
  serveProcess.on('close', () => {
    console.info('Stopping Docker containers. Please wait..');
    child_process.execSync('docker-compose down', {
      cwd: 'tools',
      stdio: 'inherit',
    });
    process.exit(0);
  });
});
serveProcess.stdout.on('data', (data) => {
  process.stdout.write(data);
});

serveProcess.stderr.on('data', (err) => {
  process.stderr.write(err);
});
