import yts from 'yt-search'

var handler = async(m, { conn, usedPrefix, text, args, command }) => {
let name = await conn.getName(m.sender)

  if (!text) throw '*_What You Want...?_*\n\nEx : *.yts* How To Create Whatsapp Bot'
  let cari = await yts(`${text}`)
    let dapet = cari.all
    let listSections = []
	Object.values(dapet).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['Video 🎥', usedPrefix + 'getvid ' + v.url, '\n⌚ *Duration:* ' + v.timestamp + '\n⏲️ *Uploaded:* ' + v.ago + '\n👁️ *Views:* ' + v.views + '\n📎 *Url:* ' + v.url],
          ['Audio 🎧', usedPrefix + 'getaud ' + v.url, '\n⌚ *Duration:* ' + v.timestamp + '\n⏲️ *Uploaded:* ' + v.ago + '\n👁️ *Views:* ' + v.views + '\n📎 *Url:* ' + v.url]
        ]])
	}) 
	return conn.sendList(m.chat, '*💃 MOONLIGHT YT SEARCH 💃*', `*Queen Moonlight Youtube Search Box...*\n*You searched for:* ${text}\n\nIf You Can Use *${usedPrefix + command}* To search for videos on YouTube\n\`, author, `💌 YOUTUBE SEARCH 💌`, listSections, m)
}
handler.help = ['ytsearch <query>']
handler.tags = ['internet']
handler.command = /^yts(earch)?$/i


export default handler
