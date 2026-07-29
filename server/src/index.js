import { createGameServer } from './app.js';

const { httpServer } = createGameServer();

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, '0.0.0.0', async () => {
  console.log('');
  console.log('='.repeat(50));
  console.log('  Yacht Dice Game Server');
  console.log(`  http://0.0.0.0:${PORT}`);
  console.log('='.repeat(50));
  console.log('');

  try {
    const os = await import('os');
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
      for (const iface of interfaces[name]) {
        if (iface.family === 'IPv4' && !iface.internal) {
          console.log(`  다른 플레이어 접속: http://${iface.address}:${PORT}`);
        }
      }
    }
  } catch (e) {
    console.log('  (네트워크 IP를 가져올 수 없습니다)');
  }
  console.log('');
});
