import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*💃 QUEEN MOONLIGHT INFO 💃*\n\n💌 Script : *https://github.com/hightech-lab/Queen-Moonlight-10.2v*\n💌 Owner : *Mr . Techo*\n\n💌YT Channel : *https://youtube.com/@hightechlab2022*\n\n💌 Public Bot Group : *https://chat.whatsapp.com/FtNpa9CPTFxE7NXofQqdjW*\n\n💌 Main Group : *https://chat.whatsapp.com/Ebm27fhLdubKvI0OnNentO*\n\n*💃 Many thanks to everyone who helped 💃*`
    let waifu = await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/waifu.txt')
    let chen = await waifu.text()
    let ran = chen.split('\n')
    let yae = ran[Math.floor(Math.random() * ran.length)]
    let thumb = await(await fetch(yae)).buffer()
conn.sendButtonDoc(m.chat, str, wm, 'ᴡᴀɴᴛ sᴏᴜʀᴄᴇ ᴄᴏᴅᴇ?', '🕵️‍♂️ THANKYOU HIGH TECH LAB 🕵️‍♂️','.tqto', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: global.sig,
    title: wm3,
    body: '💃 QUEEN MOONLIGHT BOT 💃',
    thumbnail: thumb,
    sourceUrl: sig
  }
  } }) 
          }
handler.help = ['sc', 'script']
handler.tags = ['info', 'main']
handler.command =  /^(script|sc)$/i

export default handler
