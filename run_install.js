const { execSync } = require('child_process');
const fs = require('fs');
try {
  console.log('Running npm install...');
  const out = execSync('npm.cmd install', { encoding: 'utf8' });
  fs.writeFileSync('npm_install_log.txt', out);
  console.log('Install complete.');
  
  console.log('Installing extra packages...');
  const out2 = execSync('npm.cmd install lucide-react clsx tailwind-merge', { encoding: 'utf8' });
  fs.appendFileSync('npm_install_log.txt', '\n' + out2);
  console.log('Extra packages complete.');
} catch (e) {
  fs.writeFileSync('npm_install_error.txt', e.stderr || e.stdout || e.message);
  console.error('Failed', e.message);
}
