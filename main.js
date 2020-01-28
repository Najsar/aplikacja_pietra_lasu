const {app, BrowserWindow} = require('electron')
const path = require('path')

require('electron-reload')(__dirname);

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 1080,
    height: 1920,
    frame: false,
    icon: 'build/icon.png',
    fullscreen: true
  })

  mainWindow.removeMenu()

  mainWindow.loadFile('index.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

app.on('browser-window-created',function(e,window) {
  window.removeMenu();
});