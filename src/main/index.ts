import { ipcMain, app } from 'electron';
import { platform } from 'os';
import { WindowsManager } from './windows-manager';

app.name = 'Midori Next';

(process.env as any)['ELECTRON_DISABLE_SECURITY_WARNINGS'] = true;
app.commandLine.appendSwitch('--enable-transparent-visuals');
app.commandLine.appendSwitch('--enable-parallel-downloading');
ipcMain.setMaxListeners(0);

// app.setAsDefaultProtocolClient('http');
// app.setAsDefaultProtocolClient('https');

export const windowsManager = new WindowsManager();

process.on('uncaughtException', error => {
  console.error(error);
});

app.on('window-all-closed', () => {
  if (platform() !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('get-webcontents-id', e => {
  e.returnValue = e.sender.id;
});
