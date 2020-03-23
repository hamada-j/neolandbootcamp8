const Telegraf = require('telegraf')
const express = require('express')
const expressApp = express()

const bot = new Telegraf('111388597:AAG_j653tveI64BvRVkwSHHwY5WBWK2unC0')
expressApp.use(bot.webhookCallback('/secret-path'))
bot.telegram.setWebhook('https://99b7f88a.ngrok.io/secret-path')

expressApp.post('/secret-path', (req, res) => {
    res.send('Hello World!')
})

bot.command('test', (ctx) => {
    ctx.reply('Esto es una prueba');
});

bot.on('text', (ctx) => {
    console.log(ctx.message);
    ctx.reply('Te estoy escuchando bitch');
});

expressApp.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
