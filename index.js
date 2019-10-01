const { app, Menu, Tray, shell } = require('electron');
const os = require('os');
const path = require('path');
const { menubar } = require('menubar');
const iconPath = path.join(__dirname, 'assets', 'cloud.png');
const icloudPath = path.join(os.homedir(), 'Library', 'Mobile Documents', 'com~apple~CloudDocs');

app.on('ready', () => {
  const tray = new Tray(iconPath);
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Open iCloud Drive', click() {
      shell.openItem(icloudPath)
    }},
    { label: 'Quit', click() { 
      app.quit();
    }},
  ]);
  tray.setContextMenu(contextMenu);

  const mb = menubar({
    tray
  });

  mb.on('ready', () => {
    
  });
});