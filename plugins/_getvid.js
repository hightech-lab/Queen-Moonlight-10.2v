import { 
    youtubedl,
    youtubedlv2 
} from '@bochilteam/scraper'

var handler = async (m, { conn, args}) => {

let qu = args[1] || '360'
  let q = qu + 'p'
  let v = args[0]

  let _thumb = {}
    try { _thumb = { jpegThumbnail: thumb2 } }
    catch (e) { }

// Kocak
const yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
const dl_url = await yt.video[q].download()
  const ttl = await yt.title
const size = await yt.video[q].fileSizeH
  
 await m.reply(`*💃 MOONLIGHT VIDEO DOWNLOADER 💃*
 
*💌 Title:* ${ttl}
*💌 Size:* ${size}
*💌 Type:* MP4

*U P ＬO A D I N G . . .🎥*`)
  await conn.sendMessage(m.chat, { video : { url: dl_url, caption : ttl}}, { quoted: m })
}


handler.command = /^(getvid)$/i
export default handler
