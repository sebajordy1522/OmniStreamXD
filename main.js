const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    title: "OmniStream XD Pro",
    backgroundColor: '#07090e',
    webPreferences: {
      webSecurity: false, // ¡ESTO ELIMINA EL BLOQUEO CORS DE RAÍZ!
      allowRunningInsecureContent: true,
      nodeIntegration: true
    }
  });

  // win.setFullScreen(true); // Descomenta esta línea si quieres que abra siempre en pantalla completa
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
