import { wikipedia } from '@bochilteam/scraper'
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) throw `*🪀 What You Want To Search*\n\nEx:\n *${usedPrefix}${command}* Sri Lanka`
  let json = await wikipedia(text)
  m.reply(`
*${json.title}*
${json.img}

${json.articles}
`.trim())
}
handler.help = ['wikipedia'].map(v => v + ' <apa>')
handler.tags = ['internet']
handler.command = /^(wiki|wikipedia)$/i

export default handler
