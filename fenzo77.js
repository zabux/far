/*
 - Create By FenZo||77+
 - Contact Me on https://wa.me/+6281385062956
 - Base Dika 
 - Jangan Di Ubh Author Dek awas aj
 - New Update Antivirus
 */
 
 


process.on('uncaughtException', console.error) //Safe Log Error
//=====================
require("./config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const zmans = require("@adiwajshing/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
const path = require('path')
const os = require('os')
const { TiktokDownloader } = require('./lib/tiktokdl') 
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const hxz = require('./lib/hxz-api')
const fax = require('xfarr-api')
const bdr = require('rumus-bdr')
const yogipw = require("tod-api")
const { color, bgcolor } = require('./lib/color')
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const Jimp = require('jimp')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance, isGame, gameAdd, givegame, cekGLimit } = require('./lib/limit.js');
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, ostime, parseMention, getRandom } = require('./lib/myfunc')
const { aiovideodl } = require('./lib/scraper.js')
const cheerio = require ("cheerio");
const toMs = require('ms');
const textpro = require('./lib/textpro')
const { detikNews } = require('./lib/detik')
const { wikiSearch } = require('./lib/wiki.js');
const { Gempa } = require("./lib/gempa.js");
const ms = require('ms')
 let { covid } = require('./lib/covid.js') 
const { jadwaltv }= require('./lib/jadwaltv');
const { addCmd, addCmds } = require("./src/totalcmd.js")
const { 
  yta, 
  ytv, 
  searchResult 
 } = require('./lib/ytdl')
// Database Rpg
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'))

// Read Database
global.db = JSON.parse(fs.readFileSync('./src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}

gconly = false
pconly = false
let lolkey = global.lolkey
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
//DATABASE
let pendaftar = JSON.parse(fs.readFileSync('./storage/user/user.json'))
let balance = JSON.parse(fs.readFileSync('./database/balance.json'));
let ssewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
let ban = JSON.parse(fs.readFileSync('./database/ban.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'))
let _leveling = JSON.parse(fs.readFileSync('./database/leveling.json'))
let _level = JSON.parse(fs.readFileSync('./database/level.json'))
let limit = JSON.parse(fs.readFileSync('./database/limit.json'));
let _update = JSON.parse(fs.readFileSync('./database/update.json'))
let _sewa = require("./lib/sewa");
const sewa = JSON.parse(fs.readFileSync('./database/sewa.json'));
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))


// UCAPAN WAKTU ( FenZo||77+)
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const ucap = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
var d = new Date(new Date + 3600000)
const qris = 'https://telegra.ph/file/1e52aa0ba42c5c1efe9b3.jpg'
const faxc = 'https://telegra.ph/file/7ebc6b629a069790e811b.jpg'



// TANGGAL ( FenZo||77+ )
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)

module.exports = mans = async (mans, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
const isCmd = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\\\©^]/.test(body)
const prefix = isCmd ? body[0] : ''
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLowerCase() : null
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await mans.decodeJid(mans.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)

// Group
const groupMetadata = m.isGroup ? await mans.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isUser = pendaftar.includes(m.sender)
//const lakal = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ''
// Other
const isBan = banUser.includes(m.sender)
const isPrem = prem.includes(m.sender)
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const GcRvk = m.isGroup ? gcrevoke.includes(from) : false
const isLeveling = m.isGroup ? _leveling.includes(from) : false
const isAutoStick = _autostick.includes(from)
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const isSewa = _sewa.checkSewaGroup(from, sewa)
const AntiDelete = m.isGroup ? ntidel.includes(from) : false
autoreadsw = true
// Quoted
const content = JSON.stringify(m.message)
const q = args.join(' ')
const isImage = (m.type === 'imageMessage')
        const isVideo = (m.type === 'videoMessage')
        const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
		const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
        const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')

//Sewa
_sewa.expiredCheck(mans, sewa)
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: 'ī.am/𝙵𝚊𝚛𝚍𝚊𝚗ꪶ͢𝚍𝚎𝚟ꫂ⁩',
jpegThumbnail: log0
}
}
}
async function replyDeface(teks) {
mamans = teks
mans.sendMessage(from, {text:mamans,contextInfo:{externalAdReply:{
title: `Simple Whatsapp Bot`,
body: "Support By xnxx.com",
thumbnail: log0,
mediaType:1,
mediaUrl: global.linkgrupss,
sourceUrl: global.linkgrupss
}}}, {quoted: m})
}
const freply = (teks) => {
mans.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply":{"title": `Selamat ${ucap} ${pushname}`,"showAdAttribution": true,"body": `ī.am/𝙵𝚊𝚛𝚍𝚊𝚗ꪶ͢𝚍𝚎𝚟ꫂ⁩`,"previewType": "PHOTO","thumbnailUrl": `https://telegra.ph/file/a0e4971faf7d64796efdf.jpg`,"thumbnail": log0,"sourceUrl": `https://wa.me/6281523940672?text=assalamualaikum`}}}, { quoted: m})
        }
if (isAutoSticker) {
if (/image/.test(mime) && !/webp/.test(mime)) {
let mediac = await quoted.download()
await mans.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
console.log(`Detec Autosticker`)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return
let mediac = await quoted.download()
await mans.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
}
}
if (isAutoStick) {
if (/image/.test(mime) && !/webp/.test(mime)) {
let mediac = await quoted.download()
await mans.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
console.log(`Detec Autosticker`)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return
let mediac = await quoted.download()
await mans.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
}
}
function randomNomor(angka){
return Math.floor(Math.random() * angka) + 1
}           
const totalhit = JSON.parse(fs.readFileSync('./src/totalcmd.json'))
if (prefix && command) addCmd();
if (m.message) {
addBalance(m.sender, randomNomor(12), balance)
//console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mCMD\x1b[1;37m]', time, color(`${prefix + command} [${args.length}]`, 'cyan'), 'from', color(m.pushName), 'in', color(groupName, 'orange'))
console.log(color(`≻ Command : ${prefix + command} [${args.length}]\n`), color(`≻ Time : ${time}`, `red`), color(`\n≻ Pushname : ${pushname}`, `orange`), color(`\n≻ Nomor : ${m.sender}`, `red`), color(`\n≻ Group : ${groupName}\n----------------------------------`, `orange`))
}

if (m.sender.startsWith('212')) return mans.updateBlockStatus(m.sender, 'block')
const fakey = (teks) => { // Biar Bjsa Smeuaaaaa !!!!!3
mans.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `Join Bot Grup!!`,"body": `Join Bot's Official GC`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./media/fenzo.jpg`),"sourceUrl": "https://chat.whatsapp.com/HZi39UEUADa4dmP3w7JGgk"}}}, { quoted: m})
}
if (gconly && !itsMe && !isCreator && from.endsWith('@s.whatsapp.net')) return replyDeface(`Fitur Ini telah Di Stel Oleh Owner Jika Ingin Menggunakan Fitur Silahkan Join Ke group`)
if (pconly && !itsMe && !isCreator && from.endsWith('@g.us')) return
		
	     
if (isCmd && !isUser){
pendaftar.push(m.sender)
fs.writeFileSync('./storage/user/user.json', JSON.stringify(pendaftar))
        } 
        // Anti Delete
if (m.message && m.message.protocolMessage && m.message.protocolMessage.type == 0) {
if (!AntiDelete) return
let key = m.message.protocolMessage.key
let msg = await mans.serializeM(await store.loadMessage(key.remoteJid, key.id))
let teks = `   「 Anti Delete Message 」
 User : ${pushname}
 Waktu : ${time}       
`
mans.sendText(m.chat, teks, msg, { mentions: [m.sender] })
await mans.relayMessage(m.chat, msg.message, { messageId: msg.id })
}

        // Leveling Punya Chika 🗿🗿 Di Copas Oleh Fardan
            const getLevelingXp = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].xp
               }
            }

            const getLevelingLevel = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].level
                }
            }

            const getLevelingId = (userId) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                return _level[position].jid
                }
             }

            const addLevelingXp = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].xp += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingLevel = (userId, amount) => {
            let position = false
            Object.keys(_level).forEach((i) => {
                if (_level[i].jid === userId) {
                    position = i
                }
            })
            if (position !== false) {
                _level[position].level += amount
                fs.writeFileSync('./database/level.json', JSON.stringify(_level))
                }
            }

            const addLevelingId = (userId) => {
            const obj = {jid: userId, xp: 1, level: 1}
            _level.push(obj)
            fs.writeFileSync('./database/level.json', JSON.stringify(_level))
            }

            const getUserRank = (userId) => {
    let position = null
    let found = false
    _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
    Object.keys(_level).forEach((i) => {
        if (_level[i].id === userId) {
            position = i
            found = true
        }
    })
    if (found === false && position === null) {
        const obj = { id: userId, xp: 0, level: 1 }
        _level.push(obj)
        fs.writeFileSync('./database/level.json', JSON.stringify(_level))
        return 99
    } else {
        return position + 1
    }
}

const xpGain = new Set()

const isGained = (userId) => {
    return !!xpGain.has(userId)
}

const addCooldown = (userId) => {
    xpGain.add(userId)
    setTimeout(() => {
        return xpGain.delete(userId)
    }, 60000) // Each minute
}

var levelRole = getLevelingLevel(m.sender)
        var role = 'Copper V'
        if (levelRole <= 1) {
            role = 'Copper IV'
        } else if (levelRole <= 10) {
            role = 'Copper III'
        } else if (levelRole <= 15) {
            role = 'Copper II'
        } else if (levelRole <= 20) {
            role = 'Copper I'
        } else if (levelRole <= 25) {
            role = 'Silver V'
        } else if (levelRole <= 30) {
            role = 'Silver IV'
        } else if (levelRole <= 35) {
            role = 'Silver III'
        } else if (levelRole <= 40) {
            role = 'Silver II'
        } else if (levelRole <= 45) {
            role = 'Silver I'
        } else if (levelRole <= 50) {
            role = 'Gold V'
        } else if (levelRole <= 55) {
            role = 'Gold IV'
        } else if (levelRole <= 60) {
            role = 'Gold III'
        } else if (levelRole <= 65) {
            role = 'Gold II'
        } else if (levelRole <= 70) {
            role = 'Gold I'
        } else if (levelRole <= 75) {
            role = 'Platinum V'
        } else if (levelRole <= 80) {
            role = 'Platinum IV'
        } else if (levelRole <= 85) {
            role = 'Platinum III'
        } else if (levelRole <= 90) {
            role = 'Platinum II'
        } else if (levelRole <= 95) {
            role = 'Platinum I'
        } else if (levelRole < 100) {
            role = 'Exterminator'
        }

        var levelRoles = getLevelingLevel(m.sender)
        var roles = 'Cop V'
        if (levelRoles <= 1) {
            roles = 'Cop IV'
        } else if (levelRoles <= 10) {
            roles = 'Cop III'
        } else if (levelRoles <= 15) {
            roles = 'Cop II'
        } else if (levelRoles <= 20) {
            roles = 'Cop I'
        } else if (levelRoles <= 25) {
            roles = 'Sil V'
        } else if (levelRoles <= 30) {
            roles = 'Sil IV'
        } else if (levelRoles <= 35) {
            roles = 'Sil III'
        } else if (levelRoles <= 40) {
            roles = 'Sil II'
        } else if (levelRoles <= 45) {
            roles = 'Sil I'
        } else if (levelRoles <= 50) {
            roles = 'Gol V'
        } else if (levelRoles <= 55) {
            roles = 'Gol IV'
        } else if (levelRoles <= 60) {
            roles = 'Gol III'
        } else if (levelRoles <= 65) {
            roles = 'Gol II'
        } else if (levelRoles <= 70) {
            roles = 'Gol I'
        } else if (levelRoles <= 75) {
            roles = 'Plat V'
        } else if (levelRoles <= 80) {
            roles = 'Plat IV'
        } else if (levelRoles <= 85) {
            roles = 'Plat III'
        } else if (levelRoles <= 90) {
            roles = 'Plat II'
        } else if (levelRoles <= 95) {
            roles = 'Plati I'
        } else if (levelRoles < 100) {
            roles = 'Exter'
        }
        //function levelingnya
                        if (m.isGroup && isLeveling && isUser && mans.public) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        addCooldown(m.sender)
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 200
                                        const requiredXp = 200 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
teks = `*──「 LEVEL UP 」──*\n\n❑ *Name*:  @${m.sender.split("@")[0]}\n❑ *XP*: ${getLevelingXp(m.sender)}\n❑ *Level*: ${getLevel} -> ${getLevelingLevel(m.sender)}\n❑ *Role*: ${role} \n\nCongrats!! 🎉`
mans.sendMessage(m.chat, {text: teks, mentions:[m.sender]}, {quoted:m})
}
                        } catch (err) {
                                console.error(err)
                        }
                }
if (prefix && command) {
                                const currentLevel = getLevelingLevel(m.sender)
                                const checkId = getLevelingId(m.sender)
                                try {
                                        
                                        if (currentLevel === undefined && checkId === undefined) addLevelingId(m.sender)
                                        const amountXp = Math.floor(Math.random() * 10) + 30
                                        const requiredXp = 30 * (Math.pow(2, currentLevel) - 1)
                                        const getLevel = getLevelingLevel(m.sender)
                                        addLevelingXp(m.sender, amountXp)
                                        if (requiredXp <= getLevelingXp(m.sender)) {
                                        addLevelingLevel(m.sender, 1)
                                        }
                                        
                        } catch (err) {
                                console.error(err)
                        }
                }
let reSize = async(buffer, ukur1, ukur2) => {
return new Promise(async(resolve, reject) => {
var baper = await Jimp.read(buffer);
var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
resolve(ab)
})
}
if (command) {
await mans.sendPresenceUpdate('composing', m.chat)
mans.sendReadReceipt(from, m.sender, [m.key.id])
}
	
       /* if (!isCmd && m.isGroup && isAlreadyResponList(from, chats, db_respon_list)) {
            var get_data_respon = getDataResponList(from, chats, db_respon_list)
            if (get_data_respon.isImage === false) {
                fadly.sendMessage(from, sendResponList(from, chats, db_respon_list), MessageType.text, {
                    quoted: m
                })
            } else {
                mans.sendMessage(from, await getBuffer(get_data_respon.image_url), MessageType.image, {
                    quoted: m,
                    caption: get_data_respon.response
                })
            }
        }*/
const hariRaya = new Date('7 9, 2022 00:00:00')
			const sekarang = new Date().getTime();
			const Selisih = hariRaya - sekarang;
			const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
			const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
			const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
			const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
			const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
			
async function replyPremium(teks) {
const buttonsDefault = [
{ urlButton: { displayText: `MyOwner`, url : `` } },
{ quickReplyButton: { displayText : `Buy Premium`, id : `buypremium` } }
]                 
const buttonMessage = { 
text: teks, 
footer: "Fardan",
templateButtons: buttonsDefault, 
image: {url: log0}                                   
}
                       return mans.sendMessage(from, buttonMessage)
                }
                
async function hitungmundur(bulan, tanggal) { //By Fax Ngk Usah Di Ubah
          let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
          let now = Date.now();
          let distance = from - now;
          let days = Math.floor(distance / (1000 * 60 * 60 * 24));
          let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((distance % (1000 * 60)) / 1000);
          return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
        }
        
global.ostime = function() { 
function format (seconds) {
function pad(s) {
return (s < 10 ? '0' : '') + s
}
var hours = Math.floor(seconds / (60 * 60))
var minutes = Math.floor(seconds % (60 * 60) / 60)
var seconds = Math.floor(seconds % 60)
return `${pad(hours)} Jam, ${pad(minutes)} Menit, ${pad(seconds)} Detik.`
}
return format(os.uptime())
}
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.error(err)
}

const sendOrder = async(jid, text, orid, img, itcount, title, sellers, tokens, ammount) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
 "orderMessage": {
"orderId": orid, // Ganti Idnya
"thumbnail": img, // Ganti Imagenya
"itemCount": itcount, // Ganti Item Countnya
"status": "INQUIRY", // Jangan Diganti
"surface": "CATALOG", // Jangan Diganti
"orderTitle": title, // Ganti Titlenya
"message": text, // Ganti Messagenya
"sellerJid": sellers, // Ganti sellernya
"token": tokens, // Ganti tokenya
"totalAmount1000": ammount, // Ganti Total Amountnya
"totalCurrencyCode": "IDR", // Terserah
}
}), { userJid: jid })
mans.relayMessage(jid, order.message, { messageId: order.key.id})
}

//function rpg
const { 
addInventoriDarah, 
cekDuluJoinAdaApaKagaDiJson, 
addDarah, 
kurangDarah, 
getDarah 
}  = require('./storage/user/darah.js')
const { 
cekInventoryAdaAtauGak, 
addInventori,  
addBesi, 
addEmas, 
addEmerald,
addUmpan,
addPotion,
kurangBesi, 
kurangEmas, 
kurangEmerald, 
kurangUmpan,
kurangPotion,
getBesi, 
getEmas, 
getEmerald,
getUmpan,
getPotion
} = require('./storage/user/alat_tukar.js')
const { 
addInventoriMonay, 
cekDuluJoinAdaApaKagaMonaynyaDiJson, 
addMonay,
kurangMonay, 
getMonay 
} = require('./storage/user/monay.js')
const { 
addInventoriLimit, 
cekDuluJoinAdaApaKagaLimitnyaDiJson, 
addLimit, 
kurangLimit, 
getLimit 
} = require('./storage/user/limit.js')
const { 
cekDuluHasilBuruanNya, 
addInventoriBuruan, 
addIkan,
addAyam, 
addKelinci, 
addDomba, 
addSapi,
addGajah,
kurangIkan,
kurangAyam, 
kurangKelinci, 
kurangDomba, 
kurangSapi,
kurangGajah,
getIkan,
getAyam, 
getKelinci, 
getDomba,
getSapi,
getGajah
} = require('./storage/user/buruan.js')
let DarahAwal =  global.rpg.darahawal
const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
const isCekDarah = getDarah(m.sender)
const isUmpan = getUmpan(m.sender)
const isPotion = getPotion(m.sender)
const isIkan = getIkan(m.sender)
const isAyam = getAyam(m.sender)
const isKelinci = getKelinci(m.sender)
const isDomba = getDomba(m.sender)
const isSapi = getSapi(m.sender)
const isGajah = getGajah(m.sender)
const isMonay = getMonay(m.sender)
const isLimit = getLimit(m.sender)
const isBesi = getBesi(m.sender)
const isEmas = getEmas(m.sender)
const isEmerald = getEmerald(m.sender)
const isInventory = cekInventoryAdaAtauGak(m.sender)
const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
const ikan = ['🐟','🐠','🐡']   
   
   //Fax
let picaks = ['flaming','fluming','flarun','flasmurf']
let picak = picaks[Math.floor(Math.random() * picaks.length)]
// Rakyat
if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

//Add Hit Fax
global.hit = {}
if (isCmd) {
const data = await fetchJson('https://api.countapi.xyz/hit/FaxBot/visits')
let jumlahcmdd = `${data.value}`
const dataa = await fetchJson(`https://api.countapi.xyz/hit/FaxBot${moment.tz('Asia/Jakarta').format('DDMMYYYY')}/visits`)
let jumlahharian = `${dataa.value}`
}
 
// AFK
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
replyDeface(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
replyDeface(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

// Detect Group Invite
if (m.mtype === 'groupInviteMessage') {
teks = `Ketik .owner untuk bergabung ke group whatsapp anda`
sendOrder(m.chat, teks, "5123658817728409", fs.readFileSync('./media/image/fenzo.jpg'), 2022, "Momzy||77+ ~ Multi Device", "6283155687629@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}
/*const bodyyy = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
if (!isCmd && !m.isGroup && !m.key.fromMe) {
const simi = await fetchJson(`https://caliph.my.id/api/simi.php?text=${budy}`)
const sami = simi.result
await mans.sendMessage(from, {text:sami}, {quoted:m})
}*/

// AntiLink
if (AntiLink) {
linkgce = await mans.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
replyDeface(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return replyDeface(bvl)
if (m.key.fromMe) return replyDeface(bvl)
if (isCreator) return replyDeface(bvl)
kice = m.sender
await mans.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => replyDeface(jsonformat(res))).catch((err) => replyDeface(jsonformat(err)))
mans.sendMessage(from, {text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}

// Public & Self
if (!mans.public) {
if (!m.key.fromMe && isCreator) return
}

// write database every 1 minute
setInterval(() => {
fs.writeFileSync('./src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.users)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
for (let jid of user) global.db.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})


if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, namebot, m)
delete tebaklagu[m.sender.split('@')[0]]
} else replyDeface('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, namebot, m)
delete tebakgambar[m.sender.split('@')[0]]
} else replyDeface('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, namebot, m)
delete tebakkata[m.sender.split('@')[0]]
} else replyDeface('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, namebot, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else replyDeface('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, namebot, m)
delete tebakkalimat[m.sender.split('@')[0]]
} else replyDeface('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, namebot, m)
delete tebaklirik[m.sender.split('@')[0]]
} else replyDeface('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await mans.sendButtonText(m.chat, [{ buttonId: 'tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, namebot, m)
delete tebaktebakan[m.sender.split('@')[0]]
} else replyDeface('*Jawaban Salah!*')
}

if (('family100'+m.chat in _family100) && isCmd) {
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
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
mans.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
mans.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
mans.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) mans.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) mans.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) mans.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
mans.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
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
replyDeface(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) mans.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
replyDeface(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) mans.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
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
mans.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

  async function sendButtonLoc(jid, cap, fort, img, but = [], options = {}) {
    mans.sendMessage(jid, {
            caption: cap,
            location: {
                jpegThumbnail: img
            },
            buttons: but,
            footer: fort,
            mentions: parseMention(cap, fort)  
        },
        options
    )
}
 async function templateButtonLoc(jid, text = '', footer = '', img, but = [], options = {}) {
    mans.sendMessage(jid, {
        caption: text,
        location: {
            jpegThumbnail: img
        },
        templateButtons: but,
        footer: footer,
        options
    })
}
//cerpen 
async function cerpen (category) {
    return new Promise((resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "")
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    title: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
                    kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
                    lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}
// Math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await replyDeface(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else replyDeface('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// replyDeface(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
let hadippp = randomNomor(1000)
addBalance(m.sender, hadippp, balance)
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
replyDeface({
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
let str = `     「 Tictactoe Game 」
Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await mans.sendText(room.x, str, m, { mentions: parseMention(str) } )
await mans.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: mans.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, mans.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
mans.ev.emit('messages.upsert', msg)
}



// Fake Reply
//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0 //Gambarnye
},
"title": "SELF BOT", //Kasih namalu 
"description": "SELF BOT", 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": "MyMans",
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
}
//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: '🍂 broadcast Bot 🍂', //Kasih namalu
orderTitle: 'Fax',
thumbnail: log0, //Gambarnye
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const fakeGroup2 = {
  title: 'By Fax Nvs',
  body: 'ArdyBotzz By Fax Nvs',
  previewType: 'PHOTO',
  thumbnailUrl: '',
  thumbnail: log0,
  sourceUrl: 'https://chat.whatsapp.com/FcGBb1Ke7AqDxznA7fDuHV'
}

//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: 'Halo bang', 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title":"hallo bang",
"h": `Hmm`,
'seconds': '30', 
'caption': 'Halo bang',
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "6288213840883-1616169743@g.us",
"inviteCode": "mememteeeekkeke",
"groupName": "P", 
"caption": "Fax Nvs", 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":"FenZo||77+",
 "h": `Hmm`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': 'FenZo||77+',
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL

const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":"hallo bang",
"title": `Fardan Ganteng`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `62882000383955@s.whatsapp.net`, ...(from ? 
{ remoteJid: "6289643739077-1613049930@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "30",
"ptt": "true"
}
} 
}
l = 1
monospace = '```'
const levelMenu = getLevelingLevel(m.sender)
const xpMenu = getLevelingXp(m.sender)
const uangku = getBalance(m.sender, balance)
const reqXp  = 200 * (Math.pow(2, getLevelingLevel(m.sender)) - 1)
const jumlahUser = pendaftar.length
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
  
const listmn = `Hi ${pushname} 🤗 Selamat ${ucap} 👋

╭── 「 *BOT INFO* 」 ──
│
│❒͡  _*${namebot}*_ 
│❒͡ *OWNER* : _*Fax Nvs*_
│❒͡ *Contact My Owner*
│ *https://wa.me/6281523940672*
│❒͡ *Time: ${time}*
│❒͡ *STATUS* :「 Public 」
│❒͡ *Prefix :「 MULTI 」*
│❒͡ *Memperingati *
│❒͡ *${ultah}*
│❒͡ *Join Group Fax Nvs*
│ *Klik Link Dibawah:*
│❮ \`\`\`https://bit.ly/3yKQMzx\`\`\` ❯
│
╰── 「 *${namebot}* 」 ──

❉──────────────────❉  
*Name* : *${pushname}* 
*Your API* : *https://wa.me/${m.sender.split('@')[0]}*

*Your Progress*:
*Level : ${levelMenu}*
*Xp : ${xpMenu} \ ${reqXp}*
*Role : ${role}*
*Balance : $${uangku}*
❉──────────────────❉  

*── 「 BOT STATUS 」 ──*

 ❏ *${runtime(os.uptime())}*

 𒍮 *Auto-Regis User: ${jumlahUser}*


*── 「 ${namebot} 」 ──*


Catatan:
Perlakukan bot secara baik, dev akan bertindak tegas apabila user melanggar rules.
Bot ini terdapat anti-spam yang berupa cooldown command selama *5 detik* setiap kali pemakaian.`
tqtq = '6285803583481@s.whatsapp.net'
let dateIslamic = Intl.DateTimeFormat('id' + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
menu2 = `${monospace}${dateIslamic}

Hai ${pushname} , Selamat ${ucap} 👋

❑ INFORMASI BOT
OWNER : Fardan 
Contact My Owner
Mode : ONLY GROUP
wa.me/6281523940672
Bot Name : ${namebot}
Time: ${time}
Prefix :「 MULTI 」
Memperingati Idhul Adha
${ultah}
Partner: wa.me/6285171226069
Os-Time : ${runtime(os.uptime())}

❑ Informasi User
Name : ${pushname} 
Your API : https://wa.me/${m.sender.split('@')[0]}
Your Progress:
Level : ${levelMenu}
Xp : ${xpMenu} \ ${reqXp}
Role : ${role}
Balance : $${uangku}${monospace}

${require('./help/help.js').help(prefix, l, pushname)}`
const qtod = m.quoted? "true":"false"

// Case Nye Sini Ngab
switch(command) {
case 'runtime':
anj = `  *🌹『 INFORMASI 』🌹*

*⫹⫺ ${runtime(os.uptime())}*

`
replyDeface(anj)
break
//MENU
/*case 'tes':
let butRunn = [
        	{ urlButton: { displayText: `📝 From Group WhatsApp`, url : `https://chat.whatsapp.com/DhXoC9dA87V1zZyISwBEkF` } },
            { urlButton: { displayText: `☎️Contact Me`, url: `+62 815-2394-0672` } },
            { quickReplyButton: { displayText: `Contact Owner`, id: 'owner'} },
            { quickReplyButton: { displayText: `Profile`, id: 'profile'} }
        	]
        	mans.sendMessage(from, { document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx' }, caption: menu2, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: `Hai kak ${pushname}`, jpegThumbnail: fs.readFileSync('./media/fenzo.jpg'), footer: `❗dont spam and call bot`, templateButtons: butRunn }, { quoted: m })
        	break*/
        	case 'help':
        	case '?':
        	case 'menu':{
  const templateButtons = [
    {index: 1, urlButton: {displayText: '⭐ Star Baileys on GitHub!', url: 'https://www.whatsapp.com/otp/copy/https://github.com//fardan-Xwer'}},
    {index: 2, callButton: {displayText: 'Call me!', phoneNumber: '+62 815-2394-0672'}},
    {index: 3, quickReplyButton: {displayText: 'Tap to view Rules Bot', id: '.rules'}},
]

const templateMessage = {
    text: menu2,
    footer: 'Hello World 👋🏻',
    templateButtons: templateButtons
}
mans.sendMessage(from, templateMessage)
}
break
/*case '?':
case 'help':
case 'menu':{
addCmds(`.menu`)
try {
org = await mans.profilePictureUrl(m.sender, 'image')
} catch {
org = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
//*asw = await getBuffer(`https://fatiharridho.herokuapp.com/api/tools/reSize?url=${encodeURIComponent(org)}`)
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ templateMessage: { hydratedTemplate: { hydratedContentText: menu2, locationMessage: { jpegThumbnail: await reSize(org, 300,300)}, hydratedFooterText: `Note : Jika Ada Masalah Atau Bug Pada Bot Segera Lapor Owner Untuk Dilakukan Perbaikan, Jadilah User Yang Smart.`, hydratedButtons: [{ urlButton: { displayText: '🌏 From Group Bot', url: 'https://chat.whatsapp.com/Cb0HKfJRoAjDZFLEreXw36'} }, { quickReplyButton: { displayText: 'RULES BOT', id: '.rules', } }] } } }), { userJid: m.sender, quoted: m }); 
mans.relayMessage( m.chat, template.message, { messageId: template.key.id } )
}
break
case 'command':
mans.sendMessage(from, {
    caption: menu2,
    image: fs.readFileSync("./media/fenzo.jpg"),
    buttons: [
      {
       buttonId: `owner`, 
       buttonText: {
        displayText: 'Created By Fax'
      }, type: 1},
    ],
    footer: "By Fax Nvs",
                contextInfo: {
"externalAdReply": { 
"title" : global.namabot,
"mediaType" : 1,
"renderLargerThumbnail" : true , 
"showAdAttribution": true, 
"jpegThumbnail": log0,
"mediaUrl": global.linkgrupss, 
"thumbnail": log0,
"sourceUrl" : global.linkgrupss 
}}
           },{ quoted : m })
  break*/
case 'listmenu':
addCmds(`${prefix}allmenu`)
let logoo = ['https://telegra.ph/file/2781a20542e7a8ed8bf63.jpg','https://telegra.ph/file/9b91bf7012cdf5f5fa439.jpg','https://telegra.ph/file/412f0220a05acb3dc55f4.jpg','https://telegra.ph/file/295e7ae8ffaefb6cb706d.jpg']
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ templateMessage: { hydratedTemplate: { hydratedContentText: listmn, locationMessage: { jpegThumbnail: await getBuffer(logoo[Math.floor(Math.random() * logoo.length)]) }, hydratedFooterText: `Note : Jika Ada Masalah Atau Bug Pada Bot Segera Lapor Owner Untuk Dilakukan Perbaikan, Jadilah User Yang Smart.`, hydratedButtons: [{ urlButton: { displayText: '🌏 From Group Bot', url: 'https://chat.whatsapp.com/FcGBb1Ke7AqDxznA7fDuHV'} }, { quickReplyButton: { displayText: 'RULES BOT', id: '.rules', } }] } } }), { userJid: m.sender, quoted: m }); 
mans.relayMessage( m.chat, template.message, { messageId: template.key.id } )
setTimeout( () => {
let sections = []
let listmenu = [`groupmenu`,`menudownload`,`editfoto`,`ownermenu`,`botinfo`,`convert`,`makermenu`,`kerangmenu`,`praymenu`,`mediamenu`,`grupbot`,`sewabot`]
let listmenuu = [`Menu Group`,`Downloader`,`Photo Editing`,`Owner Menu`,`About Bot`,`Sticker Editing`,`Text Maker`,`Kerang Menu`,`PrayMenu`,`Misc And Media`,`From Bot Group`,`Rent This Bot`]
let listmenuuu = [`List Fitur Khusus Admin-Group`,`Ingin Download Sesuatu?`,`Ingin Mengubah Foto Kamu??`,`Hanya Di Gunakan Owner -Sama`,`Informasi Tentang Bot`,`Ayok Edit Sticker Mu Di sini`,`List Menu Maker`,`Random Jawaban Dari Bot Kaka, Masa Ngk Tau Ngk Pernah Nonton SpongeBob ya?`,`Fitur keagamaan, harap Jangan diPermainkan, ayo kita tingkatkan toleransi 😍😍`,`Butuh Info Atau Media,Ketik Di Sini`,`Fax NvsBot From-Whatsapp`,`Mau Sewa Bot Kak?, Klik Di Sini 🤗`]
let nombor = 1
let startnum = 0
let startnumm = 0
for (let x of listmenu) {
const yy = {title: 'Sub-Menu Ke-' + nombor++,
rows: [
{
title: `${listmenuu[startnum++]}`,
description: `${listmenuuu[startnumm++]}`,
rowId: `${prefix}${x}`
}
]
}
sections.push(yy)
}
const sendm =  mans.sendMessage(
from, 
{
text: `Hai kak @${m.sender.split('@')[0]},\nPilih Menu Fax Nvs disini`,
footer: "Jangan Lupa Donasi",
title: `Selamat ${ucap}`,
buttonText: "Click Button",
sections,
mentions:[m.sender]
}, { quoted : m }
)
  }, 30)
break
case 'rules':
replyDeface(`
*── 「 RULES 」 ──*

1. Jangan spam bot. 
Sanksi: *WARN/SOFT BLOCK*

2. Jangan telepon bot.
Sanksi: *SOFT BLOCK*

3. Jangan mengeksploitasi bot.
Sanksi: *PERMANENT BLOCK*

Jika sudah dipahami rules-nya, silakan ketik *.menu* untuk memulai!

`)
break
case 'donasi': case 'donate':{
mans.sendMessage(from, {image:{url:qris}, caption:`${require('./help/help.js').donate(prefix, l, pushname)}`}, {quoted:m})
}
break
case 'sewabot':{
listku = `*── 「 PRICE LIST 」 ──*
 
*Hai kak  @${m.sender.split("@")[0]}*
*Harga Sewa Bot*
*10k /Group Selama 1 Bulan*

*Pembayaran Bisa Melalui Metode Pembayaran di Bawah:*
*OVO/Dana/Gopay =*
*Qris yang dilampirkan*

*_note_*:
*Jika kalian ingin menjadi owner bot,bisa chat owner untuk price nya :D*
*wa.me/6281523940672(Owner)*
`
mans.sendMessage(m.chat, {text: listku, mentions:[m.sender]}, {quoted:m})
}
break
case 'mediamenu':
l = 1
replyDeface(require ('./help/help').mediamenu(prefix, l))
break
case 'praymenu':
l = 1
replyDeface(require('./help/help').praymenu(prefix, l))
break
case 'menudownload':
case 'menudown':
case 'downloader': 
l = 1
replyDeface(require('./help/help').downloadmenu(prefix, l))
break
case 'groupmenu':
case 'menugroup':
case 'grupmenu':
if (!m.isGroup) return replyDeface(mess.group)
l = 1
replyDeface(require('./help/help').grupmenu(prefix, l))
break
case 'textmaker':
case 'makermenu':
l = 1
replyDeface(require('./help/help').textmaker(prefix, l))
break
case 'ownermenu':
replyDeface(require('./help/help').ownermenu(prefix, l))
break
case 'convert':
replyDeface(require('./help/help').convert(prefix, l))
break
case 'editfoto':
replyDeface(require('./help/help').photo(prefix, l))
break
case 'kerangmenu':
replyDeface(`*── 「 KERANG 」 ──*

1. *${prefix}kapankah*
Mengambil jawaban random dari bot.
Aliases: -
Usage: *${prefix}kapankah* text

2. *${prefix}bisakah*
Mengambil jawaban random dari bot.
Aliases: -
Usage: *${prefix}bisakah* text

3. *${prefix}rate*
Mengambil jawaban random dari bot
Aliases: nilai
Usage: *${prefix}rate* pertanyaan

4. *${prefix}bagaimanakah*
Mengambil jawaban random dari bot
Aliases: nilai
Usage: *${prefix}bagaimanakah* pertanyaan

    `)
break
/// RPG
case 'me': case 'inventory': case 'profile':{
if (isBan) return replyDeface(mess.ban)
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     
     var flob = await getBuffer(picak+'Profile User')
     let teksehmazeh = `*── 「 PROFIL BIODATA 」 ──*\n\n`
     teksehmazeh += `*❤️Darah kamu* : ${getDarah(m.sender)}\n`
     teksehmazeh += `*◻️️Besi kamu* : ${getBesi(m.sender)}\n`
     teksehmazeh += `*🌟Emas Kamu* : ${getEmas(m.sender)}\n`
     teksehmazeh += `*💎Emerald Kamu* : ${getEmerald(m.sender)}\n`
     teksehmazeh += `*🧪Potion Kamu* : ${getPotion(m.sender)}\n\n`
     teksehmazeh += `*── 「 HASIL BURUAN 🏹 」 ──*\n`
     teksehmazeh += `*🐟Ikan* : ${getIkan(m.sender)}\n`
     teksehmazeh += `*🐔Ayam* : ${getAyam(m.sender)}\n`
     teksehmazeh += `*🐇Kelinci* : ${getKelinci(m.sender)}\n`
     teksehmazeh += `*🐑Domba* : ${getDomba(m.sender)}\n`
     teksehmazeh += `*🐄Sapi* : ${getSapi(m.sender)}\n`
     teksehmazeh += `*🐘Gajah* : ${getGajah(m.sender)}\n\n`
     teksehmazeh += `_*${pushname}*_`
     let butRun = [
        	{ urlButton: { displayText: `📝 From Group WhatsApp`, url : `https://chat.whatsapp.com/FcGBb1Ke7AqDxznA7fDuHV` } },
        	{ urlButton: { displayText: `🎯 Rest Api`, url : `https://x-none.herokuapp.com` } },
            { urlButton: { displayText: `☎️Contact Me`, url: `+62 815-2394-0672` } },
            { quickReplyButton: { displayText: `🏧 leaderboard`, id: 'leaderboard'} }
        	]
        	mans.sendMessage(m.chat, { caption: teksehmazeh, document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx' }, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: namebot, templateButtons: butRun, footer: `ingin Berpetualang Lagi`, mentions: [m.sender] })
        	}
        	break

/*case 'menu': case 'help': {
if (isBan) return replyDeface(mess.ban)
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./media/fenzo.jpg'), gifPlayback:true, jpegThumbnail:global.log0 }, { upload: mans.waUploadToServer })
const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
imageMessage: message.imageMessage,
hydratedContentText: listmn,
hydratedFooterText: "Bela Bot",
hydratedButtons: [{
urlButton: {
displayText: 'Group Whatsapp',
url: 'https://chat.whatsapp.com/C9t9klLMGzg2dC84ii4fqY'
}
}, {
urlButton: {
displayText: 'Contact Me',
url: '+7 977 471-46-72'
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: 'owner'
}  
}]
}
}
}), { userJid: m.chat, quoted: m })
mans.relayMessage(m.chat, template.message, { messageId: template.key.id })
}
break*/
case 'sc': case 'script':
if (isBan) return replyDeface(mess.ban)
replyDeface(`Bot ini Menggunakan Script : https://github.com/DikaArdnt/Hisoka-Morou`)
break
case 'grupbot':
case 'groupbot':
case 'botgrup':
replyDeface(`Jangan Lupa join yah\nhttps://chat.whatsapp.com/Cb0HKfJRoAjDZFLEreXw36`)
break
case 'getscmd': {
if (isBan) return replyDeface(mess.ban)
mans.sendMessage(from, {sticker:{url:"https://ZackMans.github.io/media/menu.webp"}}, {quoted:m})
mans.sendMessage(from, {sticker:{url:"https://ZackMans.github.io/media/groupopen.webp"}}, {quoted:m})
mans.sendMessage(from, {sticker:{url:"https://ZackMans.github.io/media/groupclose.webp"}}, {quoted:m})
}
break
// © ZackMans Official - 2022
case 'totalhit': {
if (isBan) return replyDeface(mess.ban)
teks = `       *「 Total Hit Command 」*

Global Hit : ${totalhit[0].total}\`\`\``
for (let i of totalhit[0].cmd) {
teks += `\n\n▸ Name : ${i.name}
▸ Use : ${i.use}`
}
teks += `\`\`\``
replyDeface(teks)
}
break
case 'topglobal':{
if (isBan) return replyDeface(mess.ban)
            balance.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
            let top = '*── 「 TOPGLOBAL 」 ──*\n\n'
            let arrTop = []
            for (let i = 0; i < 10; i ++){
                top += `${i + 1}. wa.me/${balance[i].id.split("@")[0]}\n=> Balance : $${balance[i].balance}\n\n`
                arrTop.push(balance[i].id)
            }
            replyDeface(top)
            }
            break
case 'shadow': case 'cup': case 'romance': case 'smoke': case 'burnpaper': case 'lovemessage': case 'undergrass': case 'love': case 'coffe': case 'woodheart': case 'woodenboard': case 'summer3d': case 'wolfmetal': case 'nature3d': case 'underwater': case 'golderrose': case 'summernature': case 'letterleaves': case 'glowingneon': case 'fallleaves': case 'flamming': case 'harrypotter': case 'carvedwood':   
  if (isBan) return replyDeface(mess.ban)
  if(!q) return replyDeface(`Example: ${prefix + command} fardan`)
					let cokk = `http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${q}`
			mans.sendMessage(from, {image:{url:cokk}, caption:"Done!"}, {quoted:m})
                    break
case 'noir':
case 'balloon':
case 'beach-sign':
case 'airline':
case 'beach-sign':
case 'blood_writing':
case 'bracelet':
case 'cemetery-gates':
case 'chalk_writing':
case 'christmas-writing':
case 'cookies_writing':
case 'denim-emdroidery':
case 'einstein':
case 'foggy_window_writing':
case 'fortune-cookie':
case 'frosty-window-writing':
case 'haunted-hotel':
case 'heart_tattoo':
case 'lipstick-writing':
case 'led-road-sign':
case 'love-lock':
case 'nightmare-writing':
case 'pendant':
case 'plane-banner':
case 'sand_writing':
case 'snow-sign':
case 'soup_letters':
case 'street-sign':
case 'typewriter':
case 'water-writing':
if (!isPrem) return replyPremium(mess.premium)
if(!q) return replyDeface(`Example: ${prefix + command} fardan`)
let ck = `https://violetics.pw/api/photofunia/${command}?apikey=7005-2125-9f00&text=${q}`
mans.sendMessage(from, {image:{url:ck}, caption:"Done!"}, {quoted:m})
                    break
                    // Ephoto 360 //
                case 'wetglass': case 'multicolor3d': case 'watercolor': case 'luxurygold': case 'galaxywallpaper': case 'lighttext': case 'beautifulflower': case 'puppycute': case 'royaltext': case 'heartshaped': case 'birthdaycake': case 'galaxystyle': case 'hologram3d': case 'greenneon': case 'glossychrome': case 'greenbush': case 'metallogo': case 'noeltext': case 'glittergold': case 'textcake': case 'starsnight': case 'wooden3d': case 'textbyname': case 'writegalacy': case 'galaxybat': case 'snow3d': case 'birthdayday': case 'goldplaybutton': case 'silverplaybutton': case 'freefire': 
                if(!q) return replyDeface(`Example: ${prefix + command}fardan`)
                  if (isBan) return replyDeface(mess.ban)
                      let coka = `http://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${q}`
                    mans.sendMessage(from, {image:{url:coka}, caption:"Done!"}, {quoted:m})
                    break
//TEXT PRO CUY
case 'hoorror':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
  case 'whitebear':{
  if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'thunder':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/create-thunder-text-effect-online-881.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'neon':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/neon-light-text-effect-online-882.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'matrix':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/matrix-style-text-effect-online-884.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'sky':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'joker':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/create-logo-joker-online-934.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'magma':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'sand':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'pencil':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'graffiti':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'metallic':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/create-a-metallic-text-effect-free-online-1041.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'steel':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/steel-text-effect-online-921.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'harrypotter':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/create-harry-potter-text-effect-online-1025.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'underwater':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'luxury':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'glue':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'fabric':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/fabric-text-effect-online-964.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'neonlight':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/neon-light-glitch-text-generator-online-1063.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'lava':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/lava-text-effect-online-914.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'toxic':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/toxic-text-effect-online-901.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'ancient':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'christmas':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/sparkles-merry-christmas-text-effect-1054.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'sci_fi':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'rainbow':{
if (isBan) return replyDeface(mess.ban)
     let link = `https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html`
     let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
//BARU
case 'classic':{
if (isBan) return replyDeface(mess.ban)
let link = `https://textpro.me/video-game-classic-8-bit-text-effect-1037.html`
let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'watercolor':{
if (isBan) return replyDeface(mess.ban)
let link = `https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html`
let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'halloween':{
if (isBan) return replyDeface(mess.ban)
let link = `https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html`
let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'halloweenfire':{
if (isBan) return replyDeface(mess.ban)
let link = `https://textpro.me/halloween-fire-text-effect-940.html`
let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'writing':{
if (isBan) return replyDeface(mess.ban)
let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'foggy':{
if (isBan) return replyDeface(mess.ban)
let link = `https://textpro.me/write-text-on-foggy-window-online-free-1015.html`
let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'marvel':{
if (isBan) return replyDeface(mess.ban)
let link = `https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html`
let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'skeleton':{
if (isBan) return replyDeface(mess.ban)
let link = `https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`
let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'sketch':{
if (isBan) return replyDeface(mess.ban)
let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'wonderful':{
let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'cool':{
let link = `https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html`
let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'collwall':{
let link = `https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html`
let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'multicolor':{
if (isBan) return replyDeface(mess.ban)
let link = `https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html`
let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'batman':{
if (isBan) return replyDeface(mess.ban)
let link = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
case 'juice':{
let link = `https://textpro.me/fruit-juice-text-effect-861.html`
let anui = await textpro(link, q)
     replyDeface(`Tunggu Sebentar Sedang Membuat Makernya Sekitar 1 Menit Kurang`) 
     console.log(anui)
    mans.sendMessage(from, {image:{url:anui}, caption:"Done!"}, {quoted:m})
}
   break
//WM By Rizki
case 'pornhub':{
if (isBan) return replyDeface(mess.ban)
if(!q) return replyDeface(`Example: ${prefix + command} ajg | ea`)
replyDeface(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anu)
mans.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case 'retro':{
if (isBan) return replyDeface(mess.ban)
if(!q) return replyDeface(`Example: ${prefix + command} ajg | ea`)
replyDeface(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anu)
mans.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case 'horror':{
if (isBan) return replyDeface(mess.ban)
if(!q) return replyDeface(`Example: ${prefix + command} ajg | ea`)
replyDeface(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anu)
mans.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case '8bit':{
if (isBan) return replyDeface(mess.ban)
if(!q) return replyDeface(`Example: ${prefix + command} ajg | ea`)
replyDeface(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anu)
mans.sendMessage(from,{image:{url:anu}, caption:"Done!"},{quoted:m})
}
break
case 'circuit': case 'classic8bit': case 'color-fireworks': case 'cool-metal': case 'cutegirl': case 'dark-gold-metal': case 'decorated-cookie': case 'deluxe-gold': case 'deluxe-silver': case 'dinamo': case 'double-exposure': case 'dragon-fire': case 'eroded-metal': case 'fabric-text': case 'firework': case 'floraltext': case 'fox-crossfire': case 'fun-certify1': case 'fun-certify2': case 'futuristic': case 'galaxy-angel': case 'galaxy-effect': case 'galaxy-effect2': case 'galaxy-text': case 'galaxy-text-3': case 'gankk-league-of-kings': case 'gemstone': case 'genji-overwatch': case 'glitchtext': case 'glossy': case 'glossy-bluemetal': case 'glossy-carbon': case 'glossy-chrome': case 'gold-avenger': case 'gold-barcar': case 'gold-batman': case 'gold-bird2': case 'gold-eagle': case 'gold-effect': case 'gold-fox': case 'gold-glitter': case 'gold-lion': case 'gold-lion2': case 'gold-star': case 'gold-tiger': case 'golden-letter': case 'gr-crossfire': case 'gradientlogo': case 'graffiti-color': case 'graffiti-text3': case '1917-style': case '3d-effect': case '3d-rubystone': case '3d-text-sub-zombie': case '3dengraved': case '3dgalaxy-metal': case '3dgold': case '3dgolden': case '3dgradient': case '3dlove': case '3dluxury': case '3dneonlight': case '3dpapercut': case '3drainbow': case '3drealistic': case '3drosegold': case '3dscifi': case '3dsilver': case '3dspace': case '3dstone': case '3dtext-effect': case '3dunderwater': case '3dvintage': case '3dwaterpipe': case 'alice-league-of-kings': case 'angel-wing-galaxy': case 'anubis': case 'arch-crossfire': case 'art-shader': case 'assassins-creed': case 'avengers': case 'azzenka-league-of-kings': case 'balloons-cards': case 'balloons-love': case 'bearlogo': case 'bg-crossfire': case 'birthday-cake': case 'birthday-cards': case 'birthday-greeting': case 'birthday-roses': case 'black-metal': case 'blackpink': case 'blood-frosted': case 'blood-text': case 'blue-effect': case 'blue-glitter': case 'brickwall': case 'brokentext': case 'bubble-effect': case 'bulb-effectcase': {        
if (isBan) return replyDeface(mess.ban)
if (!text) return m.reply(`Example : ${prefix + command} text`)
replyDeface(mess.wait)

mans.sendMessage(m.chat, { image: { url: `https://violetics.pw/api/textpro/${command}?apikey=7005-2125-9f00&text=${text}` }, caption: `Text Pro ${command}` }, { quoted: m})

}

break
case 'textmaker': {
if (isBan) return replyDeface(mess.ban)
if (args.length < 1) return replyDeface(`Example :\n${prefix + command} <name>`)
if (args[0] === 'glitch') {
if (args.length < 2) return replyDeface(`Example :\n${prefix + command + ' ' + args[0]} ZackMans`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
mans.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) return replyDeface(`Example :\n${prefix + command + ' ' + args[0]} ZackMans`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
mans.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
replyDeface(`*List Text Maker :*\n•> glitch\n•> glow`)
}
}
break
case 'limituser':
if (isBan) return replyDeface(mess.ban)
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    replyDeface(txt)       
  }
 break
 case 'leaderboard':
 if (isBan) return replyDeface(mess.ban)
{      
   let txt = `「 *LEADERBOARD* 」\n\n`
     for (let i of _buruan){
     txt += `➸ *ID :* ${i.id}\n`
     txt += `*🐟Ikan* : ${i.ikan}\n`
     txt += `*🐔Ayam* : ${i.ayam}\n`
     txt += `*🐇Kelinci* : ${i.kelinci}\n`
     txt += `*🐑Domba* : ${i.domba}\n`
     txt += `*🐄Sapi* : ${i.sapi}\n`
     txt += `*🐘Gajah* : ${i.gajah}\n\n`
     }
    replyDeface(txt)       
  }
 break
case 'mancing':{
if (isBan) return replyDeface(mess.ban)
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  if (isUmpan < 1) return reply('Umpan kamu habis!, cobalah berburu dan ubah dagingnya menjadi umpan')
  replyDeface("1 umpan terpakai")
  var ikannya = ikan[Math.floor(Math.random() * ikan.length)]
  var ditangkap = Math.ceil(Math.random() * 20)
  setTimeout( () => {
  let caption = `Hasil tangkapan : ${ikannya}\n> Jumlah tangkapan : ${ditangkap}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Mancing lagi🎣'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/mancing.jpg' },
      caption: caption,
      footer: namebot,
      buttons: buttons,
      headerType: 4
     }
     mans.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  replyDeface(`@${m.sender.split("@")[0]} Mulai memancing🎣`)     
  }, 1500)
  kurangUmpan(m.sender, 1)
  addIkan(m.sender, ditangkap)	     
  }   
  break  
  case 'darah':{
  if (isBan) return replyDeface(mess.ban)
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  let dapat =  getDarah(m.sender)
  replyDeface(`${dapat}`)
  }
  break
  case 'bacok':{
  if (isBan) return replyDeface(mess.ban)
  if (isCekDarah < 1) return replyDeface('Darah kamu habis')
   kurangDarah(m.sender, 7)
  replyDeface('Telah Si Bacok️')
  }
  break
case 'mining': case 'menambang':{
if (isBan) return replyDeface(mess.ban)
  if (!isInventory){ addInventori(m.sender) }
  if (isCekDarah < 1) return replyDeface('Kamu kelelahan!, cobalah heal menggunakan potion') 
  let besi = [1,2,5,0,3,0,1,1,4,1,5,0,0]
  let emas = [0,1,2,3,0,0,0,1,1,0,0,2]
  let emerald = [0,0,1,0,0,1,0,2,1,0,0,1]
  var besinya = besi[Math.floor(Math.random() * besi.length)]  
  var emasnya = emas[Math.floor(Math.random() * emas.length)]  
  var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]  
  setTimeout( () => {
  let caption = `[ HASIL MENAMBANG ]\n*Besi* : ${besinya}\n*Emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`
  let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Menambang lagi⛏️'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: './storage/image/tambang.jpg' },
      caption: caption,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     mans.sendMessage(from, buttonMessage, { quoted: m })
   
   }, 7000)  
  setTimeout( () => {
  replyDeface(`*${pushname}* Mulai menambang🎣`)     
  }, 1500)
  kurangDarah(m.sender, 10)
  addBesi(m.sender, besinya)
  addEmas(m.sended, emasnya)
  addEmerald(m.sender, emeraldnya)	     
  }   
  break
  case 'beli': case 'buy':{
  if (isBan) return replyDeface(mess.ban)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 if (!q) return replyDeface('Mau beli apa?')
 var anu = args[1]
  if (args[0] === 'potion'){
  let noh = 100000 * anu
 if (!args[1]) return replyDeface(`Example : ${prefix + command} potion 2\n 1 potion = 100000 monay`)
 if (isMonay < noh) return replyDeface('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addPotion(m.sender, apalu)
  setTimeout( () => {
  replyDeface(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Potion kamu* : ${getPotion(m.sender)}`)
  }, 2000) 
 } else 
 if (args[0] === 'umpan'){
  let noh = 5000 * anu
 if (!args[1]) return replyDeface(`Example : ${prefix + command} umpan 2\n 1 umpan = 2500 monay`)
 if (isMonay < noh) return replyDeface('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addUmpan(m.sender, apalu)
  setTimeout( () => {
  replyDeface(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Umpan kamu* : ${getUmpan(m.sender)}`)
  }, 2000) 
  } else 
  if (args[0] === 'limit'){
  let noh = 35000 * anu
 if (!args[1]) return replyDeface(`Example : ${prefix + command} limit 2\n 1 limit = 35000 monay`)
 if (isMonay < noh) return replyDeface('Sisa monay kamu tidak mencukupi untuk pembelian ini')
 kurangMonay(m.sender, noh)
 var apalu = anu * 1
 addLimit(m.sender, apalu)
  setTimeout( () => {
  replyDeface(`Transaksi berhasil ✔️\n*Sisa monay kamu* : ${getMonay(m.sender)}\n*Limit kamu* : ${getLimit(m.sender)}`)
  }, 2000) 
  } else { replyDeface("Format salah!") }
 }
 break
 case 'sel': case 'jual':{
 if (isBan) return replyDeface(mess.ban)
 if (!q) return  replyDeface(`Mau jual apa?\nExample : ${prefix + command} ikan 2`)
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
 if (!isInventoryMonay){ addInventoriMonay(m.sender) }
 if (!isInventory){ addInventori(m.sender) }
 var anu = args[1]
 if (args[0] === 'ikan'){
 if (isIkan < anu) return replyDeface('Ikan kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return replyDeface(`Example : ${prefix + command} ikan 2\n 1 ikan = 1500 monay`)
 kurangIkan(m.sender, anu)
 let monaynya = 1500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replyDeface(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ikan kamu* : ${getIkan(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'ayam'){
 if (isAyam < anu) return replyDeface('Ayam kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return replyDeface(`Example : ${prefix + command} ayam 2\n 1 ayam = 2500 monay`)
 kurangAyam(m.sender, anu)
 let monaynya = 2500 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replyDeface(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Ayam kamu* : ${getAyam(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'kelinci'){
 if (isKelinci < anu) return replyDeface('Kelinci kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return replyDeface(`Example : ${prefix + command} kelinci 2\n 1 kelinci = 3000 monay`)
 kurangKelinci(m.sender, anu)
 let monaynya = 3000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replyDeface(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Kelinci kamu* : ${getKelinci(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'domba'){
 if (isDomba < anu) return replyDeface('Domba kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return replyDeface(`Example : ${prefix + command} domba 2\n 1 domba = 5000 monay`)
 kurangDomba(m.sender, anu)
 let monaynya = 5000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replyDeface(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Domba kamu* : ${getDomba(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'sapi'){
 if (isSapi < anu) return replyDeface('Sapi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return replyDeface(`Example : ${prefix + command} sapi 2\n 1 sapi = 10000 monay`)
 kurangSapi(m.sender, anu)
 let monaynya = 10000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replyDeface(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Sapi kamu* : ${getSapi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'gajah'){
 if (isGajah < anu) return replyDeface('Gajah kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return replyDeface(`Example : ${prefix + command} gajah 2\n 1 gajah = 15000 monay`)
 kurangGajah(m.sender, anu)
 let monaynya = 15000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replyDeface(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Gajah kamu* : ${getGajah(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'besi'){
 if (isBesi < anu) return replyDeface('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return replyDeface(`Example : ${prefix + command} besi 2\n 1 besi = 15000 monay`)
 kurangBesi(m.sender, anu)
 let monaynya = 16000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replyDeface(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa Besi kamu* : ${getBesi(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emas'){
 if (isEmas < anu) return replyDeface('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return replyDeface(`Example : ${prefix + command} emas 2\n 1 emas = 50000 monay`)
 kurangEmas(m.sender, anu)
 let monaynya = 50000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replyDeface(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emas kamu* : ${getEmas(m.sender)}`)
  }, 2000) 
 } else
 if (args[0] === 'emerald'){
 if (isEmerald < anu) return replyDeface('Besi kamu tidak mencukupi untuk transaksi ini')
 if (!args[1]) return replyDeface(`Example : ${prefix + command} emerald 2\n 1 emerald = 100000 monay`)
 kurangEmerald(m.sender, anu)
 let monaynya = 100000 * anu
 addMonay(m.sender, monaynya)
  setTimeout( () => {
  replyDeface(`Transaksi berhasil ✔️\n*Monay kamu* : ${getMonay(m.sender)}\n*Sisa emerald kamu* : ${getEmerald(m.sender)}`)
  }, 2000) 
 } else { replyDeface("Format salah!") }

 }
 break

 case 'heal':{
 if (!isCekDarah < 1) return replyDeface('Kamu hanya bisa heal ketika darah kamu 0')
 if (isCekDarah > 100) return replyDeface('Darah kamu sudah penuh')
 if (isPotion < 1) return replyDeface('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_') 
 addDarah(m.sender, 100)
 kurangPotion(m.sender, 1)
 replyDeface('Berhasil, darah kamu sudah full')
 }
 break
 case 'berburu':{ 
 //Peringatan!!!!, ini buatan rifza. jangan claim punya lu:)
 if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
 if (isCekDarah < 1) return replyDeface('Darah kamu habis, cobalah heal menggunakan potion') 
 if (!isInventoriBuruan){ addInventoriBuruan(m.sender) } 
  let luka = ["Tertusuk duri saat berburu","Terpeleset ke jurang saat berburu","Tercakar hewan buas","Tidak berhati-hati","Terjerat akar","Terjatuh saat berburu"]
  let location = ["Hutan rimba","Hutan Amazon","Hutan tropis","Padang rumput","Hutan afrika","Pegunungan"]
   var ikanmu = Math.ceil(Math.random() * 10)
   var ayam = Math.ceil(Math.random() * 8)
   var kelinci = Math.ceil(Math.random() * 7)
   var dombanya = [3,0,4,0,5,4,6,0,1,0,2,3,0,3,0,1]
   var sapinya = [2,0,3,0,4,0,5,0,1,0,2,0,3,0,1]
   var gajahnya = [1,0,4,0,2,0,1,0,2,1,3,0,1]
   var domba = dombanya[Math.floor(Math.random() * dombanya.length)] 
   var sapi = sapinya[Math.floor(Math.random() * sapinya.length)] 
   var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]    
   var lukanya = luka[Math.floor(Math.random() * luka.length)]
   var lokasinya = location[Math.floor(Math.random() * location.length)]
 if (lokasinya === 'Hutan rimba') {
    var image = './storage/image/rimba.jpg'
   } else
 if (lokasinya === 'Hutan Amazon') {
    var image =  './storage/image/amazon.jpg'
   } else
 if (lokasinya === 'Hutan tropis') {
    var image = './storage/image/tropis.jpg'
   } else
 if (lokasinya === 'Padang rumput') {
    var image = './storage/image/padang_rumput.jpg'
   } else
 if (lokasinya === 'Hutan afrika') {
    var image = './storage/image/afrika.jpg'
   } else
 if (lokasinya === 'Pegunungan') {
   var image = './storage/image/pegunungan.jpg'
   }
 setTimeout( () => {
  let teksehmazeh = `_[ HASIL BURUAN ]_\n`
     teksehmazeh += `*🐟Ikan* : ${ikanmu}\n`
     teksehmazeh += `*🐔Ayam* : ${ayam}\n`
     teksehmazeh += `*🐇Kelinci* : ${kelinci}\n`
     teksehmazeh += `*🐑Domba* : ${domba}\n`
     teksehmazeh += `*🐄Sapi* : ${sapi}\n`
     teksehmazeh += `*🐘Gajah* : ${gajah}\n\n`
     teksehmazeh += `_[ INFO ]_\n`
     teksehmazeh += `*Lokasi* : ${lokasinya}\n`
     teksehmazeh += `*Terluka* : ${lukanya}, darah - 10\n`
     teksehmazeh += `*Sisa darah* : ${getDarah(m.sender)}\n`
    let buttons = [
      {
       buttonId: `${prefix + command}`, 
       buttonText: {
        displayText: 'Berburu lagi️🏹'
      }, type: 1},
    ]
    let buttonMessage = {
      image: { url: image },
      caption: teksehmazeh,
      footer: pushname,
      buttons: buttons,
      headerType: 4
     }
     mans.sendMessage(from, buttonMessage, { quoted: m })      
  }, 5000)  
 setTimeout( () => {
  replyDeface(`@${m.sender.split("@")[0]} Mulai berburu di ${lokasinya}`)     
  }, 1000) 
 addIkan(m.sender, ikanmu) 
   addAyam(m.sender, ayam) 
   addKelinci(m.sender, kelinci)
   addDomba(m.sender, domba)
   addSapi(m.sender, sapi)
  addGajah(m.sender, gajah)
 kurangDarah(m.sender, 10)
 }
 break
case 'ringtone': {
		if (!args.join(" ")) return replyDeface(`Contoh:\n${prefix + command} black over`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		mans.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'wallpaper': {
                if (!args.join(" ")) return replyDeface("Mau cari gambar apa kak?")
		let { wallpaper } = require('./lib/scraper')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `.wallpaper ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `© Created ${namebot}`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
                if (!args.join(" ")) return replyDeface("Mau cari gambar apa kak?")
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(args)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `⭔ Title : ${result.title}\n⭔ Source : ${result.source}\n⭔ Media Url : ${result.image}`,
                    footer: `© Created ${namabot}`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'quotesimage':case 'qoutesimage':
				   let cok = await fetchJson(`http://api.lolhuman.xyz/api/random/quotesimage?apikey=${lolkey}`)
				   replyDeface(mess.wait)
				  mans.sendMessage(m.chat, { image: { url: cok }, caption: 'Succes\nCreated By wa.me/6281523940672' }, { quoted: m })
				  break
            case 'quotesanime': case 'quoteanime': {
		let { quotesAnime } = require('./lib/scraper')
                let anu = await quotesAnime()
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `quotesanime`, buttonText: {displayText: 'Next'}, type: 1}
                ]
                let buttonMessage = {
                    text: `~_${result.quotes}_\n\nBy '${result.karakter}', ${result.anime}\n\n- ${result.up_at}`,
                    footer: 'Press The Button Below',
                    buttons: buttons,
                    headerType: 2
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
//by Thunder team
case 'anime': { 
replyDeface(mess.wait)
await fetchJson(`https://api.jikan.moe/v4/anime?q=${q}`)
.then((res) =>{
console.log(res)   
let sections = []   
  for (let i of res.data) {
  const list = {title: `${i.title}`,
  rows: [
	    {
	     title: `${i.title}\n\n`, 
	     rowId: `${prefix}animesearch ${i.mal_id}`,
	     description: `${i.synopsis}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  mans.sendMessage(
      from, 
      {
       text: "Anime Search",
       footer: namebot,
       title: "Data Base Ada Di Button Ini",
       buttonText: "Click and see search results➡️",
       sections
      }, { quoted : m }
    )  
})
}
  break
case 'grupsetting':
            case 'groupsetting':{
                    let sections = []
                    let com = [`group enable`,`leveling enable`,`autosticker enable`,`welcome enable`,`antilink enable`]
                    let comm = [`group disable`,`leveling disable`,`autosticker disable`,`welcome disable`,`antilink disable`]
                    let listnya = [`Group open/close`,`Leveling enable/disable`,`Auto-Sticker enable/disable`,`Welcome enable/disable`,`antilink enable/disable`]
                    let suruh = [`Enable`, `Disable`]
                    let fiturname = [`Group`,`Leveling`,`AutoSticker`,`Welcome`,`Antilink`]
                    let startnum = 0; let startnu = 0; let startn = 0;let start = 0
                    let startnumm = 1
                    for (let x of com) {
                        const yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `Mengaktifkan ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `Menonaktifkan ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        sections.push(yy)
                    }
                    const sendm =  mans.sendMessage(
      from, 
      {
       text: "Group Settings",
       footer: "Only Admin Yak",
       title: "Atur Settingan Grup anda disini......",
       buttonText: "Click Button",
       sections
      }, { quoted : m }
    )  
}
  break

case 'animesearch':{
if (isBan) return replyDeface(mess.ban)
await fetchJson(`https://api.jikan.moe/v4/anime/${q}`)
.then((res) => {
let txt = `     Anime Search      \n\n*Judul:* *${res.data.title}*\n*English:* *${res.data.title_english}*\n*Japanese:* *${res.data.title_japanese}*\n*Type Anime:* *${res.data.type}*\n*Adaptasi:* *${res.data.source}*\n*Total Episode:* *${res.data.episodes}*\n*Status:* *${res.data.status}*\n*Ongoing:* *${res.data.airing ? 'Ya' : 'Tidak'}*\n*Aired:* *${res.data.aired.string}*\n*Durasi:* *${res.data.duration}*\n*Rating:* *${res.data.rating}*\n*Score:* *${res.data.score}*\n*Rank:* *${res.data.rank}*\n*Produser Utama:* *${res.data.producers.name}*\n*Studio:* *${res.data.studios[0].name}* `
mans.sendMessage(from, { image : { url : res.data.images.jpg.image_url}, caption : txt}, {quoted :m }) 
})
}
break
case 'coffe': case 'kopi': {
if (isBan) return replyDeface(mess.ban)
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `☕ Random Coffe`,
                    footer: `Created by ${namebot}`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'emojimix2': {
	    if (!text) return replyDeface(`Example : ${prefix + command} 😅`)
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await mans.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) return replyDeface(`Example : ${prefix + command} text`)
           await mans.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'hisoka', 'morou', m, {asSticker: true})

         }
         break
// tele stiker
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await mans.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'doge':
case 'dogestick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await mans.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'bucinstick':
case 'bucinp' :{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await mans.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'patrik':
case 'patrick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await mans.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'smilestick':{
if (isBan) return replyDeface(mess.ban)
try {
let stSearch = await fax.StickerSearch("smile")
const rndS = stSearch.sticker_url
mans.sendMedia(m.chat, rndS[Math.floor(Math.random() * rndS.length)], global.packname, global.author, m, {asSticker: true})
} catch {
replyDeface("Error!")
}
}
break
case 'sadstick':{
if (isBan) return replyDeface(mess.ban)
try {
let stSearch = await fax.StickerSearch("sad")
const rndS = stSearch.sticker_url
mans.sendMedia(m.chat, rndS[Math.floor(Math.random() * rndS.length)], global.packname, global.author, m, {asSticker: true})
} catch {
replyDeface("Error!")
}
}
break
case 'stickersearch': case 'sticksearch': case 'searchstick': case 'searchsticker': {
if (isBan) return replyDeface(mess.ban)
if (!args[0]) return replyDeface(`Example : \n${prefix + command} patrick`)
try {
let stSearch = await fax.StickerSearch(args.join(" "))
const rndS = stSearch.sticker_url
mans.sendMedia(m.chat, rndS[Math.floor(Math.random() * rndS.length)], global.packname, global.author, m, {asSticker: true})
} catch {
replyDeface("Error!")
}
}
break
case 'telestick': case 'stickertele': case 'sticktele': {
if (isBan) return replyDeface(mess.ban)
if (!args[0]) return replyDeface(`Example : \n- ${prefix + command} <name>\n- ${prefix + command} patrick`)
try {
let TFarro = await fax.Telesticker(text)
for (let i of TFarro) {
sleep(1000)
await mans.sendMedia(m.chat, i.url, global.packname, global.author, m, {asSticker: true})
}
} catch {
replyDeface("Error!")
}
}
break
case 'hug':                      
buffer = `http://api.lolhuman.xyz/api/random/hug?apikey=${lolkey}`
await mans.sendImageAsSticker(from, buffer, m, { packname: global.packname, author: global.author })
break
case 'poke2':                      
buffer = `http://api.lolhuman.xyz/api/random/poke?apikey=${lolkey}`
await mans.sendImageAsSticker(from, buffer, m, { packname: global.packname, author: global.author })
break
case 'pat':                      
buffer = `http://api.lolhuman.xyz/api/random/pat?apikey=${lolkey}`
await mans.sendImageAsSticker(from, buffer, m, { packname: global.packname, author: global.author })
break
case 'baka2':                      
buffer = `http://api.lolhuman.xyz/api/random2/baka?apikey=${lolkey}`
await mans.sendImageAsSticker(from, buffer, m, { packname: global.packname, author: global.author })
break
case 'ttp5':   {       
 if (!text) return replyDeface(`Example : ${prefix + command} text`)
buffer = `http://api.lolhuman.xyz/api/ttp?apikey=${lolkey}&text=${text}`
await mans.sendMedia(m.chat, `http://api.lolhuman.xyz/api/ttp?apikey=${lolkey}&text=${text}`, 'hisoka', 'morou', m, {asSticker: true})
}
break
case 'ttp2':
case 'ttp3':
case 'ttp4':{
if (!text) return replyDeface(`Example : ${prefix + command} text`)
await mans.sendMedia(m.chat, `http://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${text}`, 'hisoka', 'morou', m, {asSticker: true})
}
break
case 'emoji': {
if (isBan) return replyDeface(mess.ban)
if (!args.join(" ")) return replyDeface('emojinya?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await mans.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption:"Done!"}, {quoted:m})
await mans.sendMessage(from, {text:"s"}, {quoted:mese})
})
}
break
case 'suitpvp': case 'suit': {
if (isBan) return replyDeface(mess.ban)
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) replyDeface(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return replyDeface(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return replyDeface(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await mans.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) mans.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
break

//============ RUMUS BIAR LU PINTER DEK - FAX
case 'luas-segitiga':
if (isBan) return replyDeface(mess.ban)
replyDeface(mess.wait)
if (!q) return replyDeface(`untuk mencari hasil dari luas segitiga\nGunakan ${prefix}luassegitiga alas tinggi\ncontoh: ${prefix}luas-segitiga 12 7`)
if (!isInventoryLimit){ addInventoriLimit(m.sender) }
try {
const luasseg = bdr.datar.luas.segitiga(args[0], args[1], false)
const caraluas = bdr.datar.luas.segitiga(args[0], args[1], true)
replyDeface(`*Hasil:* ${luasseg}\n${caraluas}`)
} catch (err) {
replyDeface('Format pesannya salah tuh')
}
break
case 'kel-segitiga':
if (isBan) return replyDeface(mess.ban)
replyDeface(mess.wait)
if (!q) return replyDeface(`Untuk mencari Hasil dari keliling segitiga\nGunakan ${prefix}kelsegitiga sisi1 sisi2 sisi3\nContoh: ${prefix}kelsegitiga 32 10 8`)
     if (!isInventoryLimit){ addInventoriLimit(m.sender) }
     if (isLimit < 1) return replyDeface("Limit kamu sudah habis ಥ╭╮ಥ, silahkan beli dengan cara #buy limit _jumlah_")
     kurangLimit(m.sender, 1)
     replyDeface(`Satu limit terpakai ಥ‿ಥ\nSisa limit kamu : ${getLimit(m.sender)}`)
try {
const kelsegitiga = bdr.datar.keliling.segitiga(args[0], args[1], args[2], false)
const carakel = bdr.datar.keliling.segitiga(args[0], args[1], args[2], true)
replyDeface(`*Hasil:* ${kelsegitiga}\n*Rumus:* ${carakel}`)
} catch (err) {
replyDeface('Format pesannya salah tuh')
}
break
case 'luas-persegi':

if (!q) return replyDeface(`Untuk mencari Hasil dari luas persegi\nGunakan ${prefix}luaspersegi angka\nContoh: ${prefix}luaspersegi 32`)
try {
const luaspersegi = bdr.datar.luas.persegi(q, false)
const luaspersegis = bdr.datar.luas.persegi(q, true)
replyDeface(`*Hasil:* ${luaspersegi}\n*Rumus:* ${luaspersegis}`) 
} catch (err) {
replyDeface('Format pesannya salah tuh') 
}
break
case 'pythagoras':

if (!q) return replyDeface(`Untuk mencari hasil pythagoras\nGunakan ${prefix}pythagoras opsi angka1 angka2\nContoh: ${prefix}pythagoras miring 8 6`) 
try {
const pytha = bdr.rdb.pythagoras(args[0], args[1], args[2], false)
const rumuspytha = bdr.rdb.pythagoras(args[0], args[1], args[2], true)
replyDeface(`*Hasil:* ${pytha}\n*Rumus:* ${rumuspytha}`) 
} catch (err) {
replyDeface('Format pesannya salah tuh') 
}
break
case 'perkalian':

if (!q) return replyDeface(`Untuk mencari hasil perkalian\nGunakan ${prefix}perkalian angkaperkalian jumlahperkalian\nContoh: ${prefix}perkalian 5 15`) 
try {
const perkal = bdr.rdb.perkalian(args[0], args[1])
replyDeface(`*Hasil:* ${perkal}\n*Rumus:* ${rumusperkal}`) 
} catch (err) {
replyDeface('Format pesannya salah tuh') 
}
break
case 'kel-persegi':

if (!q) return replyDeface(`Untuk mencari Hasil dari keliling persegi\nGunakan ${prefix}kelpersegi angka\nContoh: ${prefix}kelpersegi 78`)
try {
const persegi = bdr.datar.keliling.persegi(q, false)
const caraPersegi = bdr.datar.keliling.persegi(q, true)
replyDeface(`*Hasil:* ${persegi}\n*Rumus:* ${caraPersegi}`) 
} catch (err) {
replyDeface('Format pesannya salah tuh') 
}
break
case 'kuadrat':
if (!q) return replyDeface(`Untuk mencari sebuah Hasil Kuadrat\nGunakan ${prefix}kuadrat angka\nContoh: ${prefix}kuadrat 6`) 
try {
const kuadrat = bdr.rdb.kuadrat(q)
replyDeface(`*Hasil:* ${kuadrat}`) 
} catch (err) {
replyDeface('Format pesannya salah tuh') 
}
break
case 'kubik':
if (!q) return replyDeface(`Untuk mencari sebuah Hasil Kubik\nGunakan ${prefix}kubik angka\nContoh: ${prefix}kubik 9`) 
try {
const kubik = bdr.rdb.kubik(q)
replyDeface(`*Hasil:* ${kubik}`) 
} catch (err) {
replyDeface('Format pesannya salah tuh') 
}
break
case 'family100': {
if (isBan) return replyDeface(mess.ban)
if ('family100'+m.chat in _family100) {
replyDeface('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: 'family100'+m.chat,
pesan: await mans.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
break
case 'tebak': {
if (isBan) return replyDeface(mess.ban)
if (!args.join(" ")) return replyDeface(`Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`)
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replyDeface("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await mans.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
mans.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
mans.sendButtonText(m.chat, [{ buttonId: 'tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `© ${mans.user.name}`, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replyDeface("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
mans.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
mans.sendButtonText(m.chat, [{ buttonId: 'tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`,`${mans.user.name}`, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return replyDeface("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
mans.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
mans.sendButtonText(m.chat, [{ buttonId: 'tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `${mans.user.name}`, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replyDeface("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
mans.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
mans.sendButtonText(m.chat, [{ buttonId: 'tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `${mans.user.name}`, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return replyDeface("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
mans.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
mans.sendButtonText(m.chat, [{ buttonId: 'tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `${mans.user.name}`, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replyDeface("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
mans.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
mans.sendButtonText(m.chat, [{ buttonId: 'tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, `${mans.user.name}`, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break
case 'slot':
if (isBan) return replyDeface(mess.ban)
const isislots = [
                            '🍊 : 🍒 : 🍐',
                            '🍒 : 🔔 : 🍊',
                            '🍇 : 🍒 : 🍐',
                            '🍊 : 🍋 : 🔔',
                            '💎 : 💎 : 💎',
                            '🔔 : 🍒 : 🍊',
                            '🍊 : 🍋 : 🔔',
                            '💎 : 🍒 : 🍋',
                            '🍊 : 🍒 : 💎',
                            '💎 : 🔔 : 🍇',
                            '💎 : 💎 : 💎',
                            '🍐 : 💎 : 🔔',
                            '🍊 : 🍋 : 🍒',
                            '🔔 : 🔔 : 🍇',
                            '🔔 : 🍐 : 🍇',
                            '💎 : 💎 : 💎'
                        ]
                            const mathslots = isislots[Math.floor(Math.random() * (isislots.length))]
                            if (mathslots == '💎 : 💎 : 💎') {
                                replyDeface(`*「 RESULT-SLOT 」*

🍋 : 🍇 : 🍍
💎 : 💎 : 💎 <~
🍋 : 🍒 : 🍍

Congrats You win!`)
                            } else {
                                replyDeface(`*「 RESULT-SLOT 」*

🍌 : 🍍 : 💎
${mathslots} <~
💎 : 🍌 : 🍌

Sorry You lost:(`)
                            }
                    break
case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return replyDeface(mess.ban)
let TicTacToe = require("./lib/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replyDeface('Kamu masih didalam game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (args.join(" ") ? room.name === args.join(" ") : true))
if (room) {
replyDeface('Partner ditemukan!')
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
if (room.x !== room.o) await mans.sendText(room.x, str, m, { mentions: parseMention(str) } )
await mans.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (args.join(" ")) room.name = args.join(" ")
replyDeface('Menunggu partner' + (args.join(" ") ? ` mengetik command dibawah ini ${prefix}${command} ${args.join(" ")}` : ''))
this.game[room.id] = room
}
}
break
case 'delttc': case 'delttt': {
if (isBan) return replyDeface(mess.ban)
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
mans.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
replyDeface(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
replyDeface('rusak')
}
}
break
case 'kuismath': case 'math': {
if (isBan) return replyDeface(mess.ban)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replyDeface("Masih Ada Sesi Yang Belum Diselesaikan!")
let { genMath, modes } = require('./src/math')
if (!args.join(" ")) return replyDeface(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
let result = await genMath(text.toLowerCase())
mans.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
replyDeface("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
break
case 'delete': case 'del': {
if (isBan) return replyDeface(mess.ban)
if (!m.quoted) return
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return replyDeface('Pesan tersebut bukan dikirim oleh bot!')
mans.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': {
if (isBan) return replyDeface(mess.ban)
if (!m.quoted && !args.join(" ")) return replyDeface(`Kirim/reply text dengan caption ${prefix + command}`)
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : args.join(" ") ? args.join(" ") : m.text : args.join(" ") ? args.join(" ") : m.text
replyDeface(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
}
break
case 'vote': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (m.chat in vote) return replyDeface(`_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`)
if (!args.join(" ")) return replyDeface(`Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`)
replyDeface(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [args.join(" "), [], []]
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
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: `mans.user.name`,
buttons: buttonsVote,
headerType: 1
}
mans.sendMessage(m.chat, buttonMessageVote)
}
break
case 'upvote': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!(m.chat in vote)) return replyDeface(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return replyDeface('Kamu Sudah Vote')
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
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: namebot,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
}
mans.sendMessage(m.chat, buttonMessageUpvote)
}
break
case 'devote': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!(m.chat in vote)) return replyDeface(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return replyDeface('Kamu Sudah Vote')
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
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: namebot,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
mans.sendMessage(m.chat, buttonMessageDevote)
}
break
case 'cekvote': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!(m.chat in vote)) return replyDeface(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
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


©${mans.user.id}
`
mans.sendTextWithMentions(m.chat, teks_vote, m)
}
break
case 'deletevote': case'delvote': case 'hapusvote': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!(m.chat in vote)) return replyDeface(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
delete vote[m.chat]
replyDeface('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
break
case 'listpc': {
if (isBan) return replyDeface(mess.ban)
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let teks = `     「 List Personal Chat 」\n\nThere are ${anu.length} users using bot in personal chat`
for (let i of anu) {
 teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`
}
mans.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listgc': {
if (isBan) return replyDeface(mess.ban)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `     「 List Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
for (let i of anu) {
 let metadata = await mans.groupMetadata(i)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
 teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nDibuat : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
mans.sendTextWithMentions(m.chat, teks, m)
}
break
case 'afk': {
if (isBan) return replyDeface(mess.ban)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
replyDeface(`${m.pushName} sekarang afk\nAlasan : ${args.join(" ") ? args.join(" ") : ''}`)
}
break	
case 'setcmd': {
if (isBan) return replyDeface(mess.ban)
if (!isPrem) return replyPremium(mess.premium)
if (!m.quoted) return replyDeface('Reply Pesan!')
if (!m.quoted.fileSha256) return replyDeface('SHA256 Hash Missing')
if (!args.join(" ")) return replyDeface(`Untuk Command Apa?`)
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replyDeface('You have no permission to change this sticker command')
global.db.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
replyDeface(`Done!`)
}
break
case 'delcmd': {
if (isBan) return replyDeface(mess.ban)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return replyDeface(`Tidak ada hash`)
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replyDeface('You have no permission to delete this sticker command')
delete global.db.sticker[hash]
replyDeface(`Done!`)
}
break
case 'listcmd': {
if (isBan) return replyDeface(mess.ban)
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
mans.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
break
case 'lockcmd': {
if (isBan) return replyDeface(mess.ban)
if (!isCreator) return replyDeface(mess.owner)
if (!m.quoted) return replyDeface('Reply Pesan!')
if (!m.quoted.fileSha256) return replyDeface('SHA256 Hash Missing')
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.sticker)) return replyDeface('Hash not found in database')
global.db.sticker[hash].locked = !/^un/i.test(command)
replyDeface('Done!')
}
break
case 'addmsg': {
if (isBan) return replyDeface(mess.ban)
if (!m.quoted) return replyDeface('Reply Message Yang Ingin Disave Di Database')
if (!args.join(" ")) return replyDeface(`Example : ${prefix + command} nama file`)
let msgs = global.db.database
if (text.toLowerCase() in msgs) return replyDeface(`'${args.join(" ")}' telah terdaftar di list pesan`)
msgs[text.toLowerCase()] = quoted.fakeObj
replyDeface(`Berhasil menambahkan pesan di list pesan sebagai '${args.join(" ")}'
    
Akses dengan ${prefix}getmsg ${args.join(" ")}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
break
case 'getmsg': {
if (isBan) return replyDeface(mess.ban)
if (!args.join(" ")) return replyDeface(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
let msgs = global.db.database
if (!(text.toLowerCase() in msgs)) return replyDeface(`'${args.join(" ")}' tidak terdaftar di list pesan`)
mans.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
break

case 'listmsg': {
if (isBan) return replyDeface(mess.ban)
let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
replyDeface(teks)
}
break
case 'fliptext': {
if (isBan) return replyDeface(mess.ban)
if (args.length < 1) return replyDeface(`Example:\n${prefix}fliptext MyMans`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replyDeface(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
case 'tohuruf': {
if (isBan) return replyDeface(mess.ban)
if (!Number(args[0])) return replyDeface(`Example:\n${prefix}tohuruf 456`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
replyDeface(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
replyDeface("Error")
}
}
break
case 'ghfollowing':case 'followinggh':
anu = await fetchJson(`https://api.github.com/users/${q}/following`)
teks = `*Following Github: ${q}\n\n`
buffer = await getBuffer(anu[0].avatar_url)
	teks = `*Username:* ${anu.login}\n*Link:* ${anu.html_url}\n                            \n`
mans.sendMessage(from, {image:{url:buffer}, caption:teks}, {quoted:m})
			break
case 'welcome': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!isAdmins && !isCreator) return replyDeface(mess.admin)
if (args.length < 1) return replyDeface('ketik enable untuk mengaktifkan\nketik disable untuk menonaktifkan')
if (args[0] === "enable") {
if (welcm) return replyDeface('Sudah Aktif')
wlcm.push(from)
replyDeface('Succes menyalakan welcome di group ini')
} else if (args[0] === "disable") {
if (!welcm) return replyDeface('Sudah Mati')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
replyDeface('Succes mematikan welcome di group ini')
} else {
replyDeface('enable untuk mengaktifkan, disable untuk menonaktifkan')
}
}
break
case 'bucin':{
if (isBan) return replyDeface(mess.ban)
				   anu = await fetchJson(`http://api.lolhuman.xyz/api/random/katabucin?apikey=${lolkey}`)
				   teks = `*${anu.result}*`
				   replyDeface(teks)
				   }
		break
case 'ceklolkey':{
if (!isPrem) return replyPremium(mess.premium)
		let lokey = await fetchJson(`https://api.lolhuman.xyz/api/checkapikey?apikey=${args}`)
		if (lokey.status === 200) {
			replyDeface(JSON.stringify(lokey, null, 2))
			lukey.push(args)
			fs.writeFileSync('./src/lolkey.json', JSON.stringify(lukey))
		} else {
			replyDeface(JSON.stringify(lokey, null, 2))
		}
	}
		break
case 'autorevoke': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!isBotAdmins) return replyDeface(mess.botAdmin)
if (!isAdmins && !isCreator) return replyDeface(mess.admin)
if (args.length < 1) return replyDeface('ketik enable untuk mengaktifkan\nketik disable untuk menonaktifkan')
if (args[0] === "enable") {
if (GcRvk) return replyDeface('Sudah Aktif')
gcrevoke.push(from)
replyDeface('Succes menyalakan autorevoke di group ini')
} else if (args[0] === "disable") {
if (!GcRvk) return replyDeface('Sudah Mati')
let off = wlcm.indexOf(from)
gcrevoke.splice(off, 1)
replyDeface('Succes mematikan autorevoke di group ini')
} else {
replyDeface('enable untuk mengaktifkan, disable untuk menonaktifkan')
}
}
break
case 'antidelete': {
if (isBan) return m.reply(mess.ban)
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiDelete) return m.reply('Sudah Aktif')
ntidel.push(from)
m.reply('Succes menyalakan antidelete di group ini')
} else if (args[0] === "off") {
if (!AntiDelete) return m.reply('Sudah Mati')
let off = ntidel.indexOf(from)
ntidel.splice(off, 1)
m.reply('Succes mematikan antidelete di group ini')
} else {
m.reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'leveling':
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!isAdmins && !isCreator) return replyDeface(mess.admin)
if (args.length < 1) return replyDeface('ketik enable untuk mengaktifkan\nketik disable untuk menonaktifkan')
if (args[0] === 'enable'){
if (isLeveling) return replyDeface(`Udah aktif`)
_leveling.push(from)
fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
replyDeface('leveling aktif')
} else if (args[0] === 'disable'){
let anu = _leveling.indexOf(from)
_leveling.splice(anu, 1)
fs.writeFileSync('./database/leveling.json', JSON.stringify(_leveling))
replyDeface('leveling nonaktif')
} 
break
case 'autosticker':
            case 'autostiker':
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!isBotAdmins) return replyDeface(mess.botAdmin)
if (!isAdmins && !isCreator) return replyDeface(mess.admin)
if (args.length < 1) return replyDeface('ketik autosticker enable untuk mengaktifkan\nketik autosticker disable untuk menonaktifkan')
if (args[0]  === 'enable'){
if (isAutoSticker) return replyDeface(`Udah aktif`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replyDeface('autosticker aktif')
} else if (args[0] === 'disable'){
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replyDeface('autosticker nonaktif')
}
break
/*case 'list': case 'daftar': case 'toko':
            if (db_respon_list.length === 0) return replyDeface(`Belum ada list message di database`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return replyDeface(`Belum ada list message yang terdaftar di group ini`)
            var arr_rows = [];
            for (let x of db_respon_list) {
                if (x.id === from) {
                    arr_rows.push({
                        title: x.key,
                        rowId: x.key
                    })
                }
            }
            var listMsg = {
                footerText: footxt,
                buttonText: 'Click Here!',
                description: 'Silahkan Pilih Produk Nya',
                sections: [{
                    title: groupName, rows: arr_rows
                }],
                listType: 1
            }
            mans.sendMessage(from, listMsg, MessageType.listMessage)
            break
case 'addlist':
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]                
            if (!q.includes("@")) return replyDeface(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n${command} tes@apa`)
            if (isAlreadyResponList(from, args1, db_respon_list)) return reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            if (isQuotedImage || isImage) {
                let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : m
                let media = await mans.downloadAndSaveMediaMessage(encmedia, `./media/${sender}`)
                const fd = new FormData();
                fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
                fetch('https://telegra.ph/upload', {
                    method: 'POST',
                    body: fd
                }).then(res => res.json())
                    .then((json) => {
                        addResponList(from, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
                        replyDeface(`Sukses set list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
                    })
            } else {
                addResponList(from, args1, args2, false, '-', db_respon_list)
                replyDeface(`Sukses set list message dengan key : *${args1}*`)
            }
            break*/
case 'autostickerpc':
            case 'autostikerpc':
      if (m.isGroup) return replyDeface('Command ini khusus chat pribadi!')
if (isBan) return replyDeface(mess.ban)
if (args.length < 1) return replyDeface('ketik autosticker enable untuk mengaktifkan\nketik autosticker disable untuk menonaktifkan')
if (args[0]  === 'enable'){
if (isAutoStick) return replyDeface(`Udah aktif`)
_autostick.push(from)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
replyDeface('autostickerpc aktif')
} else if (args[0] === 'disable'){
let anu = autosticker.indexOf(from)
_autostick.splice(anu, 1)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
replyDeface('autostickerpc nonaktif')
}
break
case 'sewa':
if (!q) return replyDeface(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[0] === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
replyDeface(`Success`)
} else if (args[0].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./database/sewa.json', JSON.stringify(sewa))
replyDeface(mess.success)
} else {
replyDeface(`Penggunaan :\n*${prefix}sewa* add/del waktu`)}
break
case 'sewalist': 
case 'listsewa':
let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvippsewa = ms(i.expired - Date.now())
txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
replyDeface(txtnyee)
break
case 'sewacheck':
case 'ceksewa': 
if (!m.isGroup) return replyDeface('khusus Grup')
if (!isSewa) return replyDeface(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let cekvipsewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s)`
replyDeface(sewanya)
break
case 'antilink': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!isBotAdmins) return replyDeface(mess.botAdmin)
if (!isAdmins && !isCreator) return replyDeface(mess.admin)
if (args.length < 1) return replyDeface('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "enable") {
if (AntiLink) return replyDeface('Sudah Aktif')
ntilink.push(from)
replyDeface('Succes menyalakan antilink di group ini')
var groupe = await mans.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
mans.sendMessage(from, {text: `PERINGATAN!!! jika bukan admin jangan send link di group ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "disable") {
if (!AntiLink) return replyDeface('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
replyDeface('Succes mematikan antilink di group ini')
} else {
replyDeface('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
break
case 'listonline': case 'listaktif': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
mans.sendText(m.chat, '     「 List Online 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case 'chat': {
if (!isCreator) return replyDeface(mess.owner)
if (!args.join(" ")) return replyDeface(`Example :\n${prefix + command} 62813xxxx|Woi`)
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
lolh = `*| CHAT FITUR |*

Pesan dari admin bot
Nomor : @${m.sender.split("@")[0]}
Pesan : ${pesny}`
mans.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:m})
}
await replyDeface("Succes")
break
case 'bcgroup': {
if (isBan) return replyDeface(mess.ban)
if (!isCreator) return replyDeface(mess.owner)
if (!m.quoted) return replyDeface("Reply pesan yang ingin di broadcast!")
let getGroups = await mans.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
replyDeface(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
quoted.copyNForward(i, true, {quoted:fgclink})
}
replyDeface(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
break
case 'bcall': {
if (isBan) return replyDeface(mess.ban)
if (!isCreator) return replyDeface(mess.owner)
if (!m.quoted) return replyDeface("Reply pesan yang ingin di broadcast!")
let anu = await store.chats.all().map(v => v.id)
replyDeface(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
quoted.copyNForward(yoi, true, {quoted:ftroli})
}
replyDeface('Sukses Broadcast')
}
break
case 'addupdate':{
                    if (!isCreator) return m.reply(mess.OnlyOwner)
                    if (!q) return m.reply(`Example: ${command} update fitur`)
                    _update.push(q)
                    fs.writeFileSync('./database/update.json', JSON.stringify(_update))
                    m.reply(`Done Desu`)
                    }
                    break
                case 'update':
                case 'cekupdate':{
                    let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`
                    for (let i of _update) {
                          updateList += `࿃ *${i.replace(_update)}*\n\n`
                    }
                    replyDeface(updateList)
                    }
                    break
case 'cowner': {
if (isBan) return replyDeface(mess.ban)
if (!isCreator) return replyDeface(mess.owner)
if (!args[0]) return replyDeface(`Pilih add atau del`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return replyDeface('User sudah menjadi owner')
owner.push(orgnye)
replyDeface(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return replyDeface('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
replyDeface(`Succes del friends`)
} else {
replyDeface("Error")
}
}
break
case 'block': {
		if (!isCreator) return replyNya(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await mans.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => replyDeface(jsonformat(err)))
	}
break
case 'unblock': {
		if (!isCreator) return replyNya(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await mans.updateBlockStatus(users, 'unblock').then((res) => replyDeface(jsonformat(res))).catch((err) => replyDeface(jsonformat(err)))
	}
	break
case 'ban': {
if (isBan) return replyDeface(mess.ban)
if (!isCreator) return replyDeface(mess.owner)
if (!args[0]) return replyDeface(`Pilih add atau del`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return replyDeface('User sudah dibanned')
banUser.push(orgnye)
replyDeface(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return replyDeface('User tidak dibanned')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replyDeface(`Succes delban`)
} else {
replyDeface("Error")
}
}
break
case 'request': {
if (isBan) return replyDeface(mess.ban)
if (!args.join(" ")) return replyDeface(`Example : ${prefix + command} min tambahin fitur downloader`)
teks = `*| REQUEST FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
mans.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
mans.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
case 'report': {
if (isBan) return replyDeface(mess.ban)
if (!args.join(" ")) return replyDeface(`Example : \n- ${prefix + command} fitur ig error min\n- ${prefix + command} user ini nyepam min`)
teks = `*| REPORT FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
mans.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
mans.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
case 'mcserver': case 'mcquery': {
if (isBan) return replyDeface(mess.ban)
if (!args.join(" ")) return replyDeface(`Example : \n${prefix + command} ip|port\nUses : \n${prefix + command} play.zackmans.com|19132`)
const Query = require("minecraft-query");

const qury = args.join(" ")
const iphost = qury.split("|")[0];
const portnya = qury.split("|")[1];

if (!iphost) return replyDeface("ipnya mana kak?")
if (!portnya) return replyDeface("portnya mana kak?")

const q = new Query({host: iphost, port: portnya, timeout: 7500});

q.fullStat()
.then(success => {
replyDeface(jsonformat(success));
return q.basicStat()
})
.then(success => {
replyDeface(jsonformat(success));
q.close();
})
}
break
case 'mcpedl': {
if (isBan) return replyDeface(mess.ban)
if (!args.join(" ")) return replyDeface(`Example : ${prefix + command} shader`)
yogipw.mcpedl(args.join(" ")).then(async(res) => {
teks = `*| MCPEDL SEARCH |*`
for (let i of res) {
teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: namebot,
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'happymod': {
if (isBan) return replyDeface(mess.ban)
if (!args.join(" ")) return replyDeface(`Example : ${prefix + command} mobile legend`)
yogipw.happymod(args.join(" ")).then(async(res) => {
teks = '```「 HappyMod Search 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: {url:res[0].icon},
jpegThumbnail: thum,
caption: teks,
footer: namebot,
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'searchgc': {
if (isBan) return replyDeface(mess.ban)
if (args.length < 1) return replyDeface(`Example :\n${prefix}searchgc Editor Berkelas`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttons = [
{buttonId: `ping`, buttonText: {displayText: 'Status'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: namebot,
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'servermc': {
if (isBan) return replyDeface(mess.ban)
yogipw.servermc().then(async(res) => {
let teks = '*| SERVER MC INDONESIA |*\n\nhttps://minecraftpocket-servers.com/country/indonesia/\n\n'
let no = 1
for (let i of res) {
teks += `▸ Server Ke ${no++}\nip : ${i.ip}\nport : ${i.port}\nversi : ${i.versi}\nplayer : ${i.player}\n\n`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: namebot,
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'anticall': {
if (isBan) return m.reply(mess.ban)
if (!isCreator) return
if (args.length < 1) return m.reply(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (anticals === true) return
global.anticals = true
m.reply(`Berhasil mengaktifkan anticall!`)
} else if (args[0] === 'off') {
if (anticals === false) return
global.anticals = false
m.reply(`Berhasil menonaktifkan anticall!`)
} else {
m.reply('Pilih on atau off')
}
}
break
case 'antitag': {
if (isBan) return replyDeface(mess.ban)
if (!isCreator) return
if (args.length < 1) return replyDeface(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (antitags === true) return
global.antitags = true
replyDeface(`Berhasil mengaktifkan antitag!`)
} else if (args[0] === 'off') {
if (antitags === false) return
global.antitags = false
replyDeface(`Berhasil menonaktifkan antitag!`)
} else {
replyDeface('Pilih on atau off')
}
}
break
case 'yts': case 'ytsearch': {
replyDeface(mess.wait)
if (isBan) return replyDeface(mess.ban)
if (!args.join(" ")) return replyDeface(`Example : ${prefix + command} dj 30 detik`)
let yts = require("yt-search")
let search = await yts(args.join(" "))
let teks = '*| YOUTUBE SEARCH |*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n─────────────────\n`
}
replyDeface(teks)
}
break
case 'infochat': {
if (isBan) return replyDeface(mess.ban)
if (!m.quoted) replyDeface('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return replyDeface('Pesan tersebut bukan dikirim oleh bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
mans.sendTextWithMentions(m.chat, teks, m)
}
break
case 'spamsms':
if (!isCreator) return replyDeface(mess.owner)
toti = args[0]
anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam1?apikey=${lolkey}&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam2?apikey=${lolkey}&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam3?apikey=${lolkey}&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam4?apikey=${lolkey}&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam5?apikey=${lolkey}&nomor=${toti}`)
					anu = await fetchJson(`http://api.lolhuman.xyz/api/sms/spam6?apikey=${lolkey}&nomor=${toti}`)
					replyDeface(anu.result)
					break
case 'setgconly':{
			  if (!itsMe && !isCreator) return replyDeface(mess.owner)
				  gconly = true
			  replyDeface('*Berhasil!*\n*Sekarang bot hanya merespon didalam grup!*')
			  }
			  break
			  case 'setpconly':{
			  if (!itsMe && !isCreator) return replyDeface(mess.owner)
				  pconly = true
			  replyDeface('*Berhasil!*\n*Sekarang bot hanya merespon didalam private chat!*')
			  }
			  break
			  case 'setall':{
			   if (!itsMe && !isCreator) return replyDeface(mess.owner)
				     gconly = false
				  pconly = false
			  replyDeface('*Berhasil!*\n*Sekarang bot merespon disemua pesan!*')
			  }
			  break
case 'setexif': {
               if (!isCreator) return replyDeface(mess.owner)
               if (!text) return replyDeface(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          replyDeface(`Exif berhasil diubah menjadi\n\n*Packname* : ${global.packname}\n*Author* : ${global.author}`)
            }
            break
case 'setname': case 'setsubject': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!isBotAdmins) return replyDeface(mess.botAdmin)
if (!isAdmins && !isCreator) return replyDeface(mess.admin)
if (!text) return replyDeface('Text ?')
await mans.groupUpdateSubject(m.chat, text).then((res) => replyDeface(mess.success)).catch((err) => replyDeface(jsonformat(err)))
}
break
case 'block': {
		if (!isCreator) return replyDeface(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await mans.updateBlockStatus(users, 'block').then((res) => replyDeface(jsonformat(res))).catch((err) => replyDeface(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) return replyDeface(mess.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await mans.updateBlockStatus(users, 'unblock').then((res) => replyDeface(jsonformat(res))).catch((err) => replyDeface(jsonformat(err)))
	}
	break
case 'setdesc': case 'setdesk': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!isBotAdmins) return replyDeface(mess.botAdmin)
if (!isAdmins && !isCreator) return replyDeface(mess.admin)
if (!text) return replyDeface('Text ?')
await mans.groupUpdateDescription(m.chat, text).then((res) => replyDeface(mess.success)).catch((err) => replyDeface(jsonformat(err)))
}
break
case 'setppbot': {
if (isBan) return replyDeface(mess.ban)
if (!isCreator) return replyDeface(mess.owner)
if (!quoted) return replyDeface(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return replyDeface(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return replyDeface(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await mans.downloadAndSaveMediaMessage(quoted)
await mans.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
replyDeface(mess.success)
}
break
case 'setppbot2':{
if (isBan) return replyDeface(mess.ban)
if (!isCreator) return replyDeface(mess.owner)
if (!quoted) return replyDeface(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return replyDeface(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return replyDeface(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await mans.downloadAndSaveMediaMessage(quoted)
if (args[0] == `'panjang'`) {
var { img } = await updateProfilePicture(media)
await mans.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(media)
m.reply(`Sukses`)
} else {
var memeg = await mans.updateProfilePicture(botNumber, { url: media })
fs.unlinkSync(media)
m.reply(`Sukses`)
}
}
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!isAdmins && !isCreator) return replyDeface(mess.admin)
if (!quoted) return replyDeface(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return replyDeface(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return replyDeface(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await mans.downloadAndSaveMediaMessage(quoted)
await mans.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
replyDeface(mess.success)
}
break
case 'tagall': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!isAdmins && !isCreator) return replyDeface(mess.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${args.join(" ") ? args.join(" ") : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
mans.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!isAdmins && !isCreator) return replyDeface(mess.admin)
mans.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: ftextt })
}
break

case 'sendvir':{
if (!args.join(" ")) return replyDeface(`Example :\n${prefix + command} 62813xxxx`)
const cpes = args.join(" ")
lolh = `${require('./src/virusv1.js').fardan(prefix, l, pushname)}`
mans.sendMessage(args + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:m})
await replyDeface("Succes Mengirim Virus")
}
break
case 'virustext': {
if (!isCreator) return replyDeface(mess.owner)
if (!m.isGroup) return replyDeface(mess.group)
if (!isAdmins && !isCreator) return replyDeface(mess.admin)
mans.sendMessage(m.chat, { text : `${require('./src/virusv1.js').fardan(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: m })
mans.sendMessage(m.chat, { text : `${require('./src/virusv1.js').fardan(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: m })
mans.sendMessage(m.chat, { text : `${require('./src/virusv1.js').fardan(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: m })
mans.sendMessage(m.chat, { text : `${require('./src/virusv1.js').fardan(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: m })
mans.sendMessage(m.chat, { text : `${require('./src/virusv1.js').fardan(prefix, l, pushname)}`, mentions: participants.map(a => a.id)}, { quoted: m })
}
break
case 'autoreadsw':
	if (!isCreator) return replyDeface(`Khusus Owner`)
	if (args[0] == 'on') {
		if (autoreadsw) return replyDeface('*Sudah aktif!*')
		autoreadsw = true
		replyDeface('*Berhasil mengaktifkan auto read sw*')
	} else if (args[0] == 'off') {
		if (!autoreadsw) return replyDeface('*Belum aktif!*')
		autoreadsw = false
		replyDeface('*Berhasil mematikan auto read sw*')
	} else {
		replyDeface('Pilih on atau off!')
	}
	break
case 'linkgroup': case 'linkgc': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
let response = await mans.groupInviteCode(m.chat)
mans.sendMessage(m.chat, {text:`Link Group ${groupMetadata.subject} : \nhttps://chat.whatsapp.com/${response}l`, "contextInfo": {
mimetype: "image/jpeg",
text: "FenZo||77+",
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `FenZo||77+`,
"body": `FenZo||77+`,
"previewType": "PHOTO",
"thumbnailUrl": thum,
"thumbnail": thum,
"sourceUrl": "https://youtube.com/watch?v=w6w0cy_1HY4"
}}}, { quoted: m, detectLink: true })
}
break
case 'revoke': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!isBotAdmins) return replyDeface(mess.botAdmin)
if (!isAdmins && !isCreator) return replyDeface(mess.admin)
mans.groupRevokeInvite(m.chat)
}
break
case 'ephemeral': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!isBotAdmins) return replyDeface(mess.botAdmin)
if (!isAdmins && !isCreator) return replyDeface(mess.admin)
if (!args[0]) return replyDeface('Masukkan value enable/disable')
if (args[0] === 'enable') {
await mans.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => replyDeface(jsonformat(res))).catch((err) => replyDeface(jsonformat(err)))
} else if (args[0] === 'disable') {
await mans.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => replyDeface(jsonformat(res))).catch((err) => replyDeface(jsonformat(err)))
}
}
break
case 'editinfo': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!isBotAdmins) return replyDeface(mess.botAdmin)
if (!isAdmins && !isCreator) return replyDeface(mess.admin)
if (args[0] === 'open'){
await mans.groupSettingUpdate(m.chat, 'unlocked').then((res) => replyDeface(`Sukses Membuka Edit Info Group`)).catch((err) => replyDeface(jsonformat(err)))
} else if (args[0] === 'close'){
await mans.groupSettingUpdate(m.chat, 'locked').then((res) => replyDeface(`Sukses Menutup Edit Info Group`)).catch((err) => replyDeface(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: `*「 Detected 」*\n\nChange Info, Select Open Or Close`,
footer: namebot,
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
}
}
break
case 'group': case 'grup': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!isBotAdmins) return replyDeface(mess.botAdmin)
if (!isAdmins && !isCreator) return replyDeface(mess.admin)
if (args[0] === 'close'){
await mans.groupSettingUpdate(m.chat, 'announcement').then((res) => replyDeface(`Sukses Menutup Group`)).catch((err) => replyDeface(jsonformat(err)))
} else if (args[0] === 'open'){
await mans.groupSettingUpdate(m.chat, 'not_announcement').then((res) => replyDeface(`Sukses Membuka Group`)).catch((err) => replyDeface(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: `\n\n*Change Group Setting, Select Open Or Close*\n\n`,
footer: namebot,
buttons: buttons,
headerType: 4
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
}
}
break
case 'promote': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!isBotAdmins) return replyDeface(mess.botAdmin)
if (!isAdmins && !isCreator) return replyDeface(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await mans.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => replyDeface(jsonformat(res))).catch((err) => replyDeface(jsonformat(err)))
}
break
case 'demote': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!isBotAdmins) return replyDeface(mess.botAdmin)
if (!isAdmins && !isCreator) return replyDeface(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await mans.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => replyDeface(jsonformat(res))).catch((err) => replyDeface(jsonformat(err)))
}
break
case 'kick': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!isBotAdmins) return replyDeface(mess.botAdmin)
if (!isAdmins && !isCreator) return replyDeface(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await mans.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => replyDeface(jsonformat(res))).catch((err) => replyDeface(jsonformat(err)))
}
break
case 'add': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!isBotAdmins) return replyDeface(mess.botAdmin)
if (!isAdmins && !isCreator) return replyDeface(mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await mans.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => replyDeface(jsonformat(res))).catch((err) => replyDeface(jsonformat(err)))
}
break
case 'inspect': {
if (!args[0]) return replyDeface("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return replyDeface("Link Invalid")
mans.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `     「 Group Link Inspector 」
▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
try {
pp = await mans.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
mans.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await mans.parseMention(tekse) })
})
}
break
case 'join': {
if (isCreator) return replyDeface(mess.owner)
if (!args[0]) return replyDeface("Linknya mana kak?")
vdd = args[0]
let vcc = vdd.split("https://chat.whatsapp.com/")[1]
if (!vcc) return replyDeface("Link invalid!")
if (isCreator) {
await mans.groupAcceptInvite(vcc).then(async(res) => replyDeface(jsonformat(res))).catch(_ => _)
replyDeface("Succes")
} else {
mans.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: vcc } }]
}).then(async(res) => {
sizny = res.content[0].attrs.size
if (sizny < 50) {
teks = `Maaf anggota group anda kurang dari 50, minimal agar bot join harus mempunyai lebih dari 50 anggota`
sendOrder(m.chat, teks, "5123658817728409", fs.readFileSync('./media/image/mans.jpg'), 2022, " ~ Multi Device", "6283155687629@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
} else if (sizny > 50) {
await mans.groupAcceptInvite(vcc).then(async(res) => replyDeface(jsonformat(res))).catch(_ => _)
replyDeface("Succes")
} else {
replyDeface("Error")
}
}).catch(_ => _)
}
}
break
case 'volume': {
if (isBan) return replyDeface(mess.ban)
if (!args.join(" ")) return replyDeface(`Example: ${prefix + command} 10`)
media = await mans.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replyDeface('Error!')
jadie = fs.readFileSync(rname)
mans.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replyDeface('Error!')
jadie = fs.readFileSync(rname)
mans.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
replyDeface("Kirim video/audio")
}
}
break
case 'tempo': {
if (isBan) return replyDeface(mess.ban)
if (!args.join(" ")) return replyDeface(`Example: ${prefix + command} 10`)
var req = args.join(' ')
media = await mans.downloadAndSaveMediaMessage(quoted, "tempo")
if (isQuotedAudio) {
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replyDeface('Error!')
hah = fs.readFileSync(ran)
mans.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replyDeface('Error!')
hah = fs.readFileSync(ran)
mans.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
fs.unlinkSync(ran)
})
} else {
replyDeface("Kirim video/audio")
}
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
                replyDeface(mess.wait)
                let media = await mans.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return replyDeface(err)
                let buff = fs.readFileSync(ran)
                mans.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else replyDeface(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                replyDeface(e)
                }
                break
case 'nulis': {
if (isBan) return replyDeface(mess.ban)
if (args.length < 1) return replyDeface(`Example :\n${prefix}nulis ${namebot}|91|#ff020a|Manusia terganteng adalah salman alfarizi`)
const nls = args.join(" ")
const nams = "Nama : " + nls.split("|")[0];
const kels = "Kelas : " + nls.split("|")[1];
const menlise = nls.split("|")[3];
const codewarn = nls.split("|")[2];
await replyDeface('Sedang menulis')
const jangkale = menlise.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangbare = jangkale.split('\n').slice(0, 30).join('\n')
const jangnam = nams.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangkel = kels.replace(/(\S+\s*){1,10}/g, '$&\n')
if (kels.length > 12) return replyDeface("Jumlah teks kelas maximal 4")
if (nams.length > 34) return replyDeface("Jumlah teks nama maximal 27")
if (codewarn.length > 7) return replyDeface("Jumlah teks warna maximal 7")
console.log('「 MENULIS 」Sedang dalam prosses')
spawn('convert', [
'./media/image/magernulis.jpg',
'-fill',
codewarn,
'-font',
'./media/font/nulis.ttf',
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'1',
'-annotate',
'+806+78',
janghar,
'-size',
'1024x784',
'-pointsize',
'18',
'-interline-spacing',
'1',
'-annotate',
'+806+102',
jangwak,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+90',
jangnam,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+110',
jangkel,
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'-7.5',
'-annotate',
'+344+146',
jangbare,
'./storage/hasilnulis.jpg'
])
.on('error', () => replyDeface('Error') )
.on('exit', () => {
mans.sendMessage(from, {image:fs.readFileSync('./storage/hasilnulis.jpg'), caption:'Succes'}, {quoted:m}).catch(() => replyDeface('```「 GAGAL 」Terjadi kesalahan dalam mengirim file```'))
})
exec(`npm i marker`)
}
break
case 'kalkulator': case 'kal': {
if (isBan) return replyDeface(mess.ban)
if (args.length < 1) return replyDeface(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
replyDeface('Error')
} else {
replyDeface(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
break
case 'setstatut':
case 'setbio':
if (!q) return replyDeface('Kirim perintah *#setstatus text*')
mans.setStatus(`${q}`)
break
case 'spam': {
if (isBan) return replyDeface(mess.ban)
if (!m.isGroup) return replyDeface(mess.group)
if (!m.quoted) return replyDeface("Reply pesanya!")
if (!args[0]) return replyDeface("Masukan jumlah spamnya")
if (!Number(args[0])) return reply("Hanya angka")
let jml = args[0]
if (isCreator) {
await sleep(1000)
for(let i=0;i<jml;i++){
quoted.copyNForward(m.chat, true)
}
} else {
replyDeface("Hanya bisa digunakan oleh owner bot")
}
}
break
case 'public': {
if (isBan) return replyDeface(mess.ban)
if (!isCreator) return replyDeface(mess.owner)
mans.public = true
replyDeface('Sukse Change To Public Usage')
//mans.setStatus(`Mode : Public Created By Fax`)
}
break
case 'self': {
if (isBan) return replyDeface(mess.ban)
if (!isCreator) return replyDeface(mess.owner)
mans.public = false
replyDeface('Sukses Change To Self Usage')
//mans.setStatus(`Mode : Self Created By Fax`)
}
break
case 'react': {
 reactionMessage = {
react: {
text: args[0],
key: { remoteJid: from, fromMe: false, id: quoted.id }
}
}
mans.sendMessage(from, reactionMessage)
}
break
case 'speed':case 'ping': case 'botstatus': case 'statusbot': {
if (isBan) return replyDeface(mess.ban)
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
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(os.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
replyDeface(respon)
}
break
case 'speedtest': {
            replyDeface('Testing Speed...')
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
        if (stdout.trim()) replyDeface(stdout)
        if (stderr.trim()) replyDeface(stderr)
            }
            }
            break
case 'toimage': case 'toimg': {
if (isBan) return replyDeface(mess.ban)
if (!m.quoted) return replyDeface('Reply Image')
if (!/webp/.test(mime)) return replyDeface(`balas stiker dengan caption *${prefix + command}*`)
replyDeface(mess.wait)
let media = await mans.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
mans.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
if (isBan) return replyDeface(mess.ban)
if (!m.quoted) return replyDeface('Reply Image')
if (!/webp/.test(mime)) return replyDeface(`balas stiker dengan caption *${prefix + command}*`)
replyDeface(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await mans.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await mans.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
if (isBan) return replyDeface(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return replyDeface(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
if (!m.quoted) return replyDeface(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
replyDeface(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
mans.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break

case 'tomp3': {
if (isBan) return replyDeface(mess.ban)
if (/document/.test(mime)) return replyDeface(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return replyDeface(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!m.quoted) return replyDeface(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
replyDeface(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
mans.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${mans.user.name} (${m.id}).mp3`}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
if (isBan) return replyDeface(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return replyDeface(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
if (!m.quoted) return replyDeface(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
replyDeface(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
mans.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
if (isBan) return replyDeface(mess.ban)
if (!m.quoted) return replyDeface('Reply Image')
if (!/webp/.test(mime)) return replyDeface(`balas stiker dengan caption *${prefix + command}*`)
replyDeface(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await mans.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await mans.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
//Cerpen Udh no api ygy by RZK
case 'cerpen-anak':{
let cerpe = await cerpen(`anak`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasadaerah':{
let cerpe = await cerpen(`bahasa daerah`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasainggris':{
let cerpe = await cerpen(`bahasa Inggris`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasajawa':{
let cerpe = await cerpen(`bahasa jawa`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-bahasasunda':{
let cerpe = await cerpen(`bahasa sunda`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-budaya':{
let cerpe = await cerpen(`budaya`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cinta':{
let cerpe = await cerpen(`cinta`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaislami':{
let cerpe = await cerpen(`cinta islami`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintapertama':{
let cerpe = await cerpen(`cinta pertama`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintaromantis':{
let cerpe = await cerpen(`cinta romantis`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasedih':{
let cerpe = await cerpen(`cinta sedih`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasegitiga':{
let cerpe = await cerpen(`Cinta segitiga`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasejati':{
let cerpe = await cerpen(`cinta sejati`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-galau':{
let cerpe = await cerpen(`galau`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-gokil':{
let cerpe = await cerpen(`gokil`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-inspiratif':{
let cerpe = await cerpen(`inspiratif`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-jepang':{
let cerpe = await cerpen(`jepang`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kehidupan':{
let cerpe = await cerpen(`kehidupan`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-keluarga':{
let cerpe = await cerpen(`keluarga`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kisahnyata':{
let cerpe = await cerpen(`kisah nyata`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-korea':{
let cerpe = await cerpen(`korea`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-kristen':{
let cerpe = await cerpen(`kristen`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-liburan':{
let cerpe = await cerpen(`liburan`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-malaysia':{
let cerpe = await cerpen(`malaysia`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-mengharukan':{
let cerpe = await cerpen(`mengharukan`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-misteri':{
let cerpe = await cerpen(`misteri`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-motivasi':{
let cerpe = await cerpen(`motivasi`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasihat':{
let cerpe = await cerpen(`nasihat`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-nasionalisme':{
let cerpe = await cerpen(`nasionalisme`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-olahraga':{
let cerpe = await cerpen(`olahraga`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-patahhati':{
let cerpe = await cerpen(`patah hati`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penantian':{
let cerpe = await cerpen(`penantian`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pendidikan':{
let cerpe = await cerpen(`pendidikan`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengalaman':{
let cerpe = await cerpen(`pengalaman pribadi`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-pengorbanan':{
let cerpe = await cerpen(`pengorbanan`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-penyesalan':{
let cerpe = await cerpen(`penyesalan`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perjuangan':{
let cerpe = await cerpen(`perjuangan`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-perpisahan':{
let cerpe = await cerpen(`perpisahan`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-persahabatan':{
let cerpe = await cerpen(`persahabatan`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-petualangan':{
let cerpe = await cerpen(`petualangan`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-ramadhan':{
let cerpe = await cerpen(`ramadhan`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-remaja':{
let cerpe = await cerpen(`remaja`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rindu':{
let cerpe = await cerpen(`rindu`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-rohani':{
let cerpe = await cerpen(`rohani`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-romantis':{
let cerpe = await cerpen(`romantis`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sastra':{
let cerpe = await cerpen(`sastra`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sedih':{
let cerpe = await cerpen(`sedih`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-sejarah':{
let cerpe = await cerpen(`sejarah`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-cintasegitiga':{
let cerpe = await cerpen(`Cinta segitiga`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-islami':{
let cerpe = await cerpen(`Cinta segitiga`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-galau':{
let cerpe = await cerpen(`galau`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-persahabatan':{
let cerpe = await cerpen(`persahabatan`)
        replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'cerpen-Pengorbanan':{
let cerpe = await cerpen(`Pengorbanan`)
replyDeface(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
break
case 'tourl':{
if (isBan) return replyDeface(mess.ban)
replyDeface(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await mans.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
replyDeface(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
replyDeface(util.format(anu))
}
await fs.unlinkSync(media)
}
break
case 'q': case 'quoted': {
if (isBan) return replyDeface(mess.ban)
if (!m.quoted) return replyDeface('Reply Pesannya!!')
let wokwol = await mans.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return replyDeface('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'getname': {
if (isBan) return replyDeface(mess.ban)
if (qtod === "true") {
namenye = await mans.getName(m.quoted.sender)
replyDeface(namenye)
} else if (qtod === "false") {
mans.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
break
case 'getpic': {
if (isBan) return replyDeface(mess.ban)
if (qtod === "true") {
try {
pporg = await mans.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
mans.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await mans.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
mans.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
break
case 'owner': case 'creator': {
mans.sendContact(m.chat, global.owner, m)
}
break
case 'translate': case 'terjemahan': {
if (isBan) return replyDeface(mess.ban)
if (!args.join(" ")) return replyDeface("Textnya?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=id&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
replyDeface(`🌐Translate : ${Detek}\n📘Hasil : ${Infoo}`)
}
break
case 'gimage': case 'gig': {
replyDeface(mess.wait)
if (isBan) return replyDeface(mess.ban)
if (!args[0]) return replyDeface("Mau cari gambar apa kak?")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*| GOOGLE IMAGE |*

🤠 Query : ${text}
🔗 Media Url : ${images}`,
footer: `${mans.user.name}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
showAdAttribution: true,
title:`Created By ${namebot}`,
body:`${mans.user.name}`,
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtube.com/watch?v=w6w0cy_1HY4",
sourceUrl: "https://youtube.com/watch?v=w6w0cy_1HY4"
}}
}
mans.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'google': {
replyDeface(mess.wait)
if (isBan) return replyDeface(mess.ban)
if (!args[0]) return replyDeface(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
let google = require('google-it')
google({'query': args.join(" ")}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `*Title* : ${g.title}\n`
teks += `*Description* : ${g.snippet}\n`
teks += `*Link* : ${g.link}\n\n────────────────────────\n\n`
} 
replyDeface(teks)
})
}
break
case 'igstory': case 'instagramstory': {
if (isBan) return replyDeface(mess.ban)
if (!isPrem) return replyPremium(mess.premium)
replyDeface(mess.wait)
if (!args[0]) return replyDeface(`Example :\n${prefix + command} salman_alfarizi_15`)
try {
hx.igstory(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM STORY |*\n\n⭔ Username : ${resed.user.username ? resed.user.name : "undefined"}\n⭔ Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Pilih media dibawah untuk mendownload_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: `${mans.user.name}`,
buttons: buttons,
headerType: 4
}
mans.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
replyDeface(String(err))
}
}
break
case 'igdl': case 'instagram': {
if (isBan) return replyDeface(mess.ban)
if (!args[0]) return replyDeface(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
try {
hx.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM DOWNLOADER |*\n\n⭔ Username : ${resed.user.username ? resed.user.name : "undefined"}\n⭔ Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Pilih media dibawah untuk mendownload_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: `${mans.user.name}`,
buttons: buttons,
headerType: 4
}
mans.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
replyDeface(String(err))
}
}
break
case 'ig': {
if (args[0] === "mp4") {
mans.sendMessage(from, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
mans.sendMessage(from, {image:{url:args[1]}, caption:'Done!'}, {quoted:m})
} else {
replyDeface(" Error! ")
}
}
break
case 'mp4' : {
if (isBan) return replyDeface(mess.ban)
if (!args[0]) return replyDeface("Linknya mana kak?")
try {
mans.sendMessage(from, {video:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title:"NOMOR BOT WHATSAPP, MULTI DEVICE TERBARU FITUR BERJIBUN - ZackMans",
body:`${mans.user.name}`,
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtube.com/watch?v=w6w0cy_1HY4",
sourceUrl: "https://youtube.com/watch?v=w6w0cy_1HY4"
}}}, {quoted:m})
} catch {
replyDeface("Linknya Error")
}
}
break
case 'jpeg': {
if (isBan) return replyDeface(mess.ban)
if (!args[0]) return replyDeface("Linknya mana kak?")
try {
mans.sendMessage(from, {image:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title:"NOMOR BOT WHATSAPP, MULTI DEVICE TERBARU FITUR BERJIBUN - ZackMans",
body:`${mans.user.name}`,
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtube.com/watch?v=w6w0cy_1HY4",
sourceUrl: "https://youtube.com/watch?v=w6w0cy_1HY4"
}}}, {quoted:m})
} catch {
replyDeface("Linknya Error")
}
}
break
case 'twitter': case 'twdl': case 'twmp4': {
if (!isPrem) return replyPremium(mess.premium)
 replyDeface(mess.wait)
if (isBan) return replyDeface(mess.ban)
if (!args[0]) return replyDeface(`Example :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
try {
let lotwit = await aiovideodl(args[0])
teks = `*| TWITTER DOWNLOADER |*

Caption : ${lotwit.title ? lotwit.title : "undefined"}
Type : ${lotwit.medias[1].extension}
Size : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}

_Pilih kualitas video dibawah dengan cara mengklik tombolnya_`
let buttons = [
{buttonId: `twddl ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `twddl ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: `${mans.user.name}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${mans.user.name}`,
body:lotwit.title ? lotwit.title : "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
mans.sendMessage(from, buttonMessage, {quoted:m})
} catch {
replyDeface(" Link Error!")
}
}
break
case 'twddl': {
if (isBan) return replyDeface(mess.ban)
if (!isPrem) return replyPremium(mess.premium)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: namebot,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Twitter Downloader",
body: "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
mans.sendMessage(from, buttonMessage, {quoted:m})
}
break
case 'getcase':
if (!isCreator) return replyDeface(mess.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("fenzo77.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replyDeface(`${getCase(q)}`)
break
case 'facebook': case 'fbdl': case 'fbmp4': case 'fb': {
if (isBan) return replyDeface(mess.ban)
if (!isPrem) return replyPremium(mess.premium)
if (!args[0]) return replyDeface(`Example :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
try {
let resd = await aiovideodl(args[0])
teks = `*| FACEBOOK DOWNLOADER |*

Type : video/${resd.medias[0].extension}
Quality : ${resd.medias[0].quality}
Size : ${resd.medias[0].formattedSize}

_Untuk kualitas hd anda bisa klik tombol dibawah_`
let buttons = [
{buttonId: `fbddl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.medias[0].url},
caption: teks,
footer: namebot,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Facebook Downloader",
body:"facebook downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
mans.sendMessage(from, buttonMessage, {quoted:m})
} catch {
replyDeface("Link invalid!")
}
}
break
case 'fbddl': {
 replyDeface(mess.wait)
if (isBan) return replyDeface(mess.ban)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: namebot,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Facebook Downloader",
body: " Facebook Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
mans.sendMessage(from, buttonMessage, {quoted:m})
}
break
case 'tiktokaudio':
case 'tiktokmusic':{
  if (!q) return replyDeface('Linknya?')
  if (!q.includes('tiktok')) return replyDeface('Itu bukan link tiktok!')
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 replyDeface(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_a = musim_rambutan.result.nowatermark
    mans.sendMessage(from, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break

  case 'tiktok':{
  if (isBan) return replyDeface(mess.ban)
  if (!q) return replyDeface('Linknya?')
  replyDeface(mess.wait)
  if (!q.includes('tiktok')) return replyDeface('Itu bukan link tiktok!')
   textt = `



*TIKTOK DOWNLOAD*

  ████████▀▀▀████
  ████████────▀██
  ████████──█▄──█
  ███▀▀▀██──█████
  █▀──▄▄██──█████
  █──█████──█████
  █▄──▀▀▀──▄█████
  ███▄▄▄▄▄███████



 `
let butRun = [
        	{ urlButton: { displayText: `Sourcode`, url : `${q}` } },
        	{ urlButton: { displayText: `Tiktok Download`, url : `Ketik Button Di Bawah` } },
            { urlButton: { displayText: ``, url: `+62 815-2394-0672` } },
            { quickReplyButton: { displayText: `🍂 No Watermark`, id: `tiktoknowm ${q}`} },
            { quickReplyButton: { displayText: `🎧 Audio`, id: `tiktokmusic ${q}`} }
        	]
        	mans.sendMessage(m.chat, { caption: textt, document: { url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx' }, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: namebot, templateButtons: butRun, footer: `Succes Mendapatkan Database, Silahkan Pilih Metode Di Bawah`, mentions: [m.sender] })
        	}
        	break
  break
  case 'tiktoknowm':{
  if (isBan) return replyDeface(`Kamu Di Ban`)
  if (!q) return replyDeface('Linknya?')
  replyDeface(mess.wait)
  if (!q.includes('tiktok')) return replyDeface('Itu bukan link tiktok!')
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 replyDeface(pesan.eror) 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.result.nowatermark
      textt = `


_*TIKTOK DOWNLOADER BY FARDAN*_

  ████████▀▀▀████
  ████████────▀██
  ████████──█▄──█
  ███▀▀▀██──█████
  █▀──▄▄██──█████
  █──█████──█████
  █▄──▀▀▀──▄█████
  ███▄▄▄▄▄███████


_Jangan Lupa Donasi Iya Biar Bot Online Terus

 `
    mans.sendMessage(from, { video: { url: musim_duren_v }, caption: textt, }, { quoted: m })
   }
  break

case 'jooxplay':
 replyDeface(mess.wait)
if (isBan) return replyDeface(mess.ban)
            if (args.length == 0) return m.reply(`Example: ${prefix + command} Melukis Senja`)
            axios.get(`https://api.lolhuman.xyz/api/jooxplay?apikey=${lolkey}&query=${args}`).then(({ data }) => {
                var caption = `≻ Title : ${data.result.info.song}\n`
                caption += `≻ Artists : ${data.result.info.singer}\n`
                caption += `≻ Duration : ${data.result.info.duration}\n`
                caption += `≻ Album : ${data.result.info.album}\n`
                caption += `≻ Uploaded : ${data.result.info.date}\n`
                caption += `≻ Lirik :\n ${data.result.lirik}\n`
                mans.sendMessage(from, { image: { url: data.result.image }, caption }).then(() => {
                mans.sendMessage(from, { audio: { url: data.result.audio[0].link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3`, ptt: true })
                })
            })
            break
case 'play': case 'ytplay': {
 replyDeface(mess.wait)
if (isBan) return replyDeface(mess.ban)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let ytvc = await hx.youtube(anu.url)
                let qqppp = [{
                    "buttonId": `${prefix}ytmp4 ${anu.url}`,
                    "buttonText": {
                        "displayText": "VIDEO"
                    },
                    "type": "RESPONSE"
                },
                {
                    "buttonId": `${prefix}ytmp35 ${anu.url}`,
                    "buttonText": {
                        "displayText": "AUDIO"
                    },
                    "type": "RESPONSE"
                }]
                mans.sendMessage(from, {
            caption: `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE PLAY*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶


\`\`\`Title : ${anu.title}\`\`\`
\`\`\`Ext : Search\`\`\`
\`\`\`ID : ${anu.videoId}\`\`\`
\`\`\`Duration : ${anu.timestamp}\`\`\`
\`\`\`Viewers : ${anu.views}\`\`\`
\`\`\`Upload At : ${anu.ago}\`\`\`
\`\`\`Author : ${anu.author.name}\`\`\`
\`\`\`Channel : ${anu.author.url}\`\`\`
\`\`\`Description : ${anu.description}\`\`\`
\`\`\`Url : ${anu.url}\`\`\``,
            location: {
                jpegThumbnail: await reSize(anu.thumbnail, 300,300)
            },
            buttons: qqppp,
            footer: `Silahkan Pilih Metode Yang Telah Di sediakan`,
            mentions:[m.sender]
        },
    )
}
                break
case 'ytmp35':
 replyDeface(mess.wait)
if (isBan) return replyDeface(mess.ban)
            if (args.length == 0) return replyDeface(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
            axios
                .get(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkey}&url=${args[0]}`)
                .then(({ data }) => {
                    var caption = `≻  Title    : *${data.result.title}*\n`
                    caption += `≻  Size     : *${data.result.size}*`
                    mans.sendMessage(from, { image: { url: data.result.thumbnail }, caption }).then(() => {
                        mans.sendMessage(from, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3`, ptt: true })
                    })
                })
                .catch(console.error)
            break
case 'spotify':
if (isBan) return replyDeface(mess.ban)
            if (args.length == 0) return m.reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
            axios.get(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${args[0]}`).then(({ data }) => {
                var caption = `Title : ${data.result.title}\n`
                caption += `Artists : ${data.result.artists}\n`
                caption += `Duration : ${data.result.duration}\n`
                caption += `Popularity : ${data.result.popularity}\n`
                caption += `Preview : ${data.result.preview_url}\n`
                mans.sendMessage(from, { image: { url: data.result.thumbnail }, caption }).then(() => {
                mans.sendMessage(from, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3`, ptt: true })
                })
            })
            break
        case 'spotifysearch':
        if (isBan) return replyDeface(mess.ban)
            if (args.length == 0) return m.reply(`Example: ${prefix + command} Melukis Senja`)
            axios.get(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${args}`).then(({ data }) => {
                var text = ''
                for (var x of data.result) {
                    text += `Title : ${x.title}\n`
                    text += `Artists : ${x.artists}\n`
                    text += `Duration : ${x.duration}\n`
                    text += `Link : ${x.link}\n`
                    text += `Preview : ${x.preview_url}\n\n\n`
                }
                m.reply(text)
            })
            break
        case 'ytmp45':
            if (args.length == 0) return replyDeface(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
            axios
                .get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkey}&url=${args[0]}`)
                .then(({ data }) => {
                    var caption = `≻  Title    : *${data.result.title}*\n`
                    caption += `≻  Size     : *${data.result.size}*`
                    mans.sendMessage(from, { image: { url: data.result.thumbnail }, caption }).then(() => {
                        mans.sendMessage(from, { audio: { url: data.result.link }, mimetype: 'video/mp4', fileName: `${data.result.title}.mp4` })
                    })
                })
                .catch(console.error)
            break
case 'ytmp3':
case 'youtubemp3':{
if (isBan) return replyDeface(mess.ban)
replyDeface(mess.wait)
if (args.length < 1) return replyDeface('linknya?')
try{
    await yta(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      mans.sendMessage(from, { audio: { url: dl_link }, mimetype: 'audio/mp4', contextInfo: {
"externalAdReply": { 
"title" : global.namabot,
"mediaType" : 1,
"renderLargerThumbnail" : true , 
"showAdAttribution": true, 
"jpegThumbnail": log0,
"mediaUrl": global.linkgrupss, 
"thumbnail": log0,
"sourceUrl" : global.linkgrupss 
}}
           },{ quoted : m })
      })
     
})
     } catch (e){
    replyDeface(from, `Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain`, { quoted : m })
   }
  }
  break
  case 'ytmp4':
  case 'youtubemp4':{
if (isBan) return replyDeface(mess.ban)
if (!isPrem) return replyPremium(mess.premium)
replyDeface(mess.wait)
  if (args.length < 1) return reply('linknya?')
   try{
    await ytv(args[0])
.then((res) => {
     const { dl_link } = res
      axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then((a) => {
   
      mans.sendMessage(from, { video: { url: dl_link }, caption: "Created By wa.me/6281523940672" }, { quoted: m })
      })
     
})
     } catch (e){
    replyDeface(from, `Akses ditolak, tidak dapat mengunduh!. Cobalah menggunakan link yang lain`, { quoted : m })
   }
  }
  break
case 'playmp4':{
if (isBan) return replyDeface(mess.ban)
if (!q) return replyDeface('Kirim perintah *#playmp4 judul*')
mp43 = await fetchJson(`https://api.vynnshome.xyz/api/yt/playmp4?query=${q}&apikey=VynnsHome`)
linkk = `${mp43.url}`
mp45 = `*| PLAY DOWNLOADER |*

title : ${mp43.title}
published : ${mp43.published}
channel : ${mp43.channel}
views : ${mp43.views}

Silahkan Tunggu Beberapa Detik`
mp44 = await getBuffer(`https://fatiharridho.herokuapp.com/api/tools/reSize?url=${mp43.thumb}`)
                let qqppp = [{
                    "buttonId": `${prefix}playmp3 ${q}`,
                    "buttonText": {
                        "displayText": "Search Results"
                    },
                    "type": "RESPONSE"
                }]
                mans.sendMessage(from, {
            caption: mp45,
            location: {
                jpegThumbnail: mp44
            },
            buttons: qqppp,
            footer: `Created By ${namebot}`,
            mentions:[m.sender]
        },
    )
    mans.sendMessage(from, { video: { url: linkk }, caption: "Succes" }, { quoted: m })
}
                break
case 'playmp3':{
if (isBan) return replyDeface(mess.ban)
if (!q) return replyDeface('Kirim perintah *#playmp3 judul*')
mp43 = await fetchJson(`https://api.vynnshome.xyz/api/yt/playmp3?query=${q}&apikey=VynnsHome`)
linkk = `${mp43.url}`
mp45 = `*| PLAY DOWNLOADER |*

title : ${mp43.title}
published : ${mp43.published}
channel : ${mp43.channel}
views : ${mp43.views}

Silahkan Tunggu Beberapa Detik`
mp44 = await getBuffer(`https://fatiharridho.herokuapp.com/api/tools/reSize?url=${mp43.thumb}`)
                let qqppp = [{
                    "buttonId": `${prefix}playmp4 ${q}`,
                    "buttonText": {
                        "displayText": "Search Video"
                    },
                    "type": "RESPONSE"
                }]
                mans.sendMessage(from, {
            caption: mp45,
            location: {
                jpegThumbnail: mp44
            },
            buttons: qqppp,
            footer: `Created By ${namebot}`,
            mentions:[m.sender]
        },
    )
    mans.sendMessage(from, { audio: { url: linkk }, mimetype: 'audio/mp4', contextInfo: {
"externalAdReply": { 
"title" : global.namabot,
"mediaType" : 1,
"renderLargerThumbnail" : true , 
"showAdAttribution": true, 
"jpegThumbnail": log0,
"mediaUrl": global.linkgrupss, 
"thumbnail": log0,
"sourceUrl" : global.linkgrupss 
}}
           },{ quoted : m })
           }
                break
case 'pixiv':
if (isBan) return replyDeface(mess.ban)
if (args.length == 0) return m.reply(`Example: ${prefix + command} loli kawaii`)
mans.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/pixiv?apikey=${lolkey}&query=${args}` } })
break
case 'pixivdl':
if (isBan) return replyDeface(mess.ban)
if (args.length == 0) return m.reply(`Example: ${prefix + command} 63456028`)
mans.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/pixivdl/${args[0]}?apikey=${lolkey}` } })
break
case 'pin':
case 'pinterest': {
if (isBan) return replyDeface(mess.ban)
                replyDeface(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                mans.sendMessage(m.chat, { image: { url: result }, caption: ' ➭ Media Url : '+result }, { quoted: m })
            }
            break
case 'ytdl': case 'yt': case 'youtube':{
 replyDeface(mess.wait)
if (isBan) return replyDeface(mess.ban)
if (!args[0]) return replyDeface(mess.linkm)
try {
hx.youtube(args[0]).then(async(res) => {
textyt = `*── 「 YOUTUBE DOWNLOAD 」 ──*

❏ Title : ${res.title}
❏ Size : ${res.size}
❏ Quality : ${res.quality}

_Pilih video atau audio dan tunggu beberapa saat_`
let buttons = [
{buttonId: `.ytmp4 ${res.link}`, buttonText: {displayText: 'VIDEO'}, type: 1},
{buttonId: `.ytmp3 ${res.link}`, buttonText: {displayText: 'AUDIO'}, type: 1}
]
let buttonMessage = {
image: {url:res.thumb},
caption: textyt,
footer: namebot,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: res.title,
body: namebot,
thumbnail: {url:res.thumb},
mediaType:2,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
mans.sendMessage(from, buttonMessage, {quoted:m})
}).catch(_ => _)
} catch {
replyDeface("Linknya Error!")
}
}
break
case 'couple': {
                replyDeface(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                mans.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
                mans.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
            }
	    break
case 'asupan':
if (isBan) return replyDeface(mess.ban)
replyDeface(mess.wait)
teks = `nih Kak >\\<`
buffer = await fetchJson(`https://api.lolhuman.xyz/api/asupan?apikey=ThadzBotZ`)
bufferr = `${buffer.result}`
mans.sendMessage(from, {video:{url:bufferr}, mimetype:"video/mp4", caption:"Success"}, {quoted:m})
break
case 'asupanukhty':
case 'asupan-ukhty':
 replyDeface(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.dapuhy.xyz/api/asupan/asupanukhty?apikey=0gly81wDky`
mans.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:`$namebot}`}, {quoted:m})
break
case 'asupan-santuy':
case 'asupansantuy':
 replyDeface(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/santuy`
mans.sendMessage(from, {video:{url:buffer}, mimetype:"video/mp4", caption:"Done"}, {quoted:m})
break
case 'hijaber':
 replyDeface(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/hijaber`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-indo':
 replyDeface(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/indonesia`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-malaysia':
 replyDeface(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/malaysia`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-thai':
 replyDeface(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/thailand`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-vietnam':
if (isBan) return replyDeface(mess.ban)
 replyDeface(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/vietnam`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-korea':
 replyDeface(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/korea`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan-jepan':
 replyDeface(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/japan`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'cecan':
 replyDeface(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/asupan/cecan`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'darkjokes':
 replyDeface(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/randomimg/darkjokes`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'meme':
replyDeface(mess.wait)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/randomimg/meme`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'fakta-unik':
 replyDeface(mess.wait)
tes = await fetchJson(`https://api.zacros.my.id/randomtext/faktaunik`)
teks = tes.result
mans.sendMessage(from, {image:{url:buffer}, caption:teks}, {quoted:m})
break
case 'quotes':
tes = await fetchJson(`https://api.zacros.my.id/randomtext/quotes`)
teks = tes.result.quotes
replyDeface(teks)
break
case 'fml':
tes = await fetchJson(`https://api.zacros.my.id/randomtext/fml`)
teks = tes.result
replyDeface(teks)
break
case 'cerpen':{
if (isBan) return replyDeface(mess.ban)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/cerpen?apikey=${lolkey}`)
var textt = `Title : ${data.result.title}\n`
textt += `Creator : ${data.result.creator}\n`
textt += `Story :\n${data.result.cerpen}`
m.reply(textt)
}
break
case 'katagalau':
tes = await fetchJson(`https://api.zacros.my.id/randomtext/katagalau`)
teks = tes.result
replyDeface(teks)
break
case 'truth':{
if (isBan) return replyDeface(mess.ban)
tes = await fetchJson(`https://api.zacros.my.id/randomtext/truth`)
let buttons = [
                    {buttonId: `dare`, buttonText: {displayText: 'Dare 🎯'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/8a021d10cc8ed0d94fcdb.jpg' },
                    caption: `${tes.result}`,
                    footer: `Truth Or Dare??\nClick Button`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
       }
            break
case 'dare':{
if (isBan) return replyDeface(mess.ban)
tes = await fetchJson(`https://api.zacros.my.id/randomtext/dare`)
teks = tes.result
let buttons = [
                    {buttonId: `dare`, buttonText: {displayText: 'Truth 🎯'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://telegra.ph/file/8a021d10cc8ed0d94fcdb.jpg' },
                    caption: `${tes.result}`,
                    footer: `Truth Or Dare??\nClick Button`,
                    buttons: buttons,
                    headerType: 4
                }
                mans.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
//NEW 
case 'fotobts':
if (isBan) return replyDeface(mess.ban)
teks = `nih Kak >\\<`
buffer = `https://api.dapuhy.xyz/api/randomimage/batues?apikey=0gly81wDky`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break




//NEEWW
case 'waifu':{
ono = fs.readFileSync('./lib/waifu.json')
jsonData = JSON.parse(ono)
randIndex = Math.floor(Math.random() * jsonData.length)
randKey = jsonData[randIndex]
buffer = `${randKey.image}`
teks = `*${randKey.teks}*`
mans.sendMessage(from, {image:{url:buffer}, caption: teks}, {quoted:m})
}
break
case 'cosplay':
if (isBan) return replyDeface(mess.ban)
teks = `nih Kak >\\<`
buffer = `https://api.zacros.my.id/randomimg/cosplay`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'leave': {
if (!isCreator) throw mess.owner
await mans.groupLeave(m.chat).then((res) => replyDeface(jsonformat(res))).catch((err) => replyDeface(jsonformat(err)))
}
break
case 'swm': case 'stickerwm': {
 replyDeface(mess.wait)
if (isBan) return replyDeface(mess.ban)
if (!args.join(" ")) return replyDeface(`Example :\nswm ${namebot}| Pack`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
mans.downloadAndSaveMediaMessage(quoted, "gifee")
mans.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await mans.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyDeface('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await mans.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
replyDeface(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break
// Foto Editing bruda 
case '1977':
case 'aden':
case 'brannan':
case 'brooklyn':
case 'clarendon':
case 'gingham':
case 'hudson':
case 'inkwell':
case 'earlybird':
case 'kelvin':
case 'lark':
case 'lofi':
case 'maven':
case 'mayfair':
case 'moon':
case 'nashville':
case 'perpetua':
case 'reyes':
case 'rise':
case 'slumber':
case 'stinson':
case 'toaster':
case 'valencia':
case 'walden':
case 'willow':
case 'xpro2':{
replyDeface(mess.wait)
if (isBan) return replyDeface(mess.ban)
if (/image/.test(mime)) {
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fattGanss = await floNime(dwnld)
let pal = `https://api.lolhuman.xyz/api/filter/${command}?apikey=${lolkey}&img=${fattGanss.result.url}`
mans.sendMessage(from, {image:{url:pal}, caption:"Done!"}, {quoted:m})
} else {
replyDeface(`Kirim gambar dengan caption ${prefix}${command} atau tag gambar yang sudah dikirim`)
}
}
    break
case 'invert':
case 'imageinvert':{
replyDeface(mess.wait)
if (isBan) return replyDeface(mess.ban)
if (/image/.test(mime)) {
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGanss = await floNime(dwnld)
buffer = `http://api.lolhuman.xyz/api/editor/invert?apikey=${lolkey}&img=${fatGanss.result.url}`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
}
}
break
case 'nulis2':
if (isBan) return replyDeface(mess.ban)
replyDeface(mess.wait)
anu = `https://api.lolhuman.xyz/api/nulis?apikey=$lolkey}&text=${q}`
mans.sendMessage(from, {image:{url:anu}, caption:"Done!"}, {quoted:m})
break
case 'tololserti':
if (isBan) return replyDeface(mess.ban)
replyDeface(mess.wait)
anu = `http://api.lolhuman.xyz/api/toloserti?apikey=${lolkey}&name=${q}`
mans.sendMessage(from, {image:{url:anu}, caption:"Done!"}, {quoted:m})
break
case 'bucinserti':
if (isBan) return replyDeface(mess.ban)
if (!q) return replyDeface('Kirim perintah *#bucinserti judul*')
replyDeface(mess.wait)
anu = `https://api.lolhuman.xyz/api/bucinserti?apikey=${lolkey}&name=${q}`
mans.sendMessage(from, {image:{url:anu}, caption:"Done!"}, {quoted:m})
break
case 'goodboy':
if (isBan) return replyDeface(mess.ban)
if (!q) return replyDeface('Kirim perintah *#bucinserti judul*')
replyDeface(mess.wait)
anu = `https://api.lolhuman.xyz/api/goodboy?apikey=${lolkey}&name=${q}`
mans.sendMessage(from, {image:{url:anu}, caption:"Done!"}, {quoted:m})
break
case 'imagetrash':
case 'trash':{
replyDeface(mess.wait)
if (isBan) return replyDeface(mess.ban)
if (/image/.test(mime)) {
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGa = await floNime(dwnld)
buffer = `https://api.dhamzxploit.my.id/api/canvas/trash?url=${fatGa.result.url}`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
}
}
break
case 'wasted':
case 'imagewasted':{
replyDeface(mess.wait)
if (isBan) return replyDeface(mess.ban)
if (/image/.test(mime)) {
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGa = await floNime(dwnld)
buffer = `https://api.lolhuman.xyz/api/editor/wasted?apikey=${lolkey}&img=${fatGa.result.url}`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
}
}
break
case 'jail':{
replyDeface(mess.wait)
if (isBan) return replyDeface(mess.ban)
if (/image/.test(mime)) {
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGan = await floNime(dwnld)
buffer = `https://api.lolhuman.xyz/api/editor/jail?apikey=${lolkey}&img=${fatGan.result.url}`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
}
}
break
case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        replyDeface(mess.wait)
            atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
	        let FaTiH = await mans.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
	        await fs.unlinkSync(FaTiH)
            }
	       break
case 'sticker': case 's': {
addCmds(`${prefix}sticker`)
if (isBan) return replyDeface(mess.ban)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await mans.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return replyDeface('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await mans.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
replyDeface(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
break

// NEW FITUR INTERNET
case 'detiknews': case 'detik':{
  if (args.length < 1) return replyDeface(from, 'Cari berita apa?', { quoted : m } )
  const aku_biji = await detikNews(args.join(' ')).catch(e => console.log("Undefined"))
  console.log(aku_biji)   
  let sections = []   
  for (let i = 0; i < aku_biji.length; i++) {
  const list = {title: `Result detik news ${i + 1}`,
  rows: [
	    {
	     title: `${aku_biji[i].Title}`, 
	     rowId: `#google ${aku_biji[i].Link}`,
	     description: ``
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  mans.sendMessage(
      from, 
      {
       text: "Cari berita di detik.com",
       footer: "Fardan Xwer",
       title: "[ Data Data Yang Kami Dapatkan Dari detik.com 🔎 ]",
       buttonText: "Click and see search results➡️",
       sections
      }, { quoted : m }
    )  
   }
  break
case 'wiki':
if (args.length < 1) return replyDeface(' Yang Mau Di Cari Apa? ')
const res2 = await wikiSearch(q).catch(e => {
return replyDeface('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
const result2 = `*Judul :* ${res2[0].judul}\n*Wiki :* ${res2[0].wiki}`
mans.sendMessage(from, { image : { url : res2[0].thumb }, caption : result2}) 
break
case 'gempa':
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Waktu : ${Waktu}\nLintang : ${Lintang}\nBujur : ${Bujur}\nWilayah : ${Wilayah}`
mans.sendMessage(from, { image : { url : Map }, caption : captt})
break
case 'covidindo':
case 'covid':{
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
mans.sendMessage(from, {text : `Kasus : ${kasus}\n\nKematian : ${kematian}\n\nSembuh : ${sembuh}`}, m)
}
break
case 'jadwaltv':{
if (isBan) return replyDeface(mess.ban)
if (!q) return replyDeface('Kirim perintah *#jadwaltv [channel]*')
replyDeface(await jadwaltv(q))
}
break
case 'cnn':{
if (isBan) return replyDeface(mess.ban)
var { data } = await axios.get(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=${lolkey}`)
            var textt = 'Result :\n'
            for (var x of data.result) {
                textt += `≻ Judul : ${x.judul}\n`
                textt += `≻ Link : ${x.link}\n`
                textt += `≻ Tipe : ${x.tipe}\n`
                textt += `≻ Published : ${x.waktu}\n\n`
            }
            replyDeface(textt)
}
break
case 'playstore': case 'apk':{
if (isBan) return replyDeface(mess.ban)
if(!q) return replyDeface('lu nyari apa?')
let play = await hx.playstore(q)
let storee = '❉─────────────────────❉\n'
for (let i of play){
storee += `\n*「 *PLAY STORE* 」\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
}
replyDeface(storee)
}
break
//FITUR ISLAMIC
case 'kisahnabi':{
if (isBan) return replyDeface(mess.ban)
if (args.length == 0) return m.reply(`Example: ${prefix + command} Muhammad`)
axios
.get(`https://api.lolhuman.xyz/api/kisahnabi/${args}?apikey=${lolkey}`)
.then(({ data }) => {
var text = `Name : ${data.result.name}\n`
text += `Lahir : ${data.result.thn_kelahiran}\n`
text += `Umur : ${data.result.age}\n`
text += `Tempat : ${data.result.place}\n`
text += `Story : \n${data.result.story}`
m.reply(text)
})
.catch(console.error)
}
break
case 'iqra': {
if (isBan) return replyDeface(mess.ban)
		oh = `Example : ${prefix + command} 3\n\nIQRA Yang tersedia : 1,2,3,4,5,6`
		if (!text) return oh
		yy = await getBuffer(`https://islamic-api-indonesia.herokuapp.com/api/data/pdf/iqra${text}`)
		mans.sendMessage(m.chat, {document: yy, mimetype: 'application/pdf', fileName: `iqra${text}.pdf ${namebot}`}, {quoted:m}).catch ((err) => replyDeface(oh))
		}
		break
		case 'juzamma': {
		if (isBan) return replyDeface(mess.ban)
		if (args[0] === 'pdf') {
		replyDeface(mess.wait)
		mans.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pdf'}, mimetype: 'application/pdf', fileName: 'juz-amma-arab-latin-indonesia.pdf'}, {quoted:m})
		} else if (args[0] === 'docx') {
		replyDeface(mess.wait)
		mans.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.docx'}, mimetype: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', fileName: 'juz-amma-arab-latin-indonesia.docx'}, {quoted:m})
		} else if (args[0] === 'pptx') {
		replyDeface(mess.wait)
		mans.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.pptx'}, mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation', fileName: 'juz-amma-arab-latin-indonesia.pptx'}, {quoted:m})
		} else if (args[0] === 'xlsx') {
		replyDeface(mess.wait)
		mans.sendMessage(m.chat, {document: {url: 'https://fatiharridho.my.id/database/islam/juz-amma-arab-latin-indonesia.xlsx'}, mimetype: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', fileName: 'juz-amma-arab-latin-indonesia.xlsx'}, {quoted:m})
		} else {
		replyDeface(`Mau format apa ? Example : ${prefix + command} pdf

Format yang tersedia : pdf, docx, pptx, xlsx`)
		}
		}
		break
		case 'hadis': case 'hadist': {
		if (isBan) return replyDeface(mess.ban)
		if (!args[0]) return replyDeface(`Contoh:
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
ibu-majah
1 - 4331
nasai
1 - 5662
malik
1 - 1594
muslim
1 - 5362`)
		if (!args[1]) return replyDeface(`Hadis yang ke berapa?\n\ncontoh:\n${prefix + command} muslim 1`)
		try {
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/json/hadith/${args[0]}`)
		let { number, arab, id } = res.find(v => v.number == args[1])
		replyDeface(`No. ${number}

${arab}

${id}`)
		} catch (e) {
		replyDeface(`Hadis tidak ditemukan !`)
		}
		}
		break
		case 'alquran': {
		if (isBan) return replyDeface(mess.ban)
		if (!args[0]) return replyDeface(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
		if (!args[1]) return replyDeface(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `*Arab* : ${res.result.data.text.arab}
*English* : ${res.result.data.translation.en}
*Indonesia* : ${res.result.data.translation.id}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		replyDeface(txt)
		mans.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
		}
		break
		case 'tafsirsurah': {
		if (isBan) return replyDeface(mess.ban)
		if (!args[0]) return replyDeface(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
		if (!args[1]) return replyDeface(`Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`)
		let res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
		let txt = `「 *Tafsir Surah*  」

*Pendek* : ${res.result.data.tafsir.id.short}

*Panjang* : ${res.result.data.tafsir.id.long}

( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
		replyDeface(txt)
		}
		break

case 'apakah':
if (!q) return replyDeface(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const apa = ['Iya', 'Tidak', 'Bisa Jadi', 'Betul']
const kah = apa[Math.floor(Math.random() * apa.length)]
mans.sendMessage(from, { text: `Pertanyaan : Apakah ${q}\nJawaban : ${kah}` }, { quoted: m })

break
case 'bisakah':
if (!q) return replyDeface(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const bisa = ['Bisa','Gak Bisa','Gak Bisa Ajg Aaokawpk','TENTU PASTI KAMU BISA!!!!']
const ga = bisa[Math.floor(Math.random() * bisa.length)]
mans.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ga}` }, { quoted: m })

break
case 'bagaimanakah':
if (!q) return replyDeface(`Penggunaan ${command} text\n\nContoh : ${command} saya wibu`)
const gimana = ['Gak Gimana2', 'Sulit Itu Bro', 'Maaf Bot Tidak Bisa Menjawab', 'Coba Deh Cari Di Gugel','astaghfirallah Beneran???','Pusing ah','Owhh Begitu:(','Yang Sabar Ya Bos:(','Gimana yeee']
const ya = gimana[Math.floor(Math.random() * gimana.length)]
mans.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : ${ya}` }, { quoted: m })
break
case 'rate':
 if (!q) return replyDeface(`Penggunaan ${command} text\n\nContoh : ${command} Gambar aku`)
const ra = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const te = ra[Math.floor(Math.random() * ra.length)]
mans.sendMessage(from, { text: `Rate : ${q}\nJawaban : *${te}%*` }, { quoted: m })
break
case 'gantengcek':
case 'cekganteng':
 if (!q) return replyDeface(`Penggunaan ${command} Nama\n\nContoh : ${command} Riych`)
const gan = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const teng = gan[Math.floor(Math.random() * gan.length)]
mans.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${teng}%*` }, { quoted: m })
break
case 'cantikcek':
  case 'cekcantik':
 if (!q) return replyDeface(`Penggunaan ${command} Nama\n\nContoh : ${command} Riych`)
	const can = ['5', '10', '15' ,'20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const tik = can[Math.floor(Math.random() * can.length)]
mans.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${tik}%*` }, { quoted: m })
break
case 'sangecek':
  case 'ceksange':
    case 'gaycek':
      case 'cekgay':
        case 'lesbicek':
          case 'ceklesbi':
				if (!q) return replyDeface(`Penggunaan ${command} Nama\n\nContoh : ${command} ${pushname}`)
const sangeh = ['5', '10', '15','20', '25','30','35','40','45','50','55','60','65','70','75','80','85','90','100']
const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
mans.sendMessage(from, { text: `Nama : ${q}\nJawaban : *${sange}%*` }, { quoted: m })
break
case 'kapankah':
				if (!q) return replyDeface(`Penggunaan ${command} Pertanyaan\n\nContoh : ${command} Saya Mati`)
const kapan = ['5 Hari Lagi', '10 Hari Lagi', '15 Hari Lagi','20 Hari Lagi', '25 Hari Lagi','30 Hari Lagi','35 Hari Lagi','40 Hari Lagi','45 Hari Lagi','50 Hari Lagi','55 Hari Lagi','60 Hari Lagi','65 Hari Lagi','70 Hari Lagi','75 Hari Lagi','80 Hari Lagi','85 Hari Lagi','90 Hari Lagi','100 Hari Lagi','5 Bulan Lagi', '10 Bulan Lagi', '15 Bulan Lagi','20 Bulan Lagi', '25 Bulan Lagi','30 Bulan Lagi','35 Bulan Lagi','40 Bulan Lagi','45 Bulan Lagi','50 Bulan Lagi','55 Bulan Lagi','60 Bulan Lagi','65 Bulan Lagi','70 Bulan Lagi','75 Bulan Lagi','80 Bulan Lagi','85 Bulan Lagi','90 Bulan Lagi','100 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','Besok','Lusa',`Abis Command Ini Juga Lu ${q}`]
const kapankah = kapan[Math.floor(Math.random() * kapan.length)]
mans.sendMessage(from, { text: `Pertanyaan : ${q}\nJawaban : *${kapankah}*` }, { quoted: m })
break
case 'wangy':
              if (!q) return replyDeface(`Contoh : .wangy Riy`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
             replyDeface(awikwok)
              break
case 'cekmati':
              if (!q) return replyDeface(`Invalid!\n\nYg mau di cek siapa kontol?`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              replyDeface(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
case 'gsmarena': {
            if (!text) return replyDeface(`Example : ${prefix + command} realme`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/gsmarena?query=${text}&apikey=APIKEY`)
            let { judul, rilis, thumb, ukuran, type, storage, display, inchi, pixel, videoPixel, ram, chipset, batrai, merek_batre, detail } = res.result
let capt = `⭔ Title: ${judul}
⭔ Realease: ${rilis}
⭔ Size: ${ukuran}
⭔ Type: ${type}
⭔ Storage: ${storage}
⭔ Display: ${display}
⭔ Inchi: ${inchi}
⭔ Pixel: ${pixel}
⭔ Video Pixel: ${videoPixel}
⭔ Ram: ${ram}
⭔ Chipset: ${chipset}
⭔ Battery: ${batrai}
⭔ Battery Brand: ${merek_batre}
⭔ Detail: ${detail}`
            mans.sendImage(m.chat, thumb, capt, m)
            }
break
case 'jadwalbioskop': {
            if (!text) return replyDeface(`Example: ${prefix + command} jakarta`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/jadwalbioskop?kota=${text}&apikey=hdiiofficial`)
            let capt = `Jadwal Bioskop From : ${text}\n\n`
            for (let i of res.result){
            capt += ` Title: ${i.title}\n`
            capt += ` Thumbnail: ${i.thumb}\n`
            capt += ` Url: ${i.url}\n\n──────────────────────\n`
            }
            mans.sendImage(m.chat, res.result[0].thumb, capt, m)
            }
            break
            case 'nowplayingbioskop': {
            let res = await fetchJson(api('zenz', '/webzone/nowplayingbioskop', {}, 'apikey'))
            let capt = `Now Playing Bioskop\n\n`
            for (let i of res.result){
            capt += ` Title: ${i.title}\n`
            capt += ` Url: ${i.url}\n`
            capt += ` Img Url: ${i.img}\n\n──────────────────────\n`
            }
            mans.sendImage(m.chat, res.result[0].img, capt, m)
            }
            break
            case 'aminio': {
            if (!text) return replyDeface(`Example: ${prefix + command} free fire`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/amino?query=${text}&apikey=hdiiofficial`)
            let capt = `Amino Search From : ${text}\n\n`
            for (let i of res.result){
            capt += ` Community: ${i.community}\n`
            capt += ` Community Link: ${i.community_link}\n`
            capt += ` Thumbnail: ${i.community_thumb}\n`
            capt += ` Description: ${i.community_desc}\n`
            capt += ` Member Count: ${i.member_count}\n\n──────────────────────\n`
            }
            mans.sendImage(m.chat, 'https://'+res.result[0].community_thumb, capt, m)
            }
            break
            case 'wattpad': {
            if (!text) return replyDeface(`Example : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/wattpad?query=$text}&apikey=hdiiofficial`)
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From query\n\n`
            capt += ` Judul: ${judul}\n`
            capt += ` Dibaca: ${dibaca}\n`
            capt += ` Divote: ${divote}\n`
            capt += ` Bab: ${bab}\n`
            capt += ` Url: ${url}\n`
            capt += ` Deskripsi: ${description}`
            mans.sendImage(m.chat, thumb, capt, m)
            }
            break
            case 'webtoons': {
            if (!text) return replyDeface(`Example : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/webtoons?query=${text}&apikey=hdiiofficial`)
            let capt = `Webtoons Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += ` Judul: ${i.judul}\n`
            capt += ` Like: ${i.like}\n`
            capt += ` Creator: ${i.creator}\n`
            capt += ` Genre: ${i.genre}\n`
            capt += ` Url: ${i.url}\n\n──────────────────────\n`
            }
            replyDeface(capt)
            }
            break
            case 'drakor': {
            if (!text) return replyDeface(`Example : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/drakor?query=${text}&apikey=hdiiofficial`)
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `⭔ Judul: ${i.judul}\n`
            capt += `⭔ Years: ${i.years}\n`
            capt += `⭔ Genre: ${i.genre}\n`
            capt += `⭔ Url: ${i.url}\n`
            capt += `⭔ Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            mans.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break


case 'bj':case 'ero':case 'cum':case 'feet':case 'yuri':case 'trap':case 'lewd':case 'feed':case 'eron':case 'solo':case 'gasm':case 'poke':case 'anal':case 'holo':case 'tits':case 'kuni':case 'kiss':case 'erok':case 'smug':case 'baka':case 'solog':case 'feetg':case 'lewdk':case 'pussy':case 'femdom':case 'cuddle':case 'eroyuri':case 'cum_jpg':case 'blowjob':case 'erofeet':case 'holoero':case 'erokemo':case 'fox_girl':case 'futanari':case 'lewdkemo':case 'pussy_jpg':case 'kemonomimi':case 'nsfw_avatar': 
	if (isBan) return replyDeface(mess.ban)
	    buffer = `http://api.lolhuman.xyz/api/random2/${command}?apikey=${lolkey}`
                    mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
    break
case 'cry':	
if (isBan) return replyDeface(mess.ban)
anu = `http://api.lolhuman.xyz/api/random/cry?apikey=${lolkey}`
replyDeface(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.author })
break
case 'kiss3':	
if (isBan) return replyDeface(mess.ban)
anu = `http://api.lolhuman.xyz/api/random/kiss?apikey=${lolkey}`
replyDeface(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.author })
break
case 'kiss2':	
anu = `http://api.lolhuman.xyz/api/random2/kiss?apikey=${lolkey}`
replyDeface(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.author })
break
case 'cringe':
		anu = `http://api.lolhuman.xyz/api/random/cringe?apikey=${lolkey}`
replyDeface(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.author })
break
case 'dance':	
anu = `http://api.lolhuman.xyz/api/random/dance?apikey=${lolkey}`
replyDeface(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.author })
break
case 'kill':	
anu = `http://api.lolhuman.xyz/api/random/kill?apikey=${lolkey}`
replyDeface(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.author })
break
case 'happy':	
anu = `http://api.lolhuman.xyz/api/random/happy?apikey=${lolkey}`
replyDeface(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.author })
break
case 'bonk':	
anu = `http://api.lolhuman.xyz/api/random/bonk?apikey=${lolkey}`
replyDeface(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.author })
break
case 'smug2':	
anu = `http://api.lolhuman.xyz/api/random/smug?apikey=${lolkey}`
replyDeface(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.author })
break
case 'slap':	
anu = `http://api.lolhuman.xyz/api/random/slap?apikey=${lolkey}`
replyDeface(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.author })
break
case 'wave':	
anu = `http://api.lolhuman.xyz/api/random/wave?apikey=${lolkey}`
replyDeface(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.author })
break
case 'smile':	
anu = `http://api.lolhuman.xyz/api/random/smile?apikey=${lolkey}`
replyDeface(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.author })
break
case 'bully':
		anu = `http://api.lolhuman.xyz/api/random/bully?apikey=${lolkey}`
replyDeface(mess.wait)
mans.sendImageAsSticker(m.chat, anu, m, { packname:global.packname, author: global.author })
break
case 'art':case 'bts':case 'exo':case 'elf':case 'loli':case 'neko':case 'shota':case 'sagiri':case 'shinobu':case 'megumin':case 'wallnime': case 'husbu':

  buffer = `http://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`
    mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
    break
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'animearmpits':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton': 
if (!isPrem) return replyPremium(mess.premium)
 buffer = `http://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`
mans.sendMessage(from, {image:{url:buffer}, caption:"Done!"}, {quoted:m})
break
case 'naruto':
case 'minato':
case 'boruto':
case 'hinata':
case 'sasuke':
case 'sakura':
case 'kaneki':
case 'toukachan':
case 'rize':
case 'akira':
case 'itori':
case 'kurumi':
case 'miku':
replyDeface(mess.wait)
nye = `http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${command}`
mans.sendMessage(from, {image:{url:nye}, caption:"Done!"}, {quoted:m})
break			
// akhir fitur anime
case 'anjing':
nye = `http://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=anjing`
replyDeface(mess.wait)
mans.sendMessage(from, {image:{url:nye}, caption:"Done!"}, {quoted:m})
break			

                     
// Eval Ada Disini
default:
if (budy.startsWith('=>')) {
if (!isCreator) return replyDeface(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return replyDeface(bang)
}
try {
replyDeface(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
mans.sendMessage(from, {image:err4r, caption:String(e)}, {quoted:m})
}
}
if (budy.startsWith('>')) {
if (!isCreator) return replyDeface(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await replyDeface(evaled)
} catch (err) {
await mans.sendMessage(from, {image:err4r, caption:String(err)}, {quoted:m})
}
}

if (budy.startsWith('$')) {
if (!isCreator) return replyDeface(mess.owner)
console.log('\x1b[1;34m~\x1b[1;37m>', '[\x1b[1;33mFardan\x1b[1;37m]', time, color(`Exe Dari Owner Awog 🗿 Note Dah Jam ${time} Jangan lupa Sholat`, 'cyan'))
exec(budy.slice(2), (err, stdout) => {
if(err) return mans.sendMessage(from, {image:log0, caption:String(err)}, {quoted:m})
if (stdout) return replyDeface(stdout)
})
}
// Anti Tag ( FenZo||77+ )
const listTag = ["6281523940672@s.whatsapp.net"]
const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''
// Antitag Via Reply ( FenZo||77+ )
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = 'https://uploader.caliph.my.id/file/Hxf936tvPc.webp'
mans.sendReadReceipt(m.chat, m.sender, [m.key.id])
mans.sendImageAsSticker(m.chat, `https://uploader.caliph.my.id/file/Hxf936tvPc.webp`, m, {packname: packname, author: author})
}
// Antitag Via Tag ( FenZo||77+ )
if (budy.includes("@6281523940672")) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
mans.sendReadReceipt(m.chat, m.sender, [m.key.id])
mans.sendImageAsSticker(m.chat, `https://uploader.caliph.my.id/file/Hxf936tvPc.webp`, m, {packname: packname, author: author})
}
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
mans.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
} catch (err) {
mans.sendMessage("6281523940672@s.whatsapp.net", util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})