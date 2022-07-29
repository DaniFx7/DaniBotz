require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const ms = require('ms')
const caliph = require("caliph-api")
const xfarr = require("xfarr-api")
const hx = require("hxz-api")
const fetch = require('node-fetch')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const { mediafire } = require('./lib/scraper.js')

//api

let daniapi = global.daniapi

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let tebakkimia = db.data.game.kimia = []
let asahotak = db.data.game.asahotak = []
let tebakbendera = db.data.game.bendera = []
let susunkata = db.data.game.susunkata = []
let tekateki = db.data.game.tekateki = []
let tebakkabupaten = db.data.game.kabupaten = []
let tebakanime = db.data.game.anime = []
let tebakwaifu = db.data.game.waifu = []
let tebakaplikasi = db.data.game.aplikasi = []
let tebakjenaka= db.data.game.jenaka = []
let vote = db.data.others.vote = []
let _cmdUser = db.data.database.cmduser = []
let _cmd = db.data.database.cmd = []
let pendaftar = db.data.database.pendaftar = []

module.exports = Dani = async (Dani, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await Dani.decodeJid(Dani.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const sender = m.sender
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const groupMetadata = m.isGroup ? await Dani.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const jumlahUser = pendaftar.length

try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
} else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
}

let setting = db.data.settings[botNumber]
if (typeof setting !== 'object') db.data.settings[botNumber] = {}
if (setting) {
if (!('anticall' in setting)) setting.anticall = true
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = false
if (!('templateImage' in setting)) setting.templateImage = true
if (!('templateVideo' in setting)) setting.templateVideo = false
if (!('templateGif' in setting)) setting.templateGif = false
if (!('templateMsg' in setting)) setting.templateMsg = false
if (!('templateLocation' in setting)) setting.templateLocation = false
} else global.db.data.settings[botNumber] = {
anticall: true,
status: 0,
autobio: false,
templateImage: true,
templateVideo: false,
templateGif: false,
templateMsg: false,
templateLocation: false,
}

} catch (err) {
console.error(err)
}

// Public & Self
if (!Dani.public) {
if (!m.key.fromMe) return
}

// Push Message To Console && Auto Read
if (m.message) {
Dani.readMessages([m.key])
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
}

// Check Bandwidth
let { sizeFormatter } = require("human-readable");
let formatd = sizeFormatter({
std: "JEDEC", // 'SI' (default) | 'IEC' | 'JEDEC'
decimalPlaces: 2,
keepTrailingZeroes: false,
render: (literal, symbol) => `${literal} ${symbol}B`,
});
async function checkBandwidth() {
var data = require("node-os-utils")
data = await data.netstat.stats()
let ind = 0
let out = 0
for (let i of data) {
ind = ind + i.inputBytes
out = out + i.outputBytes
}
return {
download: formatd(ind),
upload: formatd(out)
}
}

//Add Hit Today & Total
global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/WhatsApp-Bot/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/WhatsApp-Bot${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}

// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.data.users)
let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
for (let jid of user) global.db.data.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})

// auto set bio
if (db.data.settings[botNumber].autobio) {
let setting = global.db.data.settings[botNumber]
if (new Date() * 1 - setting.status > 1000) {
let uptime = await runtime(process.uptime())
await Dani.setStatus(`Dani Botz | Runtime : ${runtime(process.uptime())}`)
setting.status = new Date() * 1
}
}

  // Anti Link
if (db.data.chats[m.chat].antilink) {
if (budy.match(`chat.whatsapp.com`)) {
m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
Dani.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

// Mute Chat
if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: Dani.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, Dani.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
Dani.ev.emit('messages.upsert', msg)
}

if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
Dani.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebaklagu', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 *_T E B A K L A G U*_ 🎮\n\nJawaban Benar 🎉\n\nIngin Bermain Kembali?Klik Tombol Button Dibawah Ini`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebaklagu[m.sender.split('@')[0]]
} else m.reply('_*Jawaban Anda Salah*_')
}

if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else m.reply('_*Jawaban Anda Salah*_')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebakgambar', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 *_T E B A K G A M B A R_* 🎮\n\nJawaban Benar 🎉\n\nIngin Bermain Kembali?Klik Tombol Button Dibawah Ini`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebakgambar[m.sender.split('@')[0]]
} else m.reply('_*Jawaban Anda Salah*_')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebakkata', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 *_T E B A K K A T A_* 🎮\n\nJawaban Benar 🎉\n\nIngin Bermain Kembali?Klik Tombol Button Dibawah Ini`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebakkata[m.sender.split('@')[0]]
} else m.reply('_*Jawaban Anda Salah*_')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'caklontong', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 *_C A K L O N T O N G_* 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin Bermain Kembali?Klik Tombol Button Dibawah Ini`, `Made With 🤍 Dani | Copyright 2022`, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else m.reply('_*Jawaban Anda Salah*_')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebakkalimat', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 *_T E B A K K A L I M A T_* 🎮\n\nJawaban Benar 🎉\n\nIngin Bermain Kembali?Klik Tombol Button Dibawah Ini`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else m.reply('_*Jawaban Anda Salah*_')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebaklirik', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 *_T E B A K L I R I K_* 🎮\n\nJawaban Benar 🎉\n\nIngin Bermain Kembali?Klik Tombol Button Dibawah Ini`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebaklirik[m.sender.split('@')[0]]
} else m.reply('_*Jawaban Anda Salah*_')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebaktebakan', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 *_T E B A K T E B A K A N_* 🎮\n\nJawaban Benar 🎉\n\nIngin Bermain Kembali?Klik Tombol Button Dibawah Ini`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else m.reply('_*Jawaban Anda Salah*_')
}

if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkimia[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebakkimia', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 *_T E B A K K I M I A_* 🎮\n\nJawaban Benar 🎉\n\nIngin Bermain Kembali?Klik Tombol Button Dibawah Ini`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebakkimia[m.sender.split('@')[0]]
} else m.reply('_*Jawaban Anda Salah*_')
}

if (asahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = asahotak[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'asahotak', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮  *_A S A H O T A K_* 🎮\n\nJawaban Benar 🎉\n\nIngin Bermain Kembali?Klik Tombol Button Dibawah Ini`, `Made With 🤍 Dani | Copyright 2022`, m)
delete asahotak[m.sender.split('@')[0]]
} else m.reply('_*Jawaban Anda Salah*_')
}

if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakbendera[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebakbendera', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 *_T E B A K B E N D E R A_* 🎮\n\nJawaban Benar 🎉\n\nIngin Bermain Kembali?Klik Tombol Button Dibawah Ini`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebakbendera[m.sender.split('@')[0]]
} else m.reply('_*Jawaban Anda Salah*_')
}

if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkabupaten[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebakkabupaten', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 *_T E B A K K A B U P A T E N_* 🎮\n\nJawaban Benar 🎉\n\nIngin Bermain Kembali?Klik Tombol Button Dibawah Ini`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebakkabupaten[m.sender.split('@')[0]]
} else m.reply('_*Jawaban Anda Salah*_')
}

if (tekateki.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tekateki[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tekateki', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 *_T E K A T E K I_* 🎮\n\nJawaban Benar 🎉\n\nIngin Bermain Kembali?Klik Tombol Button Dibawah Ini`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tekateki[m.sender.split('@')[0]]
} else m.reply('_*Jawaban Anda Salah*_')
}

   if (susunkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = susunkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'susunkata', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮  *_S U S U N K A T A_* 🎮\n\nJawaban Benar 🎉\n\nIngin Bermain Kembali?Klik Tombol Button Dibawah Ini`, `Made With 🤍 Dani | Copyright 2022`, m)
delete susunkata[m.sender.split('@')[0]]
} else m.reply('_*Jawaban Anda Salah*_')
}

if (tebakanime.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakanime[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebakanime', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 *_T E B A K A N I M E_* 🎮\n\nJawaban Benar 🎉\n\nIngin Bermain Kembali?Klik Tombol Button Dibawah Ini`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebakanime[m.sender.split('@')[0]]
} else m.reply('_*Jawaban Anda Salah*_')
}

if (tebakaplikasi.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakaplikasi[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebakaplikasi', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 *_T E B A K A P L I K A S I_* 🎮\n\nJawaban Benar 🎉\n\nIngin Bermain Kembali?Klik Tombol Button Dibawah Ini`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebakaplikasi[m.sender.split('@')[0]]
} else m.reply('_*Jawaban Anda Salah*_')
}

if (tebakwaifu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakwaifu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebakwaifu', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 *_T E B A K W A I F U_* 🎮\n\nJawaban Benar 🎉\n\nIngin Bermain Kembali?Klik Tombol Button Dibawah Ini`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebakwaifu[m.sender.split('@')[0]]
} else m.reply('_*Jawaban Anda Salah*_')
}

if (tebakjenaka.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakjenaka[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await Dani.sendButtonText(m.chat, [{ buttonId: 'tebakjenaka', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `🎮 *_T E B A K J E N A K A_* 🎮\n\nJawaban Benar 🎉\n\nIngin Bermain Kembali?Klik Tombol Button Dibawah Ini`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebakjenaka[m.sender.split('@')[0]]
} else m.reply('_*Jawaban Anda Salah*_')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// m.reply(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
m.reply({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await Dani.sendText(room.x, str, m, { mentions: parseMention(str) } )
await Dani.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
Dani.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
Dani.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) Dani.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) Dani.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) Dani.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
Dani.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) Dani.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) Dani.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
Dani.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

switch(command) {
case 'afk': {
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} Telah Afk${text ? ': ' + text : ''}`)
}
break	
case 'ttc': case 'ttt': case 'tictactoe': {
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'Kamu masih didalam game'
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
if (room) {
m.reply('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await Dani.sendText(room.x, str, m, { mentions: parseMention(str) } )
await Dani.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (text) room.name = text
m.reply('Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''))
this.game[room.id] = room
}
}
break
case 'delttc': case 'delttt': {
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
Dani.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
m.reply(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
m.reply('rusak')
}
}
break
case 'suitpvp': case 'suit': {
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await Dani.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) Dani.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break
case 'runtime': {
m.reply(`DANI BOT AKTIF SELAMA : ${runtime(process.uptime())}`)
}
break
case 'sourcecode': case 'sc': {
m.reply(`https://github.com/Fxc08/DaniBotz`)
}
break
case 'get': {
if (!args[0]) return m.reply("Urlnya?")
if (!isUrl(text)) return m.reply("Hanya Link!")
try {
let gts = await fetchJson(args.join(" "))
m.reply(gts)
} catch {
m.reply("Error!")
}
}
break
case 'getcase': {
if (!isCreator) throw mess.owner
if (args.length < 1) return reply ("*Mau nyari case apa kak*") 
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("Dani.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
m.reply (`${getCase(q)}`)
}
break
case 'chat': {
if (!isCreator) throw mess.owner
if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0] === 'mute') {
Dani.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
Dani.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'archive') {
Dani.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
Dani.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'read') {
Dani.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unread') {
Dani.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'delete') {
Dani.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
}
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
if (!m.quoted && !text) throw `Kirim/reply text dengan caption ${prefix + command}`
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
break
case 'tebaklagu': {                
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`https://danixcoders.herokuapp.com/api/entertainment/tebaklagu?apikey=${daniapi}`)
let msg = await Dani.sendMessage(m.chat, { audio: { url: result.result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
Dani.sendText(m.chat, `❏ *T E B A K L A G U*\n\n❏ *Artist* : ${result.result.artist}\n❏ *Waktu* : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebaklagu', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `*[WAKTU HABIS]*\n❏ *Jawaban* :  ${tebaklagu[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebaklagu[m.sender.split('@')[0]]
}
}
break
case 'tebakgambar': {              
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`https://danixcoders.herokuapp.com/api/entertainment/tebakgambar?apikey=${daniapi}`)
Dani.sendImage(m.chat, result.result.pertanyaan, `❏ *T E B A K G A M B A R*\n\n❏ *Waktu* : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebakgambar', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `*[WAKTU HABIS]*\n❏ *Jawaban* :  ${tebakgambar[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebakgambar[m.sender.split('@')[0]]
}                 
}
break
case 'tebakkabupaten': {          
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`https://danixcoders.herokuapp.com/api/entertainment/tebakkabupaten?apikey=${daniapi}`)
Dani.sendImage(m.chat, result.result.pertanyaan, `❏ *T E B A K K A B U P A T E N*\n\n❏ *Waktu* : 60s`, m).then(() => {
tebakkabupaten[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebakkabupaten', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `*[WAKTU HABIS]*\n❏ *Jawaban* :  ${tebakkabupaten[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebakkabupaten[m.sender.split('@')[0]]
}                 
}
break
case 'tebakanime': {               
if (tebakanime.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`https://danixcoders.herokuapp.com/api/entertainment/tebakanime?apikey=${daniapi}`)                   
Dani.sendImage(m.chat, result.image, `❏ *T E B A K A N I M E*\n\n❏ *Deskripsi* : ${result.deskripsi}\n❏ *Waktu* : 60s`, m).then(() => {
tebakanime[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakanime.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebakanime', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `*[WAKTU HABIS]*\n❏ *Jawaban* :  ${tebakanime[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebakanime[m.sender.split('@')[0]]
}                 
}
break
case 'tebakaplikasi': {                
if (tebakaplikasi.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`https://danixcoders.herokuapp.com/api/entertainment/tebakaplikasi?apikey=${daniapi}`)                   
Dani.sendImage(m.chat, result.image, `❏ *T E B A K A P L I K A S I*\n\n❏ *Waktu* : 60s`, m).then(() => {
tebakaplikasi[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakaplikasi.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebakaplikasi', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `*[WAKTU HABIS]*\n❏ *Jawaban* :  ${tebakaplikasi[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebakaplikasi[m.sender.split('@')[0]]
}                 
}
break
case 'tebakwaifu': {                
if (tebakwaifu.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let anu = await fetchJson(`https://danixcoders.herokuapp.com/api/entertainment/tebakwaifu?apikey=${daniapi}`)                   
Dani.sendImage(m.chat, anu.result.image, `❏ *T E B A K W A I F U*\n\n❏ *Waktu* : 60s`, m).then(() => {
tebakwaifu[m.sender.split('@')[0]] = anu.result.name.toLowerCase()
})
await sleep(60000)
if (tebakwaifu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + anu.result.name)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebakwaifu', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `*[WAKTU HABIS]*\n❏ *Jawaban* :  ${tebakwaifu[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebakwaifu[m.sender.split('@')[0]]
}                 
}
break
case 'tebakkata': {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`https://danixcoders.herokuapp.com/api/entertainment/tebakkata?apikey=${daniapi}`)
Dani.sendText(m.chat, `❏ *T E B A K K A T A*\n\n❏ *Soal* : ${result.result.soal}\n❏ *Waktu* : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebakkata', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `*[WAKTU HABIS]*\n❏ *Jawaban* :  ${tebakkata[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebakkata[m.sender.split('@')[0]]
}
}
break
case 'tebakkalimat': {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`https://danixcoders.herokuapp.com/api/entertainment/tebakkalimat?apikey=${daniapi}`)
Dani.sendText(m.chat, `❏ *T E B A K K A L I M A T*\n\n❏ *Soal* : ${result.result.soal}\n❏ *Waktu* : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebakkalimat', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `*[WAKTU HABIS]*\n❏ *Jawaban* :  ${tebakkalimat[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
}
break
case 'tebaklirik': {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`https://danixcoders.herokuapp.com/api/entertainment/tebaklirik?apikey=${daniapi}`)
Dani.sendText(m.chat, `❏ *T E B A K L I R I K*\n\n❏ *Soal* : ${result.result.question}\n❏ *Waktu* : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.result.answer.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.answer)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebaklirik', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebaklirik[m.sender.split('@')[0]]
}
}
break
case 'tebaktebakan': {
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`https://danixcoders.herokuapp.com/api/entertainment/tebaktebakan?apikey=${daniapi}`)
Dani.sendText(m.chat, `❏ *T E B A K T E B A K A N*\n\n❏ *Soal* : ${result.result.soal}\n❏ *Waktu* : 60s`, m).then(() => {
tebaktebakan[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'tabaktebakan', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `*[WAKTU HABIS]*\n❏ *Jawaban* :  ${tebaktebakan[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebaktebakan[m.sender.split('@')[0]]
}
}
break
case 'tebakkimia': {
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`https://danixcoders.herokuapp.com/api/entertainment/tebakkimia?apikey=${daniapi}`)
Dani.sendText(m.chat, `❏ *T E B A K K I M I A*\n\n❏ *Soal* : ${result.result.nama}\n❏ *Waktu* : 60s`, m).then(() => {
tebakkimia[m.sender.split('@')[0]] = result.result.lambang.toLowerCase()
})
await sleep(60000)
if (tebakkimia.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.lambang)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebakkimia', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `*[WAKTU HABIS]*\n❏ *Jawaban* :  ${tebakkimia[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebakkimia[m.sender.split('@')[0]]
}
}
break
case 'asahotak': {
if (asahotak.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`https://danixcoders.herokuapp.com/api/entertainment/asahotak?apikey=${daniapi}`)
Dani.sendText(m.chat, `❏ *A S A H O T A K*\n\n❏ *Soal* : ${result.result.soal}\n❏ *Waktu* : 60s`, m).then(() => {
asahotak[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (asahotak.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'asahotak', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `*[WAKTU HABIS]*\n❏ *Jawaban* :  ${asahotak[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, m)
delete asahotak[m.sender.split('@')[0]]
}
}
break
case 'tebakbendera': {
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`https://danixcoders.herokuapp.com/api/entertainment/tebakbendera?apikey=${daniapi}`)
Dani.sendText(m.chat, `❏ *T E B A K B E N D E R A*\n\n❏ *Bendera* : ${result.result.bendera}\n❏ *Waktu* : 60s`, m).then(() => {
tebakbendera[m.sender.split('@')[0]] = result.result.nama.toLowerCase()
})
await sleep(60000)
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.nama)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebakbendera', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `*[WAKTU HABIS]*\n❏ *Jawaban* :  ${tebakbendera[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebakbendera[m.sender.split('@')[0]]
}
}
break
case 'tekateki': {
if (tekateki.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`https://danixcoders.herokuapp.com/api/entertainment/tekateki?apikey=${daniapi}`)
Dani.sendText(m.chat, `❏ *T E K A T E K I*\n\n❏ *Soal* : ${result.result.soal}\n❏ *Waktu* : 60s`, m).then(() => {
tekateki[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (tekateki.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'tekateki', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `*[WAKTU HABIS]*\n❏ *Jawaban* :  ${tekateki[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tekateki[m.sender.split('@')[0]]
}
}
break
case 'susunkata': {
if (susunkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`https://danixcoders.herokuapp.com/api/entertainment/susunkata?apikey=${daniapi}`)
Dani.sendText(m.chat, `❏ *S U S U N K A T A*\n\n❏ *Soal* : ${result.result.soal}\n❏ *Type* : ${result.result.tipe}\n❏ *Waktu* : 60s`, m).then(() => {
susunkata[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (susunkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'susunkata', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `*[WAKTU HABIS]*\n❏ *Jawaban* :  ${susunkata[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, m)
delete susunkata[m.sender.split('@')[0]]
}
}
break
case 'tebakjenaka': {
if (tebakjenaka.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let result = await fetchJson(`https://danixcoders.herokuapp.com/api/entertainment/tebakjenaka?apikey=${daniapi}`)
Dani.sendText(m.chat, `❏ *T E B A K J E N A K A*\n\n❏ *Soal* : ${result.result.pertanyaan}\n❏ *Waktu* : 60s`, m).then(() => {
tebakjenaka[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakjenaka.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.result.jawaban)
Dani.sendButtonText(m.chat, [{ buttonId: 'tebakjenaka', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `*[WAKTU HABIS]*\n❏ *Jawaban* :  ${tebakjenaka[m.sender.split('@')[0]]}\n❏ *Note* : Jika Belum Bisa Belajar Dulu Dek\n\nIngin bermain? tekan button dibawah`, `Made With 🤍 Dani | Copyright 2022`, m)
delete tebakjenaka[m.sender.split('@')[0]]
}
}
break
case 'caklontong': {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return reply(`Masih Ada Sesi Yang Belum Diselesaikan!`)
let result = await fetchJson(`https://danixcoders.herokuapp.com/api/entertainment/caklontong?apikey=${daniapi}`)
Dani.sendText(m.chat, `❏ *C A K L O N T O N G*\n\n❏ *Soal* : ${result.result.soal}*\n❏ *Waktu* : 60s`, m).then(() => {
console.log("Jawaban: " + result.result.jawaban)
caklontong[m.sender.split('@')[0]] = result.result.jawaban.toLowerCase()
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
Dani.sendButtonText(m.chat, [{ buttonId: 'caklontong', buttonText: { displayText: '➡️ NEXT' }, type: 1 }], `*[WAKTU HABIS]*\n❏ *Jawaban* : ${result.result.jawaban}\n❏ *Deskripsi* : ${result.result.desc}` , m)
delete caklontong[m.sender.split('@')[0]]
}
}
break
case 'kuismath': case 'math': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
let { genMath, modes } = require('./lib/math')
if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`
let result = await genMath(text.toLowerCase())
Dani.sendText(m.chat, `❏ * K U I S M A T H*\n\n❏ *Soal* : ${result.soal.toLowerCase()}?\n\n❏ *Waktu* : ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
m.reply("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break
case 'jodohku': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let me = m.sender
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `👫Jodoh mu adalah

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let ments = [me, jodoh]
let buttons = [
{ buttonId: 'jodohku', buttonText: { displayText: 'JODOHKU' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, jawab, `Made With 🤍 Dani | Copyright 2022`, m, {mentions: ments})
}
break
case 'jadian': {
if (!m.isGroup) throw mess.group
let member = participants.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang Jadian💖 Jangan lupa pajak jadiannya🐤

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
let buttons = [
{ buttonId: 'jadian', buttonText: { displayText: 'JADIAN' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, jawab, `Made With 🤍 Dani | Copyright 2022`, m, {mentions: menst})
}
break
case 'react': {
if (!isCreator) throw mess.owner
reactionMessage = {
react: {
text: args[0],
key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
}
}
Dani.sendMessage(m.chat, reactionMessage)
}
break  
case 'join': {
if (!isCreator) throw mess.owner
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await Dani.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'leave': {
if (!isCreator) throw mess.owner
await Dani.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setexif': {
if (!isCreator) throw mess.owner
if (!text) throw `Example : ${prefix + command} packname|author`
global.packname = text.split("|")[0]
global.author = text.split("|")[1]
m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
}
break
case 'kick': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Dani.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'add': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Dani.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'promote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Dani.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'demote': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Dani.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'block': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Dani.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'unblock': {
if (!isCreator) throw mess.owner
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await Dani.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setname': case 'setsubject': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await Dani.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setdesc': case 'setdesk': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await Dani.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
}
break
case 'setppbot': {
if (!isCreator) throw mess.owner
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await Dani.downloadAndSaveMediaMessage(quoted)
await Dani.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let media = await Dani.downloadAndSaveMediaMessage(quoted)
await Dani.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
case 'tagall': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
Dani.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
Dani.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'totag': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!m.quoted) throw `Reply pesan dengan caption ${prefix + command}`
Dani.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
}
break
case 'style': case 'styletext': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
db.data.users[m.sender].limit -= 1 // -1 limit
let { styletext } = require('./lib/scraper')
if (!text) throw 'Masukkan Query text!'
let anu = await styletext(text)
let teks = `Srtle Text From ${text}\n\n`
for (let i of anu) {
teks += `⭔ *${i.name}* : ${i.result}\n\n`
}
m.reply(teks)
}
break
case 'vote': {
if (!m.isGroup) throw mess.group
if (m.chat in vote) throw `_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`
if (!text) throw `Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`
m.reply(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [q, [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageVote = {
text: teks_vote,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttonsVote,
headerType: 1
}
Dani.sendMessage(m.chat, buttonMessageVote)
}
break
case 'upvote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]
let buttonMessageUpvote = {
text: teks_vote,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
}
Dani.sendMessage(m.chat, buttonMessageUpvote)
}
break
case 'devote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) throw 'Kamu Sudah Vote'
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageDevote = {
text: teks_vote,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
Dani.sendMessage(m.chat, buttonMessageDevote)
}
break
case 'cekvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©DaniSec
`
Dani.sendTextWithMentions(m.chat, teks_vote, m)
break
case 'deletevote': case'delvote': case 'hapusvote': {
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`
delete vote[m.chat]
m.reply('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
break
case 'creategc':
if (!isCreator) return m.reply(mess.owner)
if (!q) return m.reply(`*Example* : #creategc namagroup`)
let cret = await Dani.groupCreate(args.join(" "), [])
let response = await Dani.groupInviteCode(cret.id)
teks = `  「 *CREATE GROUP* 」

❏ *Name* : ${cret.subject}
❏ *Owner* : @${cret.owner.split("@")[0]}
❏ *Time* : ${moment(cret.creation * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")} WIB


https://chat.whatsapp.com/${response}

`
m.reply(teks)
break
case 'group': case 'grup': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'close'){
await Dani.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
await Dani.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'OPEN' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'CLOSE' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE SETTING GROUP`, `Made With 🤍 Dani | Copyright 2022`, m)
}
}
break
case 'editinfo': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'open'){
await Dani.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await Dani.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'OPEN' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'CLOSE' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE EDIT INFO GROUP`, `Made With 🤍 Dani | Copyright 2022`, m)
}
}
break
case 'antilink': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = true
m.reply(`Antilink Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].antilink = false
m.reply(`Antilink Tidak Aktif !`)
} else {
let buttons = [
{ buttonId: 'antilink on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE ANTILINK GROUP`, `Made With 🤍 Dani | Copyright 2022`, m)
}
}
break
case 'mute': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return m.reply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].mute = true
m.reply(`Dani Botz telah di mute di group ini !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].mute = false
m.reply(`Dani Botz telah di unmute di group ini !`)
} else {
let buttons = [
{ buttonId: 'mute on', buttonText: { displayText: 'ON' }, type: 1 },
{ buttonId: 'mute off', buttonText: { displayText: 'OFF' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `MODE MUTE BOTZ`, `Made With 🤍 Dani | Copyright 2022`, m)
}
}
break
case 'anticall': {
if (!isCreator) throw mess.owner
let ciko = db.data.settings[botNumber].anticall
if (args[0] === "on") {
if (ciko) return m.reply(`Sudah Aktif Sebelumnya`)
ciko = true
m.reply(`AntiCall Aktif !`)
} else if (args[0] === "off") {
if (!ciko) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
ciko = false
m.reply(`AntiCall Tidak Aktif !`)
} else {
 let buttons = [
{ buttonId: 'anticall on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'anticall off', buttonText: { displayText: 'Off' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `Mode AntiCall`, hisoka.user.name, m)
}
}
break
case 'linkgroup': case 'linkgc': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
let response = await Dani.groupInviteCode(m.chat)
Dani.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'ephemeral': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === '1') {
await Dani.groupToggleEphemeral(m.chat, 1*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === '7') {
await Dani.groupToggleEphemeral(m.chat, 7*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === '90') {
await Dani.groupToggleEphemeral(m.chat, 90*24*3600).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'off') {
await Dani.groupToggleEphemeral(m.chat, 0).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else {
let sections = [
{
title: "CHANGE EPHEMERAL GROUP",
rows: [
{title: "Ephemeral 1 day", rowId: `ephemeral 1`, description: `Activate the ephemeral group for 1 day`},
{title: "Ephemeral 7 day's", rowId: `ephemeral 7`, description: `Activate the ephemeral group for 7 day's`},
{title: "Ephemeral 90 days's", rowId: `ephemeral 90`, description: `Activate the ephemeral group for 90 day's`},
{title: "Ephemeral Off", rowId: `ephemeral off`, description: `Deactivate this Ephemeral group`}
]
},
]
Dani.sendListMsg(m.chat, `Please select the following Ephemeral Options List !`, `Made With 🤍 Dani | Copyright 2022`, `Hello Admin ${groupMetadata.subject}`, `Click Here`, sections, m)
}
}
break
case 'delete': case 'del': {
if (!m.quoted) throw false
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
Dani.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'bcgc': case 'bcgroup': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let getGroups = await Dani.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let btn = [{
let btn = [{
urlButton: {
displayText: 'SOURCE CODE',
url: 'https://github.com/DikaArdnt/Hisoka-Morou'
}
}, {
callButton: {
displayText: 'DEVELOPER',
phoneNumber: '+62 857-1462-7920'
}
}, {
quickReplyButton: {
displayText: '📈 PING',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: '👑 OWNER',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: '📑 SCRIPT',
id: 'sc'
}
}]
let txt = `「 BROADCAST BOT 」\n\n${text}`
Dani.send5ButImg(i, txt, `Made With 🤍 Dani | Copyright 2022`, global.thumb, btn)
}
m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (!isCreator) throw mess.owner
if (!text) throw `Text mana?\n\nExample : ${prefix + command} fatih-san`
let anu = await store.chats.all().map(v => v.id)
m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
let btn = [{
urlButton: {
displayText: 'SOURCE CODE',
url: 'https://github.com/DikaArdnt/Hisoka-Morou'
}
}, {
callButton: {
displayText: 'DEVELOPER',
phoneNumber: '+62 857-1462-7920'
}
}, {
quickReplyButton: {
displayText: '📈 PING',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: '👑 OWNER',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: '📑 SCRIPT',
id: 'sc'
}
}]
let txt = `「 BROADCAST BOT」\n\n${text}`
Dani.send5ButImg(yoi, txt, `Made With 🤍 Dani | Copyright 2022`, global.thumb, btn)
}
m.reply('Sukses Broadcast')
}
break
case 'infochat': {
if (!m.quoted) m.reply('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `❏ @${i.userJid.split('@')[0]}\n`
teks += `┗━❏ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ❏ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
Dani.sendTextWithMentions(m.chat, teks, m)
}
break
case 'q': case 'quoted': {
if (!m.quoted) return m.reply('Reply Pesannya!!')
let wokwol = await Dani.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'listpc': {
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
for (let i of anu) {
let nama = store.messages[i].array[0].pushName
teks += `❏ *Nama :* ${nama}\n❏ *User :* @${i.split('@')[0]}\n❏ *Chat :* https://wa.me/${i.split('@')[0]}\n\n\n`
}
Dani.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listgc': {
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
for (let i of anu) {
let metadata = await Dani.groupMetadata(i)
teks += `❏ *Nama :* ${metadata.subject}\n❏ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n❏ *ID :* ${metadata.id}\n❏ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n❏ *Member :* ${metadata.participants.length}\n\n\n`
}
Dani.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listonline': case 'liston': case 'here': {
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
Dani.sendText(m.chat, 'List Online:\n\n' + online.map(v => '❏ @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case 'sticker': case 'stiker': case 's': case 'stickergif': case 'sgif': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command}`
if (/image/.test(mime)) {
m.reply(mess.wait)
let media = await quoted.download()
let encmedia = await Dani.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await Dani.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
if (!quoted) throw `Balas Video/Image Dengan Caption ${prefix + command} teks1|teks2`
let [teks1, teks2] = text.split`|`
if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Dani.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await Dani.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
await fs.unlinkSync(encmedia)
} else {
throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
}
}
break
case 'ebinary': {
if (!text) throw `Example : ${prefix + command} text`
let { eBinary } = require('./lib/binary')
let eb = await eBinary(text)
m.reply(eb)
}
break
case 'dbinary': {
if (!text) throw `Example : ${prefix + command} text`
let { dBinary } = require('./lib/binary')
let db = await dBinary(text)
m.reply(db)
}
break
case 'emojimix': {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await Dani.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'attp': case 'ttp': {
if (!text) throw mess.textt
let media = await getBuffer(`https://xteam.xyz/${command}?file&text=${text}`)      
await Dani.sendImageAsSticker(m.chat, media, m, { packname: packname, author: author })
}
break
case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
if (!/image/.test(mime)) throw respond
if (!text) throw respond
m.reply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGans = await floNime(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
let FaTiH = await Dani.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
}
break     
case 'toimage': case 'toimg': {
if (!quoted) throw mess.replyimage
if (!/webp/.test(mime)) throw `Balas sticker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let media = await Dani.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
Dani.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
if (!quoted) throw mess.replyimage
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await Dani.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await Dani.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
Dani.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tomp3': {
if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
Dani.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By Dani.mp3`}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
m.reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
Dani.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await Dani.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await Dani.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'tourl': {
m.reply(mess.wait)
let {  UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await Dani.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'imagenobg': case 'removebg': case 'remove-bg': {
if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
let remobg = require('remove.bg')
let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
hmm = await './src/remobg-'+getRandom('')
localFile = await Dani.downloadAndSaveMediaMessage(quoted, hmm)
outputFile = await './src/hremo-'+getRandom('.png')
m.reply(mess.wait)
remobg.removeBackgroundFromImageFile({
path: localFile,
apiKey: apinobg,
size: "regular",
type: "auto",
scale: "100%",
outputFile 
}).then(async result => {
Dani.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
await fs.unlinkSync(localFile)
await fs.unlinkSync(outputFile)
})
}
break
case 'take':case 'wm':{
if (!quoted) return m.reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik☕`)
if (!text) return m.reply(`Kirim perintah ${prefix + command} packname|author`)
if (!text.includes('|')) return m.reply(`Kirim perintah ${prefix + command} packname|author`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Dani.sendImageAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik☕`)
let media = await quoted.download()
let encmedia = await Dani.sendVideoAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik☕`)
}
}
break
case 'yts': case 'ytsearch': {
if (!text) throw `Example : ${prefix + command} story wa sadboy`
let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `❏ *No* : ${no++}\n❏ *Type* : ${i.type}\n❏ *Video ID* : ${i.videoId}\n❏ *Title* : ${i.title}\n❏ *Views* : ${i.views}\n❏ *Duration* : ${i.timestamp}\n❏ *Upload At* : ${i.ago}\n❏ *Author* : ${i.author.name}\n❏ *Url* : ${i.url}\n\n\n`
}
Dani.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
case 'google': {
if (!text) throw mess.apkk
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `❏ *G O O G L E S E A R C H*\n\n`
for (let g of res) {
teks += `❏ *Title* : ${g.title}\n`
teks += `❏ *Description* : ${g.snippet}\n`
teks += `❏ *Link* : ${g.link}\n\n\n\n`
} 
m.reply(teks)
})
}
break
case 'gimage': {
if (!text) throw mess.apkk
let gis = require('g-i-s')
gis(text, async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${text}`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `❏ *G I M A G E S E A R C H*

❏ *Query* : ${text}
❏ *Media Url* : ${images}`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'play': case 'ytplay': {
if (!text) throw mess.apkk
m.reply(mess.wait)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let buttons = [
{buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '🎵AUDIO'}, type: 1},
{buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '🎥VIDEO'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `❏ *Y O U T U B E P L A Y*

❏ *Title* : ${anu.title}
❏ *ID* : ${anu.videoId}
❏ *Duration* : ${anu.timestamp}
❏ *Viewers* : ${anu.views}
❏ *Upload At* : ${anu.ago}
❏ *Author* : ${anu.author.name}
❏ *Channel* : ${anu.author.url}
❏ *Description* : ${anu.description}
❏ *Url* : ${anu.url}

_Silahkan Pilih Media Di Bawah_`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'ytmp3': case 'ytaudio': {
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
Dani.sendImage(m.chat, media.thumb, `❏ *Title* : ${media.title}\n❏ *File Size* : ${media.filesizeF}\n❏ *Url* : ${isUrl(text)}\n❏ *Ext* : MP3\n❏ *Resolusi* : ${args[1] || '128kbps'}`, m)
Dani.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
case 'ytmp4': case 'ytvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
Dani.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `❏ *Title* : ${media.title}\n❏ *File Size* : ${media.filesizeF}\n❏ *Url* : ${isUrl(text)}\n❏ *Ext* : MP4\n❏ *Resolusi* : ${args[1] || '360p'}` }, { quoted: m })
}
break
case 'getmusic': {
let { yta } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '128kbps'
let media = await yta(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
Dani.sendImage(m.chat, media.thumb, `❏ *Title* : ${media.title}\n❏ *File Size* : ${media.filesizeF}\n❏ *Url* : ${urls[text - 1]}\n❏ *Ext* : MP3\n❏ *Resolusi* : ${args[1] || '128kbps'}`, m)
Dani.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
}
break
case 'getvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} 1`
if (!m.quoted) return m.reply('Reply Pesan')
if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(urls[text - 1], quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
Dani.sendMessage(m.chat, { document: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `❏ *Title* : ${media.title}\n❏ *File Size* : ${media.filesizeF}\n❏ *Url* : ${urls[text - 1]}\n❏ *Ext* : MP4\n❏ *Resolusi* : ${args[1] || '360p'}` }, { quoted: m })
}
break
case 'pinterest': {
if (!text) throw mess.apkk
m.reply(mess.wait)
let { pinterest } = require('./lib/scraper')
anu = await pinterest(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `pinterest ${text}`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
image: { url: result },
caption: `❏ *P I N T E R E S T*\n\n❏ *Title* : ${text}\n❏ *Url* : ${result}`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'alphacoders': {
if (!text) throw mess.apkk
m.reply(mess.wait)
let buttons = [
{buttonId: `alphacoders ${text}`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
image: { url: `https://api.akuari.my.id/search/alphacoders?query=${text}` },
caption: `❏ *A L P H A C O D E R S*\n\n❏ *Title* : ${text}`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'lirik': {
if (!text) throw mess.apkk
m.reply(mess.wait)
let anu = await fetchJson(`https://api.akuari.my.id/search/lirik?query=${text}`)
Dani.sendText(m.chat, `❏ *Judul* : ${anu.result.judul}\n❏ *Lirik* : ${anu.result.lirik}`, m)
}
break
case 'couple': {
m.reply(mess.wait)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
Dani.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
Dani.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
}
break
case 'wallpaper': {
if (!text) throw mess.apkk
let { wallpaper } = require('./lib/scraper')
anu = await wallpaper(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wallpaper ${text}`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
image: { url: result.image[0] },
caption: `❏ *W A L L P A P E R*\n\n❏ *Title* : ${result.title}\n❏ *Category* : ${result.type}\n❏ *Detail* : ${result.source}\n❏ *Media Url* : ${result.image[2] || result.image[1] || result.image[0]}`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'wikimedia': {
if (!text) throw mess.apkk
let { wikimedia } = require('./lib/scraper')
anu = await wikimedia(text)
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `wikimedia ${text}`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
image: { url: result.image },
caption: `❏ *W I K I M E D I A*\n\n❏ *Title* : ${result.title}\n❏ *Source* : ${result.source}\n❏ *Media Url* : ${result.image}`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'quotesanime': case 'quoteanime': {            
let { quotesAnime } = require('./lib/scraper')
let anu = await quotesAnime()
result = anu[Math.floor(Math.random() * anu.length)]
let buttons = [
{buttonId: `quotesanime`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 2
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break        
case 'pantun': case 'nickff': case 'fml': case 'truth': case 'dare': case 'motivasi': case 'quotespubg':  case 'quotesislamic': case 'katailham': case 'katagalau': case 'katabijak':  case 'faktaunik': case 'puisi': case 'katahacker': case 'katasindiran': case 'katacinta': case 'katasenja': case 'katabucin': {
let anu = await fetchJson(`https://danixcoders.herokuapp.com/api/randomtext/${command}?apikey=${daniapi}`)
let buttons = [
{buttonId: `${command}`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
text: anu.result,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 2
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'quotes': {
addCountCmd(`#${command.slice(0)}`, sender, _cmd)
let anu = await fetchJson(`https://danixcoders.herokuapp.com/api/randomtext/quotes?apikey=${daniapi}`)
let buttons = [
{buttonId: `quotes`, buttonText: {displayText: '➡️ NEXT'}, type: 1}
]
let buttonMessage = {
text: `❏ *Author* : ${anu.result.author}\n❏ *Quotes* : ${anu.result.quotes}`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 2
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'nomerhoki': case 'nomorhoki': {
if (!Number(text)) throw `Example : ${prefix + command} 6285714627920`
let anu = await primbon.nomer_hoki(Number(text))
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nomor HP :* ${anu.message.nomer_hp}\n❏ *Angka Shuzi :* ${anu.message.angka_shuzi}\n❏ *Energi Positif :*\n- Kekayaan : ${anu.message.energi_positif.kekayaan}\n- Kesehatan : ${anu.message.energi_positif.kesehatan}\n- Cinta : ${anu.message.energi_positif.cinta}\n- Kestabilan : ${anu.message.energi_positif.kestabilan}\n- Persentase : ${anu.message.energi_positif.persentase}\n❏ *Energi Negatif :*\n- Perselisihan : ${anu.message.energi_negatif.perselisihan}\n- Kehilangan : ${anu.message.energi_negatif.kehilangan}\n- Malapetaka : ${anu.message.energi_negatif.malapetaka}\n- Kehancuran : ${anu.message.energi_negatif.kehancuran}\n- Persentase : ${anu.message.energi_negatif.persentase}`, m)
}
break
case 'artimimpi': case 'tafsirmimpi': {
if (!text) throw `Example : ${prefix + command} Ketemu Kamu ><`
let anu = await primbon.tafsir_mimpi(text)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Mimpi :* ${anu.message.mimpi}\n❏ *Arti :* ${anu.message.arti}\n❏ *Solusi :* ${anu.message.solusi}`, m)
}
break
case 'ramalanjodoh': case 'ramaljodoh': {
if (!text) throw `Example : ${prefix + command} Dani, 25, 10, 2005, Asfi, 16, 11, 2007`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nama Anda :* ${anu.message.nama_anda.nama}\n❏ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n❏ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❏ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalanjodohbali': case 'ramaljodohbali': {
if (!text) throw `Example : ${prefix + command} Dani, 7, 7, 2005, Asfi, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_jodoh_bali(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nama Anda :* ${anu.message.nama_anda.nama}\n❏ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n❏ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❏ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'suamiistri': {
if (!text) throw `Example : ${prefix + command} Dani, 7, 7, 2005, Asfi, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.suami_istri(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nama Suami :* ${anu.message.suami.nama}\n❏ *Lahir Suami :* ${anu.message.suami.tgl_lahir}\n❏ *Nama Istri :* ${anu.message.istri.nama}\n❏ *Lahir Istri :* ${anu.message.istri.tgl_lahir}\n❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalancinta': case 'ramalcinta': {
if (!text) throw `Example : ${prefix + command} Dani, 7, 7, 2005, Asfi, 16, 11, 2004`
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = text.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nama Anda :* ${anu.message.nama_anda.nama}\n❏ *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}\n❏ *Nama Pasangan :* ${anu.message.nama_pasangan.nama}\n❏ *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}\n❏ *Sisi Positif :* ${anu.message.sisi_positif}\n❏ *Sisi Negatif :* ${anu.message.sisi_negatif}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artinama': {
if (!text) throw `Example : ${prefix + command} Ahmad Dani`
let anu = await primbon.arti_nama(text)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nama :* ${anu.message.nama}\n❏ *Arti :* ${anu.message.arti}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'kecocokannama': case 'cocoknama': {
if (!text) throw `Example : ${prefix + command} Dani, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nama :* ${anu.message.nama}\n❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Life Path :* ${anu.message.life_path}\n❏ *Destiny :* ${anu.message.destiny}\n❏ *Destiny Desire :* ${anu.message.destiny_desire}\n❏ *Personality :* ${anu.message.personality}\n❏ *Persentase :* ${anu.message.persentase_kecocokan}`, m)
}
break
case 'kecocokanpasangan': case 'cocokpasangan': case 'pasangan': {
if (!text) throw `Example : ${prefix + command} Dani|Asfi`
let [nama1, nama2] = text.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
Dani.sendImage(m.chat,  anu.message.gambar, `❏ *Nama Anda :* ${anu.message.nama_anda}\n❏ *Nama Pasangan :* ${anu.message.nama_pasangan}\n❏ *Sisi Positif :* ${anu.message.sisi_positif}\n❏ *Sisi Negatif :* ${anu.message.sisi_negatif}`, m)
}
break
case 'jadianpernikahan': case 'jadiannikah': {
if (!text) throw `Example : ${prefix + command} 6, 12, 2020`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Tanggal Pernikahan :* ${anu.message.tanggal}\n❏ *karakteristik :* ${anu.message.karakteristik}`, m)
}
break
case 'sifatusaha': {
if (!ext)throw `Example : ${prefix+ command} 28, 12, 2021`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Lahir :* ${anu.message.hari_lahir}\n❏ *Usaha :* ${anu.message.usaha}`, m)
}
break
case 'rejeki': case 'rezeki': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Lahir :* ${anu.message.hari_lahir}\n❏ *Rezeki :* ${anu.message.rejeki}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'pekerjaan': case 'kerja': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Lahir :* ${anu.message.hari_lahir}\n❏ *Pekerjaan :* ${anu.message.pekerjaan}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'ramalannasib': case 'ramalnasib': case 'nasib': {
if (!text) throw `Example : 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Analisa :* ${anu.message.analisa}\n❏ *Angka Akar :* ${anu.message.angka_akar}\n❏ *Sifat :* ${anu.message.sifat}\n❏ *Elemen :* ${anu.message.elemen}\n❏ *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`, m)
}
break
case 'potensipenyakit': case 'penyakit': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Analisa :* ${anu.message.analisa}\n❏ *Sektor :* ${anu.message.sektor}\n❏ *Elemen :* ${anu.message.elemen}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'artitarot': case 'tarot': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendImage(m.chat, anu.message.image, `❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Simbol Tarot :* ${anu.message.simbol_tarot}\n❏ *Arti :* ${anu.message.arti}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'fengshui': {
if (!text) throw `Example : ${prefix + command} Dani, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`
let [nama, gender, tahun] = text.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nama :* ${anu.message.nama}\n❏ *Lahir :* ${anu.message.tahun_lahir}\n❏ *Gender :* ${anu.message.jenis_kelamin}\n❏ *Angka Kua :* ${anu.message.angka_kua}\n❏ *Kelompok :* ${anu.message.kelompok}\n❏ *Karakter :* ${anu.message.karakter}\n❏ *Sektor Baik :* ${anu.message.sektor_baik}\n❏ *Sektor Buruk :* ${anu.message.sektor_buruk}`, m)
}
break
case 'haribaik': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Kala Tinantang :* ${anu.message.kala_tinantang}\n❏ *Info :* ${anu.message.info}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harisangar': case 'taliwangke': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Hasil :* ${anu.message.result}\n❏ *Info :* ${anu.message.info}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'harinaas': case 'harisial': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Hari Lahir :* ${anu.message.hari_lahir}\n❏ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n❏ *Hari Naas :* ${anu.message.hari_naas}\n❏ *Info :* ${anu.message.catatan}\n❏ *Catatan :* ${anu.message.info}`, m)
}
break
case 'nagahari': case 'harinaga': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Hari Lahir :* ${anu.message.hari_lahir}\n❏ *Tanggal Lahir :* ${anu.message.tgl_lahir}\n❏ *Arah Naga Hari :* ${anu.message.arah_naga_hari}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'arahrejeki': case 'arahrezeki': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Hari Lahir :* ${anu.message.hari_lahir}\n❏ *tanggal Lahir :* ${anu.message.tgl_lahir}\n❏ *Arah Rezeki :* ${anu.message.arah_rejeki}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'peruntungan': {
if (!text) throw `Example : ${prefix + command} Dani, 7, 7, 2005, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`
let [nama, tgl, bln, thn, untuk] = text.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nama :* ${anu.message.nama}\n❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}\n❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'weton': case 'wetonjawa': {
if (!text) throw `Example : ${prefix + command} 7, 7, 2005`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Tanggal :* ${anu.message.tanggal}\n❏ *Jumlah Neptu :* ${anu.message.jumlah_neptu}\n❏ *Watak Hari :* ${anu.message.watak_hari}\n❏ *Naga Hari :* ${anu.message.naga_hari}\n❏ *Jam Baik :* ${anu.message.jam_baik}\n❏ *Watak Kelahiran :* ${anu.message.watak_kelahiran}`, m)
}
break
case 'sifat': case 'karakter': {
if (!text) throw `Example : ${prefix + command} Dani, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nama :* ${anu.message.nama}\n❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Garis Hidup :* ${anu.message.garis_hidup}`, m)
}
break
case 'keberuntungan': {
if (!text) throw `Example : ${prefix + command} Dani, 7, 7, 2005`
let [nama, tgl, bln, thn] = text.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Nama :* ${anu.message.nama}\n❏ *Lahir :* ${anu.message.tgl_lahir}\n❏ *Hasil :* ${anu.message.result}`, m)
}
break
case 'memancing': {
if (!text) throw `Example : ${prefix + command} 12, 1, 2022`
let [tgl, bln, thn] = text.split`,`
let anu = await primbon.primbon_memancing_ikan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Tanggal :* ${anu.message.tgl_memancing}\n❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'masasubur': {
if (!text) throw `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`
let [tgl, bln, thn, siklus] = text.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Hasil :* ${anu.message.result}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'zodiak': case 'zodiac': {
if (!text) throw `Example : ${prefix+ command} 7 7 2005`
let zodiak = [
["capricorn", new Date(1970, 0, 1)],
["aquarius", new Date(1970, 0, 20)],
["pisces", new Date(1970, 1, 19)],
["aries", new Date(1970, 2, 21)],
["taurus", new Date(1970, 3, 21)],
["gemini", new Date(1970, 4, 21)],
["cancer", new Date(1970, 5, 22)],
["leo", new Date(1970, 6, 23)],
["virgo", new Date(1970, 7, 23)],
["libra", new Date(1970, 8, 23)],
["scorpio", new Date(1970, 9, 23)],
["sagittarius", new Date(1970, 10, 22)],
["capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(text)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Zodiak :* ${anu.message.zodiak}\n❏ *Nomor :* ${anu.message.nomor_keberuntungan}\n❏ *Aroma :* ${anu.message.aroma_keberuntungan}\n❏ *Planet :* ${anu.message.planet_yang_mengitari}\n❏ *Bunga :* ${anu.message.bunga_keberuntungan}\n❏ *Warna :* ${anu.message.warna_keberuntungan}\n❏ *Batu :* ${anu.message.batu_keberuntungan}\n❏ *Elemen :* ${anu.message.elemen_keberuntungan}\n❏ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}\n❏ *Catatan :* ${anu.message.catatan}`, m)
}
break
case 'shio': {
if (!text) throw `Example : ${prefix + command} tikus\n\nNote : For Detail https://primbon.com/shio.htm`
let anu = await primbon.shio(text)
if (anu.status == false) return m.reply(anu.message)
Dani.sendText(m.chat, `❏ *Hasil :* ${anu.message}`, m)
}
break
case 'ttnowm': case 'tiktok': case 'tiktoknowm': {                
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('tiktok.com')) throw mess.falseurl
m.reply(mess.wait)
let anu = await fetchJson(`https://melcanz.com/tiktok2?url=${text}&apikey=melcantik`)
Dani.sendMessage(m.chat, { video: { url: anu.nowm },caption: `With No Wm` }, { quoted: m })
}
break
case 'ttaudio': case 'tiktokaudio': {            
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('tiktok.com')) throw mess.falseurl
m.reply(mess.wait)
let anu = await fetchJson(`https://melcanz.com/tiktok2?url=${text}&apikey=melcantik`)
Dani.sendMessage(m.chat, { video: { url: anu.audio }}, mimetype: 'audio/mpeg'}, { quoted: m })
}
break
case 'instagram': case 'ig': case 'igdl': {       
if (!text) throw mess.urll
if (!isUrl(args[0]) && !args[0].includes('instagram.com')) throw mess.falseurl
m.reply(mess.wait)
let urlnya = text
hx.igdl(urlnya)
.then(async(result) => {
for(let i of result.medias){
if(i.url.includes('mp4')){
let link = await getBuffer(i.url)
Dani.sendMessage(m.chat, { video: link, }, { quoted: m })
} else {
let link = await getBuffer(i.url)
Dani.sendMessage(m.chat, { image: link, }, { quoted: m })                  
}
}
}).catch((err) => m.reply(`Server eror`))
}		
break
case 'igs': case 'igstory': case 'instagramstory': {
if (!text) throw 'Enter Username!'                
m.reply(mess.wait)                
hx.igstory(text)
.then(async(result) => {
for(let i of result.medias){
if(i.url.includes('mp4')){
let link = await getBuffer(i.url)
Dani.sendMessage(m.chat, { video: link, }, { quoted: m })
} else {
let link = await getBuffer(i.url)
Dani.sendMessage(m.chat, { image: link, }, { quoted: m })                  
}
}
}).catch((err) => m.reply(`Sorry the username was not found`))
}
break            
case 'soundcloud': case 'scdl': {            
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('soundcloud.com')) throw mess.falseurl
m.reply(mess.wait)
let anu = await fetchJson(`https://api.akuari.my.id/downloader/scdl?link=${text}`)
let msg = await Dani.sendImage(m.chat, anu.result.thumb, `❏ *S O U N D C L O U D*\n❏ *Title* : ${anu.result.title}\n❏ *Url* : ${text}`)
Dani.sendMessage(m.chat, { audio: { url: anu.result.link }, mimetype: 'audio/mpeg', fileName: anu.result.title+'.m4a' }, { quoted: msg })
}
break
case 'twitdl': case 'twitter': {        
if (!text) throw mess.urll
m.reply(mess.wait)
let anu = await fetchJson(`https://api.akuari.my.id/downloader/twitter?link=${text}`)
let buttons = [
{buttonId: `twittermp3 ${text}`, buttonText: {displayText: 'A U D I O'}, type: 1}
]
let buttonMessage = {
video: { url: anu.HD || anu.SD },
caption: util.format(anu),
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 5
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'twittermp3': case 'twitteraudio': {      
if (!text) throw mess.urll
m.reply(mess.wait)
let anu = await fetchJson(`https://api.akuari.my.id/downloader/twitter?link=${text}`)
let buttons = [
{buttonId: `twitter ${text}`, buttonText: {displayText: 'V I D E O'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumb },
caption: util.format(anu.result),
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons: buttons,
headerType: 4
}
let msg = await Dani.sendMessage(m.chat, buttonMessage, { quoted: m })
Dani.sendMessage(m.chat, { audio: { url: anu.audio } }, { quoted: msg })
}
break
case 'fbdl': case 'fb': case 'facebook': {       
if (!q) throw mess.urll                
m.reply(mess.wait)
let anu = await fetchJson(`https://api.akuari.my.id/downloader/fbdl?link=${text}`)
Dani.sendMessage(m.chat, { video: { url: anu.url.url }, caption: `Facebook Download`}, { quoted: m })
}
break
case 'pindl': case 'pinterestdl': {      
if (!text) throw mess.urll
m.reply(mess.wait)
let anu = await fetchJson(`https://api.akuari.my.id/downloader/pindl?link=${text}`)
Dani.sendMessage(m.chat, { video: { url: anu.result }, caption: mess.success }, { quoted: m })
}
break           
case 'mediafire': {
if (!args[0]) return m.reply(`Example : \n${prefix + command} <url>`)
if (!isUrl(args[0])) return m.reply("Hanya Url!")
m.reply(mess.wait)
try {
let fmedi = await mediafire(args[0])
teks = `❏ *M E D I A F I R E* ❏

❏ *Name* : ${fmedi[0].name}
❏ *MimeType* : application/${fmedi[0].mime}
❏ *Size* :  ${fmedi[0].size}
❏ *Download Url* : ${fmedi[0].link}

_Media Sedang Dikirim Silahkan Menunggu Beberapa Saat_`
Dani.sendText(m.chat, teks, m)
Dani.sendMessage(m.chat, {document:{url:fmedi[0].link}, mimetype:fmedi[0].mime, fileName:fmedi[0].name}, {quoted:m})
} catch(err) {
m.reply(String(err))
}
}
break
case 'solidfiles': {
if (!q) throw mess.urll                
if (!isUrl(q)) throw mess.urll
if (!text.includes('www.solidfiles.com')) throw mess.falseurl
m.reply(mess.wait)
let anu = await fetchJson(`https://api.zacros.my.id/downloader/sfiledl?link=${text}`)
teks = `❏ *S O L I D F I L E S* ❏

❏ *Title* : ${anu.title}
❏ *Size* : ${anu.size}
❏ *Download Url* : ${anu.url}

_Media Sedang Dikirim Silahkan Menunggu Beberapa Saat_`
Dani.sendText(m.chat, teks, m)
Dani.sendMessage(m.chat, { document:{ url: anu.url }, mimetype: anu.title, fileName: anu.title }, {quoted:m})
}
break
case 'gitclone':
let regx = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!args[0]) return m.reply('Linknya?')
if (!regx.test(args[0])) return m.reply('Linknya salah')
let [, user, repo] = args[0].match(regx) || []
repos = repo.replace(/.git$/, '')
let hasdl = `https://api.github.com/repos/${user}/${repos}/zipball`
let namafile = (await fetch(hasdl, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
Dani.sendFile(m.chat, hasdl, namafile, m)
break
case 'umma': case 'ummadl': {           
if (!text) throw mess.urll
let { umma } = require('./lib) scraper')
let anu = await umma(isUrl(text)[0])
if (anu.type == 'video') {
let buttons = [
{buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '♫ Audio'}, type: 1},
{buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '► Video'}, type: 1}
]
let buttonMessage = {
image: { url: anu.author.profilePic },
caption: `❏ *U M M A D O W L O A D*

❏ *Title* : ${anu.title}
❏ *Author* : ${anu.author.name}
❏ *Like* : ${anu.like}
❏ *Caption* : ${anu.caption}
❏ *Url* : ${anu.media[0]}

_Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas_
`,
footer: `Made With 🤍 Dani | Copyright 2022`,
buttons,
headerType: 4
}
Dani.sendMessage(m.chat, buttonMessage, { quoted: m })
} else if (anu.type == 'image') {
anu.media.map(async (url) => {
Dani.sendMessage(m.chat, { image: { url }, caption: `*[UMMA DOWNLOAD]*\n❏ *Title* : ${anu.title}\n❏ *Author* : ${anu.author.name}\n❏ *Like* : ${anu.like}\n❏ *Caption* : ${anu.caption}` }, { quoted: m })
})
}
}
break
case 'ringtone': {
if (!text) throw `Example : ${prefix + command} black rover`
let { ringtone } = require('./lib/scraper')
let anu = await ringtone(text)
let result = anu[Math.floor(Math.random() * anu.length)]
Dani.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
}
break
case 'iqra': {
oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
if (!text) throw oh
yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
Dani.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf`}, {quoted:m}).catch ((err) => m.reply(oh))
}
break
case 'juzamma': {
if (args[0] === 'pdf') {
m.reply(mess.wait)
Dani.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
} else if (args[0] === 'docx') {
m.reply(mess.wait)
Dani.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
} else if (args[0] === 'pptx') {
m.reply(mess.wait)
Dani.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
} else if (args[0] === 'xlsx') {
m.reply(mess.wait)
Dani.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
} else {
m.reply(`Mau format apa ? Example : ${prefix + command} pdf
Format yang tersedia : pdf, docx, pptx, xlsx`)
}
}
break
case 'hadits': case 'hadis': case 'hadist': {
if (!args[0]) throw `Contoh:
${prefix + command} bukhari 1
${prefix + command} abu-daud 1

Pilihan tersedia:
abu-daud
1 - 4590
ahmad
1 - 26363
bukhari
1 - 7008
darimi
1 - 3367
tirmidzi
1 - 3891
ibnu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`
if (!args[1]) throw `Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`
try {
let res = await fetchJson(`https://fatiharridho.herokuapp.com/api/islamic/hadits?list=${args[0]}`)
let { number, arab, id } = res.result.find(v => v.number == args[1])
m.reply(`No. ${number}

${arab}

${id}`)
} catch (e) {
m.reply(`Hadis tidak ditemukan !`)
}
}
break
case 'alquran': {
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
m.reply(txt)
Dani.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tafsirsurah': {
if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
m.reply(txt)
}
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
m.reply(mess.wait)
let media = await Dani.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
Dani.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
m.reply(e)
}
break
case 'setcmd': {
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `Untuk Command Apa?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
m.reply(`Done!`)
}
break
case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `Tidak ada hash`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
delete global.db.data.sticker[hash]
m.reply(`Done!`)
}
break
case 'listcmd': {
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
Dani.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
case 'lockcmd': {
if (!isCreator) throw mess.owner
if (!m.quoted) throw 'Reply Pesan!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
global.db.data.sticker[hash].locked = !/^un/i.test(command)
m.reply('Done!')
}
break
case 'addmsg': {
if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
if (!text) throw `Example : ${prefix + command} nama file`
let msgs = global.db.data.database
if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'

Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
case 'getmsg': {
if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
Dani.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break
case 'listmsg': {
let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
m.reply(teks)
}
break
case 'delmsg': case 'deletemsg': {
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
delete msgs[text.toLowerCase()]
m.reply(`Berhasil menghapus '${text}' dari list pesan`)
}
break
case 'anonymous': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
Dani.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await Dani.getName(m.sender)} Welcome To Anonymous Chat\n\nKlik Button Dibawah Ini Untuk Mencari Partner\`\`\``, `Made With 🤍 Dani | Copyright 2022`, m)
}
break
case 'keluar': case 'leave': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner \`\`\``)
throw false
}
m.reply('Ok')
let other = room.other(m.sender)
if (other) await Dani.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
delete this.anonymous[room.id]
if (command === 'leave') break
}
case 'mulai': case 'start': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `\`\`\`Kamu Masih Berada Di dalam Sesi Anonymous, Tekan Button Dibawah Ini Untuk Menghentikan Sesi Anonymous Anda\`\`\``, `Made With 🤍 Dani | Copyright 2022`, m)
throw false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
let buttons = [
{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await Dani.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, `Made With 🤍 Dani | Copyright 2022`, m)
room.b = m.sender
room.state = 'CHATTING'
await Dani.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, `Made With 🤍 Dani | Copyright 2022`, m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, `Made With 🤍 Dani | Copyright 2022`, m)
}
break
}
case 'next': case 'lanjut': {
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `\`\`\`Kamu Sedang Tidak Berada Di Sesi Anonymous, Tekan Button Untuk Mencari Partner\`\`\``)
throw false
}
let other = romeo.other(m.sender)
if (other) await Dani.sendText(other, `\`\`\`Partner Telah Meninggalkan Sesi Anonymous\`\`\``, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
let buttons = [
{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await Dani.sendButtonText(room.a, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, `Made With 🤍 Dani | Copyright 2022`, m)
room.b = m.sender
room.state = 'CHATTING'
await Dani.sendButtonText(room.b, buttons, `\`\`\`Berhasil Menemukan Partner, sekarang kamu dapat mengirim pesan\`\`\``, `Made With 🤍 Dani | Copyright 2022`, m)
} else {
let id = + new Date
this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
return [this.a, this.b].includes(who)
},
other: function (who = '') {
return who === this.a ? this.b : who === this.b ? this.a : ''
},
}
let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `\`\`\`Mohon Tunggu Sedang Mencari Partner\`\`\``, `Made With 🤍 Dani | Copyright 2022`, m)
}
break
}
case 'sendprofile': case 'sendcontact':{
addCountCmd(`#${command.slice(0)}`, sender, _cmd)  
if (m.isGroup) return reply('This Features Cannot Be Use in Group!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'START' }, type: 1 }
]
await Dani.sendButtonText(m.chat, buttons, `_You Are Not In Anonymous Session, Press The Button To Find A Partner_`)
throw false
}
let profile = await Dani.profilePictureUrl(room.b)
let status = await Dani.fetchStatus(room.b)
let msg = await Dani.sendImage(room.a, profile, `Name : ${await Dani.getName(room.b)}\nBio : ${status.status}\nUser : @${room.b.split("@")[0]}`, m, { mentions: [room.b] })
Dani.sendContact(room.a, [room.b.split("@")[0]], msg)
}
break
case 'public': {
if (!isCreator) throw mess.owner
Dani.public = true
m.reply('Sukse Change To Public Usage')
}
break
case 'self': {
if (!isCreator) throw mess.owner
Dani.public = false
m.reply('Sukses Change To Self Usage')
}
break
case 'ping': case 'botstatus': case 'statusbot': {
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
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

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
case 'speedtest': {
m.reply('Testing Speed...')
let cp = require('child_process')
let { promisify } = require('util')
let exec = promisify(cp.exec).bind(cp)
let o
try {
o = await exec('python speed.py')
} catch (e) {
o = e
} finally {
let { stdout, stderr } = o
if (stdout.trim()) m.reply(stdout)
if (stderr.trim()) m.reply(stderr)
}
}
break
case 'owner': case 'creator': {
Dani.sendContact(m.chat, global.owner, m)
}
break
case 'setmenu': {
if (!isCreator) throw mess.owner
let setbot = db.data.settings[botNumber]
if (args[0] === 'templateImage'){
setbot.templateImage = true
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateLocation = false
m.reply(mess.success)
} else if (args[0] === 'templateVideo'){
setbot.templateImage = false
setbot.templateVideo = true
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateLocation = false
m.reply(mess.success)
} else if (args[0] === 'templateGif'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = true
setbot.templateMsg = false
setbot.templateLocation = false
m.reply(mess.success)
} else if (args[0] === 'templateMessage'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = true
setbot.templateLocation = false
m.reply(mess.success)
} else if (args[0] === 'templateLocation'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
setbot.templateLocation = true
m.reply(mess.success)
} else {
let sections = [
{
title: "CHANGE MENU BOT",
rows: [
{title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
{title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
{title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
{title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`},
{title: "Template Location", rowId: `setmenu templateLocation`, description: `Change menu bot to Template Location`}
]
},
]
Dani.sendListMsg(m.chat, `Please select the menu you want to change!`, `Made With 🤍 Dani | Copyright 2022`, `Hello Owner !`, `Click Here`, sections, m)
}
}
break
case 'menu': case 'help': case 'allmenu': {
let group = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let chat = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let cBandwidth = await checkBandwidth()
anu = `╔═════════════════❍
║┏━━⊱「  *AHMAD DANI*  」
║┃
║┃ ⫹⫺ Your Name : ${pushname}
║┃ ⫹⫺ Library : Baileys-Md
║┃ ⫹⫺ Fitur : -
║┃ ⫹⫺ Upload : ${cBandwidth.upload}
║┃ ⫹⫺ Download : ${cBandwidth.download}
║┃ ⫹⫺ Runtime : ${runtime(process.uptime())}
║┃ ⫹⫺ Total Hit : ${jumlahcmd}
║┃ ⫹⫺ Today Hit : ${jumlahharian}
║┃ ⫹⫺ Total User : ${jumlahUser}
║┃ ⫹⫺ Total Privet Chat : ${chat.length} Group
║┃ ⫹⫺ Total Group Chat : ${group.length} Chat
║┃ ⫹⫺ Date :  ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
║┃ ⫹⫺ Clock : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')}
║┃
║┣━━⊱「  *DOWNLOAD MENU*  」
║┃
║┣❏ ${prefix}tiktok 
║┣❏ ${prefix}tiktokaudio 
║┣❏ ${prefix}igdl 
║┣❏ ${prefix}igstory 
║┣❏ ${prefix}gitclone 
║┣❏ ${prefix}twitter 
║┣❏ ${prefix}twitteraudio 
║┣❏ ${prefix}fbdl 
║┣❏ ${prefix}pinterestdl 
║┣❏ ${prefix}ytmp3 
║┣❏ ${prefix}ytmp4 
║┣❏ ${prefix}getmusic 
║┣❏ ${prefix}getvideo 
║┣❏ ${prefix}umma 
║┣❏ ${prefix}soundcloud 
║┣❏ ${prefix}mediafire
║┣❏ ${prefix}solidfiles
║┃
║┣━━⊱「  *SEARCH MENU*  」
║┃
║┣❏ ${prefix}wikimedia
║┣❏ ${prefix}wallpaper
║┣❏ ${prefix}alphacoders
║┣❏ ${prefix}pinterest
║┣❏ ${prefix}yts
║┣❏ ${prefix}play
║┣❏ ${prefix}google
║┣❏ ${prefix}gimage
║┣❏ ${prefix}lirik
║┃
║┣━━⊱「  *RANDOM TEXT*  」
║┃
║┣❏ ${prefix}quotes
║┣❏ ${prefix}quotesanime
║┣❏ ${prefix}quotesislamic
║┣❏ ${prefix}quotespubg
║┣❏ ${prefix}pantun
║┣❏ ${prefix}puisi
║┣❏ ${prefix}faktaunik
║┣❏ ${prefix}katabijak
║┣❏ ${prefix}katagalau
║┣❏ ${prefix}katailham
║┣❏ ${prefix}katahacker
║┣❏ ${prefix}katasenja
║┣❏ ${prefix}katabucin
║┣❏ ${prefix}katacinta
║┣❏ ${prefix}katasindiran
║┣❏ ${prefix}dare
║┣❏ ${prefix}truth
║┣❏ ${prefix}motivasi
║┣❏ ${prefix}fml
║┣❏ ${prefix}nickff
║┃
║┣━━⊱「  *ENTERTAINMENT MENU*  」
║┃
║┣❏ ${prefix}delttt
║┣❏ ${prefix}tictactoe
║┣❏ ${prefix}family100
║┣❏ ${prefix}tebaklagu
║┣❏ ${prefix}tebakgambar
║┣❏ ${prefix}tebakkata
║┣❏ ${prefix}tebakkalimat
║┣❏ ${prefix}tabaklirik
║┣❏ ${prefix}tebakkabupaten
║┣❏ ${prefix}tebakanime
║┣❏ ${prefix}tebakwaifu
║┣❏ ${prefix}tebaktebakan
║┣❏ ${prefix}tebakbendera
║┣❏ ${prefix}tebakkimia
║┣❏ ${prefix}tebakaplikasi
║┣❏ ${prefix}tebakjenaka
║┣❏ ${prefix}caklontong
║┣❏ ${prefix}asahotak
║┣❏ ${prefix}susunkata
║┣❏ ${prefix}tekateki
║┣❏ ${prefix}math [mode]
║┣❏ ${prefix}suitpvp [@tag]
║┃
║┣━━⊱「  *PRIMBON MENU*  」
║┃
║┣❏ ${prefix}nomorhoki
║┣❏ ${prefix}artimimpi
║┣❏ ${prefix}artinama
║┣❏ ${prefix}ramaljodoh
║┣❏ ${prefix}ramaljodohbali
║┣❏ ${prefix}suamiistri
║┣❏ ${prefix}ramalcinta
║┣❏ ${prefix}cocoknama
║┣❏ ${prefix}pasangan
║┣❏ ${prefix}jadiannikah
║┣❏ ${prefix}sifatusaha
║┣❏ ${prefix}rezeki
║┣❏ ${prefix}pekerjaan
║┣❏ ${prefix}nasib
║┣❏ ${prefix}penyakit
║┣❏ ${prefix}tarot
║┣❏ ${prefix}fengshui
║┣❏ ${prefix}haribaik
║┣❏ ${prefix}harisangar
║┣❏ ${prefix}harisial
║┣❏ ${prefix}nagahari
║┣❏ ${prefix}arahrezeki
║┣❏ ${prefix}peruntungan
║┣❏ ${prefix}weton
║┣❏ ${prefix}karakter
║┣❏ ${prefix}keberuntungan
║┣❏ ${prefix}memancing
║┣❏ ${prefix}masasubur
║┣❏ ${prefix}zodiak
║┣❏ ${prefix}shio
║┃
║┣━━⊱「  *CONVERTER MENU*  」
║┃
║┣❏ ${prefix}toimage
║┣❏ ${prefix}removebg
║┣❏ ${prefix}sticker
║┣❏ ${prefix}stickerwm
║┣❏ ${prefix}take
║┣❏ ${prefix}emojimix
║┣❏ ${prefix}tovideo
║┣❏ ${prefix}togif
║┣❏ ${prefix}tourl
║┣❏ ${prefix}tovn
║┣❏ ${prefix}tomp3
║┣❏ ${prefix}toaudio
║┣❏ ${prefix}ebinary
║┣❏ ${prefix}dbinary
║┣❏ ${prefix}styletext
║┣❏ ${prefix}smeme
║┃
║┣━━⊱「  *ANONYMOUS MENU*  」
║┃
║┣❏ ${prefix}anonymous
║┣❏ ${prefix}start
║┣❏ ${prefix}next
║┣❏ ${prefix}keluar
║┣❏ ${prefix}sendcontact
║┃
║┣━━⊱「  *MAIN MENU*  」
║┃
║┣❏ ${prefix}ping
║┣❏ ${prefix}runtime
║┣❏ ${prefix}owner
║┣❏ ${prefix}menu
║┣❏ ${prefix}get
║┣❏ ${prefix}getpic
║┣❏ ${prefix}getname
║┣❏ ${prefix}infochat
║┣❏ ${prefix}quoted
║┣❏ ${prefix}listpc
║┣❏ ${prefix}listgc
║┣❏ ${prefix}listonline
║┣❏ ${prefix}speedtest
║┃
║┣━━⊱「  *DATABASE MENU*  」
║┃
║┣❏ ${prefix}setcmd
║┣❏ ${prefix}listcmd
║┣❏ ${prefix}delcmd
║┣❏ ${prefix}lockcmd
║┣❏ ${prefix}addmsg
║┣❏ ${prefix}listmsg
║┣❏ ${prefix}getmsg
║┣❏ ${prefix}delmsg
║┃
║┣━━⊱「  *VOICE CHARGER*  」
║┃
║┣❏ ${prefix}bass
║┣❏ ${prefix}blown
║┣❏ ${prefix}deep
║┣❏ ${prefix}earrape
║┣❏ ${prefix}fast
║┣❏ ${prefix}fat
║┣❏ ${prefix}nightcore
║┣❏ ${prefix}reverse
║┣❏ ${prefix}robot
║┣❏ ${prefix}slow
║┣❏ ${prefix}tupai
║┃
║┣━━⊱「  *OWNER MENU*  」
║┃
║┣❏ >
║┣❏ =>
║┣❏ $
║┣❏ ${prefix}getcase
║┣❏ ${prefix}mode [option]
║┣❏ ${prefix}self
║┣❏ ${prefix}creategc
║┣❏ ${prefix}public
║┣❏ ${prefix}react [emoji]
║┣❏ ${prefix}chat [option]
║┣❏ ${prefix}join [link]
║┣❏ ${prefix}leave
║┣❏ ${prefix}block @user
║┣❏ ${prefix}unblock @user
║┣❏ ${prefix}bcgc [text]
║┣❏ ${prefix}bcall [text]
║┣❏ ${prefix}setppbot [image]
║┣❏ ${prefix}setexif
║┣❏ ${prefix}setmenu [option]
║┣❏ ${prefix}anticall [on/off]
║┃
║┗━━⊱「  *AHMAD DANI*  」
╚═════════════════❍
`
let btn = [{
urlButton: {
displayText: 'SOURCE CODE',
url: 'https://github.com/Fxc08/DaniBotz'
}
}, {
callButton: {
displayText: 'DEVELOPER',
phoneNumber: '+62 857-1462-7920'
}
}, {
quickReplyButton: {
displayText: '📈 PING',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: '👑 OWNER',
id: 'owner'
}  
}, {
quickReplyButton: {
displayText: '📑 SCRIPT',
id: 'sc'
}
}]
 let setbot = db.data.settings[botNumber]
if (setbot.templateImage) {
Dani.send5ButImg(m.chat, anu, `Made With 🤍 Dani | Copyright 2022`, global.image, btn, global.image)
} else if (setbot.templateGif) {
Dani.send5ButGif(m.chat, anu, `Made With 🤍 Dani | Copyright 2022`, global.video, btn, global.video)
} else if (setbot.templateVid) {
Dani.send5ButVid(m.chat, anu, `Made With 🤍 Dani | Copyright 2022`, global.video, btn, global.video)
} else if (setbot.templateMsg) {
Dani.send5ButMsg(m.chat, anu, `Made With 🤍 Dani | Copyright 2022`, btn)
} else if (setbot.templateLocation) {
Dani.send5ButLoc(m.chat, anu, `Made With 🤍 Dani | Copyright 2022`, global.image, btn)
}
}
break
default:
if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
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
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}

if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
Dani.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
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
