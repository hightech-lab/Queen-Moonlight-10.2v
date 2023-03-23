import translate from '@vitalets/google-translate-api'

let handler = async (m, { args, usedPrefix, command }) => {
	let lang, text
	if (args.length >= 2) {
		lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
	} else if (m.quoted && m.quoted.text) {
		lang = args[0] ? args[0] : 'id', text = m.quoted.text
	} else throw `Ex: *${usedPrefix + command}* si hello i am girl`
	let res = await translate(text, { to: lang, autoCorrect: true }).catch(_ => null)
	if (!res) throw `Error : Bahasa"${lang}" Tidak Support`
	m.reply(`*💃 MOONLIGHT LANGUAGE TRANSLATER 💃*\n\n*🧾 Current Language:* ${res.from.language.iso}\n*🧾 Translated Language:* ${lang}\n\n*💬 Translated:* ${res.text}\n\nQᴜᴇᴇɴ - ᴍᴏᴏɴʟɪɢʜᴛ - ʙᴇᴛᴀ\nᴡᴇʙ ꜱɪᴛᴇ :- https://github.com/hightech-lab`.trim())
}
handler.help = ['translate'].map(v => v + ' <bahasa> <teks>')
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i

export default handler
