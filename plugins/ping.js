let { performance } = require('perf_hooks')
let handler = async (m, { conn }) => {
  let old = performance.now()
  await m.reply('_Test Kecepatan..._')
  let neww = performance.now()
  await conn.send2Button(m.chat, neww - old + 'ms', 'BY NAHARA', 'TETAPKAN', '.tetapkan', 'PERCEPAT', '.percepat', { quoted: m })
  
}
handler.help = ['ping', 'speed']
handler.tags = ['info', 'tools']

handler.command = /^(ping|speed)$/i
module.exports = handler
