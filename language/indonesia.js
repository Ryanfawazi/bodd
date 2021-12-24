exports.wait = () => {
    return `⏳ Please wait a moment~`
}

exports.ok = () => {
    return `Done.`
}

exports.err = () => {
    return `⚠️ Error Moderate Features`
}
exports.erorLink = () => {
    return `⚠️ The link is error`
}
exports.media = () => {
    return `Please select the media you want to download`
}

exports.wrongFormat = (prefix) => {
    return `Incorrect format Please check how to use at  *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Please enter the message you want to convey!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ This command *${cmd}* not registered in *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ This command is for the owner!`
}

exports.doneOwner = () => {
    return `✅  ️Its done, Owner `
}

exports.groupOnly = () => {
    return `👥  This command can only be used in groups!`
}

exports.adminOnly = () => {
    return `🙅  This command can only be used by group admins!`
}

exports.nhFalse = () => {
    return `Invalid code!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ User is not an admin! ❎`
}

exports.adminAlready = () => {
    return `❎ Cannot promote a user who is an admin!`
}

exports.botNotAdmin = () => {
    return `Make the bot an admin first! 🙏`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}

exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Hallo ${pushname} 😊👋*
    `If ​​you need anything from this bot, you can see it from the command below`


 「 Owner 
❒ < evaluate
❒ > evaluate
❒ $ exec
❒ => exec
❒ ${prefix}join [link]
❒ ${prefix}self
❒ ${prefix}public [only bot]
❒ ${prefix}del [pesan bot]
❒ ${prefix}setppbot [reply image]

 「 Group 
❒ ${prefix}revoke
❒ ${prefix}leave
❒ ${prefix}add [62***]
❒ ${prefix}kick @tag
❒ ${prefix}revoke
❒ ${prefix}leave
❒ ${prefix}linkgc
❒ ${prefix}group [open/close]
❒ ${prefix}tagall [text]
❒ ${prefix}hidetag [text]

 「 Anime 
❒ ${prefix}quotesanime
❒ ${prefix}anime [query]
❒ ${prefix}manga [query]
❒ ${prefix}character [query]


 「 Search 
❒ ${prefix}ytsearch [query]
❒ ${prefix}film [query]
❒ ${prefix}wallpaper [query]
❒ ${prefix}wikimedia [query]
❒ ${prefix}hentai
❒ ${prefix}wattpad [query]
❒ ${prefix}webtoons [query]
❒ ${prefix}drakor [query]
❒ ${prefix}pinterest [query]


「 Random Anime 
❒ ${prefix}loli
❒ ${prefix}neko
❒ ${prefix}waifu
❒ ${prefix}shinobu
❒ ${prefix}megumin
❒ ${prefix}bully
❒ ${prefix}cuddle
❒ ${prefix}cry
❒ ${prefix}hug
❒ ${prefix}awoo
❒ ${prefix}kiss
❒ ${prefix}lick
❒ ${prefix}pat
❒ ${prefix}smug
❒ ${prefix}bonk
❒ ${prefix}yeet
❒ ${prefix}blush
❒ ${prefix}smile
❒ ${prefix}wave
❒ ${prefix}highfive
❒ ${prefix}handhold
❒ ${prefix}nom
❒ ${prefix}bite
❒ ${prefix}glomp
❒ ${prefix}slap
❒ ${prefix}kill
❒ ${prefix}happy
❒ ${prefix}wink
❒ ${prefix}poke
❒ ${prefix}dance
❒ ${prefix}cringe


 「 Converter 
❒ ${prefix}stiker [reply image]
❒${prefix}toimg [reply sticker]


 「 Download 
❒ ${prefix}tiktok [link]
❒ ${prefix}tiktoknowm [link]
❒ ${prefix}tiktokwm [link]
❒ ${prefix}tiktokaudio [link]
❒ ${prefix}ytdl [link]
❒ ${prefix}play [query]
❒ ${prefix}ytmp3 link
❒ ${prefix}ytmp4 link
❒ ${prefix}facebook link
❒ ${prefix}igstory [username]
❒ ${prefix}igdl [link]
❒ ${prefix}igphoto [link]
❒ ${prefix}igvideo [link]
❒ ${prefix}igreels [link]
❒ ${prefix}igtv [link]
❒ ${prefix}twitter link


「 Bot Info 
❒ ${prefix}owner
❒ ${prefix}rules
❒ ${prefix}botstatus
❒ ${prefix}donate



    `
}

exports.rules = (prefix) => {
    return `
*── 「 RULES AND FAQ 」 ──*

1. Jangan spam bot. 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *PERMANENT BLOCK*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan YannBOT di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan YannBOT
😖🙏
`
}



