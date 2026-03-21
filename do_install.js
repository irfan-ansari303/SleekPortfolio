const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

try {
  // Check if node_modules exists
  const nmPath = path.join(__dirname, 'node_modules');
  console.log('node_modules exists:', fs.existsSync(nmPath));
  
  // Run npm install synchronously  
  const result = execSync('npm.cmd install --verbose', { 
    cwd: __dirname,
    encoding: 'utf8',
    timeout: 120000,
    stdio: 'pipe'
  });
  fs.writeFileSync(path.join(__dirname, 'install_result.txt'), result, 'utf8');
  console.log('npm install completed');
  console.log('node_modules exists now:', fs.existsSync(nmPath));
} catch (err) {
  const errMsg = `STDOUT:\n${err.stdout || ''}\n\nSTDERR:\n${err.stderr || ''}\n\nMESSAGE:\n${err.message}`;
  fs.writeFileSync(path.join(__dirname, 'install_error.txt'), errMsg, 'utf8');
  console.error('npm install failed:', err.message.substring(0, 200));
}
