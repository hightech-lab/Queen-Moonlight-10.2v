// MADE BY KORONEOFC (JANGAN DIHAPUS !!!)


import jimp from "jimp"
import uploadImage from "../lib/uploadImage.js"
import uploadFile from "../lib/uploadFile.js"

let handler = async (m, { conn, usedPrefix, args}) => {
	let towidth = args[0]
	let toheight = args[1]
	if (!towidth) throw '*Size Width...?*'
	if (!toheight) throw '*Size Height...?*'
	
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw "*Where The Media...?*"

let media = await q.download()
let isMedia = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
if (!isMedia) throw `Mime ${mime} tidak didukung`
let link = await (isMedia ? uploadImage : uploadImage)(media)

let source = await jimp.read(await link)
let size = {
            before:{
                   height: await source.getHeight(),
                   width: await source.getWidth()
             },
            after:{ 
            	   height: toheight,
                   width: towidth,
                   },
            }
let compres = await conn.resize(link, towidth - 0, toheight - 0)
let linkcompres = await (isMedia ? uploadImage : uploadImage)(compres)

conn.sendFile(m.chat, compres, null, `*💃 MOONLIGHT BOT COMPRESS RESIZE 💃*

*• BEFORE*
> ᴡɪᴅᴛʜ : ${size.before.width}
> ʜᴇɪɢʜᴛ : ${size.before.height}

*• AFTER*
> ᴡɪᴅᴛʜ : ${size.after.width}
> ʜᴇɪɢʜᴛ : ${size.after.height}

*• LINK*
> ᴏʀɪɢɪɴᴀʟ : ${link}
> ᴄᴏᴍᴘʀᴇss : ${linkcompres}\n\nQᴜᴇᴇɴ - ᴍᴏᴏɴʟɪɢʜᴛ - ʙᴇᴛᴀ\nᴡᴇʙ ꜱɪᴛᴇ :- https://github.com/hightech-lab`, m)
}
handler.help = ['resize <width> <height> (reply|caption)']
handler.tags = ['tools']
handler.command = /^(resize)$/i

export default handler
