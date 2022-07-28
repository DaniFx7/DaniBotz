const fs = require('fs')
const chalk = require('chalk')

//Apikey
global.daniapi = "Your Key"

// Other
global.owner = ['628xxx','628xxx','628xxx']
global.premium = ['628xxx']
global.packname = 'Dani'
global.author = 'WhatsApp-Bot'
global.sessionName = 'Dani'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
	falseurl: 'Url Yang Anda Masukkan Salah',
	apkk: 'Masukkan Parameter Pencarian',
	urll: 'Masukkan Parameter Url',
	textt: 'Masukkan Parameter Text',
	textt2: 'Masukkan Parameter Text 2',
    success: 'Selesai',
    admin: 'Khusus Admin Group',
    botAdmin: 'Bot Harus Jadi Admin',
    owner: 'Khusus Owner Bot',
    group: 'Khusus Untuk Group',
    private: 'Khusus Pribadi Pesan',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Tunggu Beberapa Detik',
    premium: 'Khusus Member Premium',
    endLimit: 'Limit Harian Anda Telah Habis, Silahkan Tunggu Limit Di Riset',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.image = fs.readFileSync('./media/image/Dani.jpg')
global.video = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
