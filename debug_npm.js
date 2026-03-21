const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const log = [];
try {
  const npmPath = execSync('where npm.cmd', { encoding: 'utf8' }).trim();
  log.push('npm.cmd at: ' + npmPath);
} catch(e) {
  log.push('where npm.cmd failed: ' + e.message);
}

try {
  const ver = execSync('npm.cmd --version', { encoding: 'utf8' }).trim();
  log.push('npm version: ' + ver);
} catch(e) {
  log.push('npm --version failed: ' + e.message);
}

try {
  const nodeVer = execSync('node --version', { encoding: 'utf8' }).trim();
  log.push('node version: ' + nodeVer);
} catch(e) {
  log.push('node --version failed: ' + e.message);
}

// Try install
try {
  log.push('Starting npm install...');
  const out = execSync('npm.cmd install', { 
    cwd: __dirname,
    encoding: 'utf8',
    timeout: 120000,
    stdio: 'pipe'
  });
  log.push('npm install stdout: ' + out);
  log.push('node_modules exists: ' + fs.existsSync(path.join(__dirname, 'node_modules')));
} catch(e) {
  log.push('npm install FAILED');
  log.push('stdout: ' + (e.stdout || ''));
  log.push('stderr: ' + (e.stderr || ''));
  log.push('message: ' + e.message.substring(0, 500));
}

fs.writeFileSync(path.join(__dirname, 'debug_log.txt'), log.join('\n'), 'utf8');
