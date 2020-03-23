const Telegraf = require('telegraf')
const express = require('express')
const expressApp = express()

const bot = new Telegraf('111388597:AAG_j653tveI64BvRVkwSHHwY5WBWK2unC0')
expressApp.use(bot.webhookCallback('/secret-path'))
bot.telegram.setWebhook('https://552984f0.ngrok.io/secret-path')

expressApp.post('/secret-path', (req, res) => {
    res.send('Todo OK');
})

bot.command('saludo', (ctx) => {
    console.log(ctx.from);
    ctx.reply('Hola amigo qué tal');
});

bot.on('text', (ctx) => {
    console.log(ctx.message);
    ctx.reply(ctx.message.text);
})

expressApp.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
