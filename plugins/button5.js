let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn }) => {
let { name, limit, level, role, age, money, healt, premium, registered } = global.DATABASE.data.users[m.sender] 
pp = await conn.getProfilePicture(global.conn.user.jid)
conn.sendButtonImg(m.chat, 'Visit : https://bit.ly/lnk5in1', 'https://telegra.ph/file/651f5b0e06058549c5cd0.jpg', `❏ Registered : ${registered ? 'Yes': 'No'}\n❏ Name : ${name}\n❏ Ticket : ${limit}\n❏ Money : ${money}\n❏ Level : ${level}\n❏ Premium : ${premium ? 'Yes': 'No'} `.trim(), 'DAFTAR MENU', '/nanerror',m)
  }
handler.help = ['help']
handler.tags = ['main'] 
handler.command = /^(help)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null
handler.exp = 20

module.exports = handler

//Udh Di Fix Eror By Fernazer
//TqTq To Jangan Di Hapus Lah, Emg Lu siapa Main Hapus Aja Lu Tu Cmn Numpang Mending Di Tambahin Aja
//Sekali Ketauan Di Hapus Semua Atau Di Ganti, Gw Enc Mmpus Lu Ga Bisa Ubah