/*

	@ No Re Upload
	@ Sc no enc silahkan cek https://github.com/DikaArdnt/Hisoka-Morou
	@ Pindah Base 🤙
	
	

*/


require('./confat')
const { default: makeWASocket, useSingleFileAuthState, DisconnectReason, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage } = require("@adiwajshing/baileys-md")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const moment = require("moment-timezone");
const xfar = require('xfarr-api');
const hx = require('hxz-api');
const yts = require('yt-search');
const igs = require('insta-fetcher')
const { performance } = require('perf_hooks')
const { pinterest, wallpaper, wikimedia, hentai, quotesAnime , igstalk} = require('./lib/scraper')
const { sm, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('./lib/myfunc')
const database = require('./database.json')

const setting = JSON.parse(fs.readFileSync('./setting.json'));
let {
    ownername,
    ownernomer,
    ownernomerr,
    myweb,
    thumbnail,
    youtube,
    botname
} = setting

pp_bot = fs.readFileSync(thumbnail)

// language
const  { ind } = require(`./language`)
lang = ind //language
enter = '\n'

moment.tz.setDefault("Asia/Jakarta").locale("id");

module.exports = alpha = async (alpha, m, chatUpdate) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : ''
        var budy = (typeof m.text == 'string' ? m.text : ' ')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const type = Object.keys(mek.message)[0]
		 const from = mek.key.remoteJid
		 const content = JSON.stringify(mek.message)
        const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
        const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
        const isCreator = [alpha.user.id, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == alpha.user.id ? true : false
        const text = q = args.join(" ")
        const c = args.join(' ')
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.m || quoted).mimetype || ''
		const isMedia = /image|video|sticker|audio/.test(mime)
	
        // Group
        const groupMetadata = m.isGroup ? await alpha.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
     	const isBotAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

		const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "6289523258649-1604595598@g.us"}, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: fs.readFileSync(setting.thumbnail), surface: 200, message: `© ${ownername}`, orderTitle: 'FATIHmek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: setting.thumbnail}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': `© ${ownername}`, 'jpegThumbnail': fs.readFileSync(setting.thumbnail)}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${ownername}`, 'jpegThumbnail': fs.readFileSync(setting.thumbnail)}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': fs.readFileSync(setting.thumbnail)}}}
		const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: `${ownername}`,jpegThumbnail: setting.thumbnail}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(setting.thumbnail), thumbnail: fs.readFileSync(setting.thumbnail),sendEphemeral: true}}}
		
		const reply = (teks, men) => {
             return alpha.sendMessage(from, { text: teks, mentions: men ? men : [] }, { quoted: m })
        }
        // Bot Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })

        // Public & Self
        if (!alpha.public) {
            if (!m.key.fromMe && !isCreator) return
        }

        // Push Message To Console
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('| MSG |')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('| FROM |'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> in'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
        // Function
        const sendFileFromUrl = async (from, url, caption, mek, men) => {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            if (mime.split("/")[1] === "gif") {
                return alpha.sendMessage(from, { video: await getBuffer(url), caption: caption, gifPlayback: true, mentions: men ? men : []}, {quoted: m})
                }
            let type = mime.split("/")[0]+"Message"
            if(mime === "application/pdf"){
                return alpha.sendMessage(m.chat, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, mentions: men ? men : []}, {quoted: mek })
            }
            if(mime.split("/")[0] === "image"){
                return alpha.sendMessage(m.chat, { image: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "video"){
                return alpha.sendMessage(m.chat, { video: await getBuffer(url), caption: caption, mentions: men ? men : []}, {quoted: m})
            }
            if(mime.split("/")[0] === "audio"){
                return alpha.sendMessage(m.chat, { audio: await getBuffer(url), caption: caption, mentions: men ? men : [], mimetype: 'audio'}, {quoted: m })
            }
        }
        const sendButton = (type, from, text, buttons, men, quoted, options) => { 
if (type == 'image') {
alpha.sendMessage(from, { caption: text, image: options ? options : fs.readFileSync(thumbnail), buttons: buttons, headerType: 'IMAGE', mentions: men }, {quoted: m})
} else if (type == 'video') {
if (options === undefined || options === null) return reply('illegal method, chat owner bot')
alpha.sendMessage(from, { caption: text, video: options, buttons: buttons, headerType: 'VIDEO', mentions: men }, {quoted: m})
} else if (type == 'location') {
alpha.sendMessage(from, { caption: text, location: { jpegThumbnail: options ? options : fs.readFileSync(thumbnail) }, buttons: buttons, headerType: 'LOCATION', mentions: men })
} else if (type == 'text') {
alpha.sendMessage(from, { caption: text, buttons: buttons, headerType: 'TEXT', mentions: men }, {quoted: m})
} else {
m.reply('invalid type, please contact the owner bot')
}
}
const sendButLocation = async (anu, text1, desc1, gam1, but = []) => {
buatpesan = generateWAMessageFromContent(anu, {
    "templateMessage": {
      "hydratedTemplate": {
      	"locationMessage": {
						"degreesLatitude": 0,
						"degreesLongitude": 0,
						"jpegThumbnail": gam1
},
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": but
      }
    }
  }, {quoted: m})
alpha.relayMessage(anu, buatpesan.message, { messageId: buatpesan.key.id })
}
        switch(command) {
            
            case 'chat': {
                if (!m.key.fromMe && !isCreator) throw mess.owner
                if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
                if (args[0] === 'mute') {
                    alpha.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    alpha.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    alpha.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    alpha.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    alpha.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    alpha.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    alpha.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
            }
            break
            case 'linkgroup': case 'linkgrup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                let response = await alpha.groupInviteCode(m.chat)
                alpha.sendText(m.chat, `Link Group : *${groupMetadata.subject}*\nhttps://chat.whatsapp.com/${response}`, m, { detectLink: true })
            }
            break
            case 'delete': case 'del': {
            	if (!m.key.fromMe && !isCreator) throw mess.owner
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                alpha.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
	    case 'toimage': case 'toimg': {
                if (!quoted) throw 'Reply Image'
                if (!/webp/.test(mime)) throw `Reply Sticker Dengan Caption *${prefix + command}*`
                m.reply(mess.wait)
                let media = await alpha.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw mess.errtoimg
                    let buffer = fs.readFileSync(ran)
                    alpha.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'pinterest': {
            	if (!q) return m.reply(lang.wrongFormat(prefix))
                m.reply(mess.wait)
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random(), anu.length)]
                alpha.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
            case 'wallpaper': {
            	if (!q) return m.reply(lang.wrongFormat(prefix))
                m.reply(mess.wait)
                anu = await wallpaper(text)
                result = anu[Math.floor(Math.random(), anu.length)]
                alpha.sendMessage(m.chat, { image: { url: result.image }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.type}\n⭔ Media Url : ${result.image}` }, { quoted: m })
            }
            break
            case 'wikimedia': {
            	if (!q) return m.reply(lang.wrongFormat(prefix))
                m.reply(mess.wait)
                anu = wikimedia(text)
                result = anu[Math.floor(Math.random(), anu.length)]
                alpha.sendMessage(m.chat, { image: { url: result.image }, caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}` }, { quoted: m })
            }
            break
            case 'hentai': {
                m.reply(mess.wait)
                anu = await hentai()
                result = anu[Math.floor(Math.random(), anu.length)]
                alpha.sendMessage(m.chat, { video: { url: result.video_1 }, caption: `⭔ Title : ${result.title}\n⭔ Category : ${result.category}\n⭔ Mimetype : ${result.type}\n⭔ Views : ${result.views_count}\n⭔ Shares : ${result.share_count}\n⭔ Source : ${result.link}\n⭔ Media Url : ${result.video_1}` }, { quoted: m })
            }
            break
            case 'quotesanime': case 'quoteanime': {
                m.reply(mess.wait)
                anu = await quotesAnime()
                result = anu[Math.floor(Math.random(), anu.length)]
                alpha.sendMessage(m.chat, { text: `_${result.quotes}_\n\nBy *'${result.karakter}'*, ${result.anime}\n\n*_- ${result.up_at}_*` })
            }
            break
            case 'public': {
                if (!m.key.fromMe && !isCreator) throw mess.owner
                alpha.public = true
                m.reply('Sukses Ganti Ke Mode Public')
            }
            break
            case 'self': {
                if (!m.key.fromMe && !isCreator) throw mess.owner
                alpha.public = false
                m.reply('Sukses Ganti Ke Mode Self')
            }
            break
            case 'ping': case 'botstatus': case 'statusbot': {
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Detik_ \n ${oldd - neww} _milidetik_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
            case 'owner': case 'creator': {
                let vcard = 'BEGIN:VCARD\n' // metadata of the contact card
                    + `VERSION:3.0\n`
                    + `N:;${ownername}.;;;`
                    + `FN:${ownername}.\n` // full name
                    + `ORG:Owner ${botname};\n` // the organization of the contact
                    + `TEL;type=CELL;type=VOICE;waid=${ownernomer}:${ownernomerr}\n`
                    + 'END:VCARD'
                alpha.sendMessage(m.chat, { contacts: { displayName: 'Zeeone Ofc.', contacts: [{ vcard }] } }, { quoted: m })
            }
            break
            case 'rules':
            m.reply(lang.rules(prefix))
            break
            case 'sc': case 'source':
            m.reply(lang.source())
            break
            case 'donasi': case 'donate':
            m.reply(lang.tos(ownernomer))
			break
            
//Random Anime
				case 'cry':case 'kill':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'neko':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'waifu':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
					m.reply(lang.wait())
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
					sendFileFromUrl(m.chat, data.url, mess.sukses, m)
					})
					break
				case 'waifu': case 'loli':
					m.reply(lang.wait())
					axios.get(`https://api.waifu.pics/sfw/waifu`)
					.then(({data}) => {
					sendFileFromUrl(m.chat, data.url, mess.sukses, m)
					})
					break
case 'sticker': case 'stiker': case 's': case 'stik':
try {
if (!quoted) return m.reply(`Reply Image/Video Dengan Caption ${prefix + command}\n\n*Note*: _Durasi Sticker Video/Gif 1-9 Detik_`)
if (!/image/.test(mime) && !/video/.test(mime)) return m.reply(`Reply Image/Video Dengan Caption ${prefix + command}\n\n*Note*: _Durasi Sticker Video/Gif 1-9 Detik_`)
let media = await alpha.downloadAndSaveMediaMessage(quoted)
await ffmpeg(`${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`STARTED : ${cmd}`)
})
.on('error', function (err) {
console.log(`ERROR : ${err}`)
fs.unlinkSync(media)
})
.on('end', function () {
console.log(`FINISH`)
exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
        		if (error) return m.reply(lang.err())
alpha.sendMessage(from, {sticker: fs.readFileSync(`./sticker/${sender}.webp`)}, {quoted: m})
fs.unlinkSync(media)
fs.unlinkSync(`./sticker/${sender}.webp`)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(`./sticker/${sender}.webp`)
} catch {
m.reply(`Reply Image/Video Dengan Caption ${prefix + command}\n\n*Note*: _Durasi Sticker Video/Gif 1-9 Detik_`)
}

break
case 'mp4': case 'ytmp4':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                if (!isUrl(q)) return m.reply(lang.wrongFormat(prefix))
                if (!q.includes('youtu.be') && !q.includes('youtube.com')) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Youtube(text).then(async (data) => {
                    let txt = `*----「 YOUTUBE VIDEO 」----*\n\n`
                    txt += `*📟 Quality :* ${data.medias[1].quality}\n`
                    txt += `*🎞️ Type :* ${data.medias[1].extension}\n`
                    txt += `*💾 Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*📚 Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    sendFileFromUrl(m.chat, data.thumbnail, txt, m)
                    alpha.sendMessage(m.chat, {video: {url: data.medias[1].url}})
            	  })
                .catch((err) => {
                    m.reply(lang.err())
                })
            break
            case 'setprofile': case 'setpp': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw 'Reply Image'
                if (/image/.test(mime)) throw `balas image dengan caption *${prefix + command}*`
                let media = await hisoka.downloadAndSaveMediaMessage(quoted)
                if (!m.isGroup && !isBotAdmins && !isGroupAdmins) {
                    await alpha.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                } else if (!isCreator) {
                    await alpha.updateProfilePicture(hisoka.user.id, { url: media }).catch((err) => fs.unlinkSync(media))
		    await fs.unlinkSync(media)
                }
            }
            break
            case 'facebook': case 'fb': case 'fbdl': case 'facebookdl':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                if (!isUrl(q)) return m.reply(lang.wrongFormat(prefix))
                if (!q.includes('facebook.com') && !q.includes('fb.watch')) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Facebook(args[1]).then(async data => {
                    let txt = `*----「 FACEBOOK DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*🎞️ Type :* ${data.medias[0].extension}\n`
                    txt += `*📟 Quality :* ${data.medias[0].quality}\n`
                    txt += `*💾 Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*📚 Url :* ${data.url}`
                    sendFileFromUrl(from,data.medias[0].url,txt,m)
                })
                .catch((err) => {
                    m.reply(lang.err())
                })
            break
            case 'mp3': case 'ytmp3':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                if (!isUrl(q)) return m.reply(lang.wrongFormat(prefix))
                if (!q.includes('youtu.be') && !q.includes('youtube.com')) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Youtube(q).then(async (data) => {
                    let txt = `*----「 YOUTUBE AUDIO 」----*\n\n`
                    txt += `*📟 Quality :* ${data.medias[7].quality}\n`
                    txt += `*🎞️ Type :* ${data.medias[7].extension}\n`
                    txt += `*💾 Size :* ${data.medias[7].formattedSize}\n`
                    txt += `*📚 Url Source :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar kak, sedang proses pengiriman...*`
                    sendFileFromUrl(m.chat, data.thumbnail, txt, m)
                    alpha.sendMessage(m.chat, {audio: {url: data.medias[7].url}})
                })
                .catch((err) => {
                    m.reply(lang.err())
                })
            break
            case 'webtonsearch': case 'webtoon':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await m.reply(txt)
                })
                .catch((err) => {
                    m.reply(lang.err())
                })
            break
            case 'drakor':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Drakor(q).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    m.reply(lang.err())
                })
            break
            case 'anime':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    m.reply(lang.err())
                })
            break
            case 'character': case 'karakter':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    m.reply(lang.err())
                })
            break
            case 'manga':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Manga('naruto').then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    m.reply(lang.err())
                })
            break
            case 'film':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                await m.reply(lang.wait())
                xfar.Film(q).then(async data => {
                    let txt = `*--------「 FILM-SEARCH 」--------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*🎞️ Type :* ${i.type}\n`
                        txt += `*📟 Quality :* ${i.quality}\n`
                        txt += `*📮Upload :* ${i.upload}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumb,txt,m)
                })
                .catch((err) => {
                    reply(lang.err())
                })
            break
            case 'twtdl': case 'twt': case 'twitterdl': case 'twitter':
                if (!q) return m.reply(lang.wrongFormat(prefix))
                if (!isUrl(q)) return m.reply(lang.wrongFormat(prefix))
                if (!q.includes('twitter.com')) return m.reply(lang.wrongFormat(prefix))
                await textImg(lang.wait())
                xfar.Twitter(args[1]).then(async data => {
                    let txt = `*----「 TWITTER DOWNLOADER 」----*\n\n`
                    txt += `*📫 Title :* ${data.title}\n`
                    txt += `*📟 Quality :* ${data.medias[1].quality}\n`
                    txt += `*💾 Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*📚 Url :* ${data.url}`
                    sendFileFromUrl(from,data.medias[1].url,txt,m)
                })
                .catch((err) => {
                    m.reply(lang.err())
                })
            break
            case 'tagall': case 'infoall':
                if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isGroupAdmins) return m.reply(lang.adminOnly())
                if (!isBotAdmins) return m.reply(lang.botNotAdmin())
                let tekss = `══✪〘 *👥 Mention All* 〙✪══\n\n➲ *Message : ${q ? q : 'Nothing'}*\n\n`
		      	for (let mem of groupMembers) {
		            tekss += `࿃➡️ @${mem.id.split('@')[0]}\n`
				}
                teks += `\n⋙ *${botname}* ⋘`
                alpha.sendMessage(from, { text: tekss, mentions: groupMembers.map(a => a.id) }, { quoted: m })
            break
            case 'hidetag':
                if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isGroupAdmins) return m.reply(lang.adminOnly())
                if (!isBotAdmins) return m.reply(lang.botNotAdmin())
                alpha.sendMessage(from, { text : q ? q : '' , mentions: groupMembers.map(a => a.id)})
            break
            case 'kick': {
				if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isGroupAdmins) return m.reply(lang.adminOnly())
                if (!isBotAdmins) return m.reply(lang.botNotAdmin())
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			case 'add': {
				if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isGroupAdmins) return m.reply(lang.adminOnly())
                if (!isBotAdmins) return m.reply(lang.botNotAdmin())
				let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			case 'promote': {
				if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isGroupAdmins) return m.reply(lang.adminOnly())
                if (!isBotAdmins) return m.reply(lang.botNotAdmin())
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			case 'demote': {
				if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isGroupAdmins) return m.reply(lang.adminOnly())
                if (!isBotAdmins) return m.reply(lang.botNotAdmin())
				let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
				await alpha.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
				}
				break
			case 'revoke':
                if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!isGroupAdmins) return m.reply(lang.adminOnly())
                if (!isBotAdmins) return m.reply(lang.botNotAdmin())
                let link = await alpha.groupRevokeInvite(from)
                await m.reply(lang.ok() + `\n\n*New Link for ${groupName}* :\n https://chat.whatsapp.com/${link}`)
            break
            case 'leave':
                if (!m.isGroup) return m.reply(lang.groupOnly())
                if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
               m.reply('Sayonara~ 👋').then(async res => await alpha.groupLeave(from))
            break
            case 'group': case 'grup':
                if (!isGroup) return m.reply(lang.groupOnly())
                if (!isGroupAdmins ) return m.reply(lang.adminOnly())
                if (args.length === 1) return m.reply(lang.wrongFormat())
                if (args[1] === 'open'){
                    await alpha.groupSettingUpdate(from, 'not_announcement')
		 		   reply(lang.ok())
                } else if (args[1] === 'close'){
                    await alpha.groupSettingUpdate(from, 'announcement')
                    m.reply(lang.ok())
                } else {
                    m.reply(lang.wrongFormat())
                }
            break            
 default:
if (budy.startsWith('=>')) {
if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
 if (sat == undefined) {
 bang = util.format(sul)
 }
 return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(err)
}
}

if (budy.startsWith('<')) {
if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}

if (budy.startsWith('$')) {
if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
mengtermuk = budy.slice(2)
exec(mengtermuk, (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(`*${botname}*\nEXEC: ${mengtermuk}\n\n${stdout}`)
})
}
}


} catch (err) {
 m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})