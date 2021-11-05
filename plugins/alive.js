// By Caliph & Akbar
let fetch = require('node-fetch')
let fs = require('fs')
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

let handler  = async (m, { conn }) => {
  pplink = await conn.getProfilePicture(conn.user.jid)
  ppstatus = await conn.getStatus(conn.user.jid)
  totaluser = Object.keys(DATABASE.data.users)
  ppbuffer = await fetch(pplink).then(v => v.buffer())
  conn.sendMessage(m.chat, ppbuffer, 'imageMessage', { caption:`
❏ *Bot Name* : ${conn.user.name}
❏ *Groups Chats* : ${conn.chats.array.filter(v => v.jid.endsWith('g.us')).map(v => v.jid).length}
❏ *Personal Chats* : ${conn.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net')).map(v => v.jid).length}
❏ *User Total* : ${totaluser.length}
❏ *Wa Web Name* : ${conn.browserDescription[0]}
❏ *Wa Web Version* : LTE WEB CHROME
❏ *Browser* : ${conn.browserDescription[1]}
❏ *Uptime Bot* : ${clockString(process.uptime() * 1000)}
❏ *Host Number* : @${global.conn.user.jid.split('@')[0]}
❏ *Bio Bot* : ${ppstatus.status}\n\n*Support/Follow Me*\nhttps://instagram.com/exhar_ft`, quoted: m, sendEphemeral: true, thumbnail: fs.readFileSync('./src/error.png'), contextInfo: { mentionedJid: [global.conn.user.jid]}})
}
handler.help = ['info', 'botstat', 'alive']
handler.tags = ['main']
handler.command = /^(alive|info|botstat)$/i
handler.fail = null

module.exports = handler