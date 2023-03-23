let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let teks = `
*💃 QUEEN MOONLIGHT CREDITS 💃*

┌─「 *Owner • Number* 」
│ • *Mr . Techo:* [${global.ppulsa}]
❏────

┌─「 *Creater • Official Channel* 」
│ • *Mr . Techo:* [${global.pdana}]
│ • *YouTube:* [${global.psaweria}]
❏────
`

let you = flaaa.getRandom()

const buttons = [
  {buttonId: '.? all', buttonText: {displayText: '💌 GET MENU 💌'}, type: 1},
  {buttonId: '.ping', buttonText: {displayText: '🪀 BOT SPEED 🪀'}, type: 1},
  {buttonId: '.creator', buttonText: {displayText: '💻 OWNER 💻'}, type: 1}
]

const templateMessage = {
    image: {url: you + 'Donasi'},
    caption: teks, 
    footer: wm,
    buttons: buttons,
    headerType: 4
}
await conn.sendMessage(m.chat, templateMessage, m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
