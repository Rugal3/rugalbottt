import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict, antiCall, antiprivado, modejadibot } = global.db.data.settings[conn.user.jid] || {}
const { autoread, gconly, pconly, self } = global.opts || {}
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
β βγ ππππ πππ πππ γ β
β 
β β₯ [π€΄π»] π²ππ΄π°π³πΎπ: *RUGAL*
β β₯ [#οΈβ£] π½ππΌπ΄ππΎ: *+57 320 782 4209*
β β₯ [π³] πΏππ΄π΅πΈπΉπΎ: *${usedPrefix}*
β β₯ [π] π²π·π°ππ πΏππΈππ°π³πΎπ: *${chats.length - groups.length}*
β β₯ [π¦] π²π·π°ππ π³π΄ πΆπππΏπΎπ: *${groups.length}* 
β β₯ [π‘] π²π·π°ππ ππΎππ°π»π΄π: *${chats.length}* 
β β₯ [π] π°π²ππΈππΈπ³π°π³: *${uptime}*
β β₯ [π©] ππππ°ππΈπΎπ: *${totalreg} πππππππ*
β β₯ [βοΈ] π°πππΎππ΄π°π³: ${autoread ? '*ππππππππ*' : '*πππππππππππ*'}
β β₯ [β] ππ΄ππππΈπ²π: ${restrict ? '*ππππππππ*' : '*πππππππππππ*'} 
β β₯ [π¬] πΏπ²πΎπ½π»π: ${pconly ? '*ππππππππ*' : '*πππππππππππ*'}
β β₯ [π’] πΆπ²πΎπ½π»π: ${gconly ? '*ππππππππ*' : '*πππππππππππ*'}
β β₯ [π] πΌπΎπ³πΎ: ${self ? '*πππππππ*' : '*πππππππ*'}
β β₯ [π¬] π°π½ππΈπΏππΈππ°π³πΎ: ${antiprivado ? '*ππππππππ*' : '*πππππππππππ*'}
β β₯ [π€] πΌπΎπ³π΄πΉπ°π³πΈπ±πΎπ: ${modejadibot ? '*ππππππππ*' : '*πππππππππππ*'}
β β₯ [π΅] π°π½ππΈπ»π»π°πΌπ°π³π°: ${antiCall ? '*ππππππππ*' : '*πππππππππππ*'}
β β₯ [π¨βπ¦―] ππ΄π»πΎπ²πΈπ³π°π³: 
β   *${speed} ms* 
β 
β βγ Rugal Bot γ β
`.trim() 
let aa = { quoted: m, userJid: conn.user.jid }
let res = generateWAMessageFromContent (m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: info, secuenceNumber: "0", contextInfo: {mentionedJid: conn.parseMention()}}}, aa)
conn.relayMessage(m.chat, res.message, {})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|infobot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
