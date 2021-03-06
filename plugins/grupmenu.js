let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let str = `
*── 「 MODERATION GROUP 」 ──*

1. *#add*
Menambah user ke dalam group.
Usage: *#add* 628xxxxxxxxxx

2. *#kick*
Mengeluarkan member dari grup.
Usage: *#kick* @tag

3. *#promote*
Promote member menjadi admin.
Usage: *#promote* @tag

4. *#demote*
Demote member dari admin.
Usage: *#demote* @tag

5. *#leave*
Bot akan meninggalkan grup.
Usage: *#leave*

6. *#tagall*
Mention semua member group.
Usage: *#tagall*

7. *#seticon*
Mengganti Profile Grup
Aliases: .seticon .setpp
Usage: Kirim gambar dengan caption *#groupicon* atau reply gambar dengan caption *#groupicon*.

8. *#resetlink*
Reset Link, Ganti Yang Baru
Aliases: .revoke 
Usage: *#resetlink*

11. *#announce*
Memberi Pengumuman Ke Member
Aliases: *.tagall .hidetag*
Usage: *#hidetag pesanmu*

12. *#listonline*
Melihat Siapa Saja Yang Online di Grup Ini!
Aliases: .here
Usage: *#here*

13. *#infogrup*
Melihat Deskripsi Dan Mode Setelan Apa Saja Yang Di Aktifkan 
Usage: *#infogrup*

14. *#setdesk*
Menyetel Deskripsi Yang Baru 
Aliases: -
Usage: *#setdesk deskripsinya*

15. *#listadmin*
Melihat Siapa Yang Admin Dan Pembuat Grupnya 
Usage: *#listadmin*

16. *#groupset*
Setelan Tambahan Group, Seperti Welcome, AntiLink, DanLainnya! 
Usage: *#groupset*
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['grupmenu']
handler.tags = ['hh']
handler.command = /^(grupmenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler


