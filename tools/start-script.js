const child_process = require('child_process');

/**
 * @type {import('child_process').ChildProcess}
 */
let serveProcess = null;

process.on('SIGINT', () => {
  if (serveProcess) {
    serveProcess.on('close', () => {
      downDockerCompose();
      process.exit(0);
    });
  } else {
    downDockerCompose();
    process.exit(0);
  }
});

child_process.execSync('docker-compose up -d', {
  cwd: 'tools',
  stdio: 'inherit',
});

serveProcess = child_process.exec('npm run serve', {
  env: { ...process.env, FORCE_COLOR: 'true' },
});

serveProcess.stdout.on('data', (data) => {
  process.stdout.write(data);
});

serveProcess.stderr.on('data', (err) => {
  process.stderr.write(err);
});

function downDockerCompose() {
  console.info('Stopping Docker containers. Please wait..');
  child_process.execSync('docker-compose down', {
    cwd: 'tools',
    stdio: 'inherit',
  });
}
