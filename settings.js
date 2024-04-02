// Developer Avishka shavinda 

const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernomer = "94772836332"
global.ownername = "𝚁𝙴𝙰𝙻 𝙺𝙸𝙽𝙶 𝙰𝚅𝙸 ✓"
global.ytname = "𝚁𝙴𝙰𝙻 𝙺𝙸𝙽𝙶 𝙰𝚅𝙸"
global.socialm = "GitHub:𝙰𝚅𝙸𝚂𝙷𝙺𝙰33"
global.location = "𝚜𝚛𝚒𝚕𝚊𝚗𝚔𝚊,𝚜𝚘𝚞𝚝𝚑𝚎𝚛𝚗,𝚐𝚊𝚕𝚕𝚎"

global.ownernumber = '94772836332'  //creator number
global.ownername = '𝙰𝚅𝙸' //owner name
global.botname = '𝙰𝚅𝙸 𝙲𝚁𝙰𝚂𝙷' //name of the bot

//sticker details
global.packname = 'Sticker By'
global.author = '𝚁𝙴𝙰𝙻 𝙺𝙸𝙽𝙶 𝙰𝚅𝙸'

//console view/theme
global.themeemoji = '🅰️'
global.wm = "𝙰𝚅𝙸."

//theme link
global.link = 'https://whatsapp.com/channel/0029VaGisHDFHWq5jpuEmC2t'

//custom prefix
global.prefa = ['','!','.','#','&']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = false // ස්වයංක්‍රීය ටයිපින්ග්
global.autorecordtype = false //auto typing + recording
global.autoread = false // ස්වයංක්‍රීය මැසෙජ් බැලීම
global.autobio = false //ස්වයංක්‍රීය about එක 
global.anti92 = true //auto block +92 
global.autoswview = true //  ස්වයංක්‍රිය ස්ටෙටස් බලන්න true දාන්න.

//menu type 
//v1 is image menu, 
//v2 is link + image menu,
//v3 is video menu,
//v4 is call end menu
global.typemenu = 'Avi1'

//reply messages
global.mess = {
    done: 'හරි !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'ගෲප් වල විතරයි මේ විශේශාන්ගය වැඩ',
    private: 'This feature is only for private chats',
    wait: 'මදක් රැදීසිටින්න... ',    
    error: 'දෝශයක්!',
}

global.thumb = fs.readFileSync('./XeonMedia/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
