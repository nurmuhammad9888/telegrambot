const TelegramBot = require('node-telegram-bot-api');

require('dotenv').config()
const TOKEN = process.env.TOKEN

const bot = new TelegramBot(TOKEN, {polling: true});

const fs = require('fs');


// Kalit so'zlar
const keywords = ['yunusobod', 'chilonzor', 'ttz', 'olmazor', 'kadisheva', 'bektimir', 'sergeli', 'chorsu'];

// Habardagi kalit so'zlarni aniqlash uchun funksiya
function findKeywords(message) {
    const foundKeywords = [];
    keywords.forEach(keyword => {
        if (message.toLowerCase().includes(keyword)) {
            foundKeywords.push(keyword);
        }
    });
    return foundKeywords;
}



bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const messageText = msg.text.toString().toLowerCase();
    const foundKeywords = findKeywords(messageText);
    
    const userId = msg.from.id;
    const username = msg.from.username;
    const text = msg.text;
    
    const messageData = {
        userId: userId,
        username: username,
        messageText: text
    };
    
    // JSON ma'lumotlarini faylga qo'shish
    // fs.appendFile('messages.json', JSON.stringify(messageData) + '\n', (err) => {
    //     if (err) {
    //         console.error('Xatolik yuz berdi:', err);
    //         return;
    //     }
    //     console.log('Ma\'lumotlar faylga saqlandi.');
    // });
    

    // Avtomatik javoblar
    if (messageText === 'salom') {
        const messageText = 'Salom, qanday yordam bera olishim mumkin?'; 
        bot.sendMessage(chatId, messageText);
    } else if (foundKeywords.length > 0) {
        const options = {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Lokatsiya', url: 'https://maps.app.goo.gl/7rNzVxQE5SvzXsfW6' }]
                ]
            }
        };
        bot.sendMessage(chatId, 
            `<i>Salom, bu matn italic qilib yuboriladi!</i>
            💠 ISH VAQTI  (08:00-00:00)
            ☎️ +998939728844
            📝 @SULTANTAXI_OLMAZOR \n\n` +  
            'Lokatsiya uchun tugmani bosing:', options);
        
    }else if (messageText === 'yaxshi') {
        bot.sendMessage(chatId, 'Juda yaxshi! Sizga yordam bera olishim mumkinmi?');
    } else if (messageText === 'admin') {
        bot.sendMessage(chatId, 'Qandaydir ${chatId} savoliz bormi?');
    } else if (messageText === 'olmazora' || messageText === '/olmazora@newbotnur_bot') {
        const options = {
            parse_mode: 'HTML',
            reply_markup: {
                inline_keyboard: [
                    [{ text: 'Lokatsiya', url: 'https://maps.app.goo.gl/7rNzVxQE5SvzXsfW6' }]
                ]
            }
        };
        bot.sendMessage(chatId, 
            `<i>Salom, bu matn italic qilib yuboriladi!</i>
            💠 ISH VAQTI  (08:00-00:00)
            ☎️ +998939728844
            📝 @SULTANTAXI_OLMAZOR \n\n` +  
            'Lokatsiya uchun tugmani bosing:', options);
            
        }else if (messageText === '/join'|| messageText === '/start@newbotnur_bot') {
            const groupId = msg.chat.id;
            bot.sendMessage(groupId, 'Assalomu alaykum! Men bu guruhga qo\'shildim.');

        } else if (messageText === '/ask') {
            const question = 'Savol matnini yuboring:';
            bot.sendMessage(chatId, question);
        } else if (messageText === '/start') {
            bot.sendMessage(chatId, 'Boshlash');
        } else if (messageText === '/buyurtmalar') {
            bot.sendMessage(chatId, 'Hozircha buyurtmalar bo\'yicha ma\'lumot mavjud emas.');
        } else if(messageText === 'hello'){
            const servicesMessage = `👨🏻‍💻  ASSALOMU ALAYKUM HAYDOVCHILAR SIZNI OFFICEMIZDA KUTIB QOLAMIZ VA TURLI XIL XIZMATLARIMIZNI TAKLIF QILAMIZ\n\n`
            + `❇️ [LITSENZIYA (NAQT VA 3 OYGA BO'LIB TO'LASH)]\n\n`
            + `❇️ [ISHONCHNOMA (DAVERNOS)]\n\n`
            + `❇️ [OYNALAR TUSINI O'ZGARTIRISH (NAQT VA 3-6-12 OYGACHA BO'LIB TO'LASH)]\n\n`
            + `❇️ [SUG'URTA]\n\n`
            + `❇️ [HAYDOVCHILIK GUVOHNOMASINI ALMASHTIRISH (NAQT VA 3 OYGACHA BO'LIB TO'LASH)]\n\n`
            + `✅ BUNDAY IMKONIYAT FAQAT SULTAN TAXIDA` + `[✅ sultan taxi ](https://t.me/SULTANTAXI_TTZ)\n\n`
            + 
            `1.🔔 YUNUSOBOD 14KV-21D
            💠   ISH VAQTI 24/7
            ☎️  +998931174422
            📝 @SULTANTAXI \n\n`
            +
            `2.🔔Chilonzor Tumani, 18-Mavze ,16-Uy,2x
            💠 ISH VAQTI 24/7
            ☎️ +998939317550
            📝 @SULTANTAXICHILONZOR\n\n
            `
            +
            ` 3.🔔 TTZ DIADORA
            💠  ISH VAQTI (08:00-00:00)
            ☎️ +998930714335
            [✅ @SultanTaxi_TTZ ] \n\n
            📝 ` 
            +
            `  4.🔔 OLMAZOR
            💠  ISH VAQTI  (08:00-00:00)
            ☎️ +998939728844
            📝 [✅ @SULTANTAXI_OLMAZOR ]\n\n`
            +
            `5.🔔 KADISHEVA 
            💠   ISH VAQTI (08:00-00:00)
            ☎️  +998948763337 
            📝 [ @SULTANTAXI_KADISHEVA ] \n\n`
            +
            ` 6.🔔 BEKTEMIR
            💠  ISH VAQTI (08:00 - 23:00)
            ☎️ +998948793337
            📝 [ @SULTANTAXI_BEKTEMIR ] \n\n`
            +
            `  7 .🔔 SERGELI 
            💠  ISH VAQTI (08:00-00:00)
            ☎️  +998947918883
            📝 @SULTANTAXISERGELI \n\n`
            +
            ` 8.🔔 CHORSU
            💠  ISH VAQTI  (08:00-00:00)
            ☎️  +998946150848
            📝  [ @SULTAN_TAXI_CHORSU ] \n\n`
            ;
            bot.sendMessage(chatId, servicesMessage, { parse_mode: 'Markdown' });
        } else {
            const data = `@SULTANTAXI_OLMAZOR\n`+
            `@SULTANTAXICHILONZOR\n`+
            `@SULTANTAXI \n`+
            `@SultanTaxi_TTZ\n`+
            `@sultantaxi_kadisheva\n`+
            `@sultantaxisergeli\n`+
            `@SULTAN_TAXI_CHORSU\n`
            bot.sendMessage(chatId, data);
        }
    });