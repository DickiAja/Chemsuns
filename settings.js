const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: SunShine" //ur yt chanel name
global.socialm = "GitHub: DickiAja" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = 'SunsBot' //ur bot name
global.ownernumber = '6285175463174' //ur owner number
global.ownername = 'SunShine' //ur owner name
global.websitex = "https://youtube.com"
global.wagc = "https://chat.whatsapp.com/LGdeWLOZzqP91tARC9AN3b"
global.themeemoji = '🪀'
global.wm = "SunShine"
global.botscript = 'https://github.com' //script link
global.packname = "Sticker By SunShine"
global.author = "SunShine\n\n+6285175463174"
global.creator = "6285175463174@s.whatsapp.net"
global.xprefix = '.'
global.premium = ["6285175463174"] // Premium User
global.hituet = 0

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v2' // reply type 'v1' => 'v3'
global.autoblocknumber = '92' //set autoblock country code
global.antiforeignnumber = '91' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = false //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up!',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done✓',
    error: 'Error!',
    success: 'Here you go!'
}
//thumbnail
global.thumb = fs.readFileSync('./XeonMedia/theme/cheemspic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})