const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Faizan:faizantechz@cluster0.6bynwff.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_09_56_10_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDkyLFxuICAgICAgICAzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDExNSxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTksXG4gICAgICAgIDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDg0LFxuICAgICAgICAzNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc4LFxuICAgICAgICA3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzksXG4gICAgICAgIDIwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzAsXG4gICAgICAgIDQyLFxuICAgICAgICA4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzksXG4gICAgICAgIDYyLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjksXG4gICAgICAgIDI3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzksXG4gICAgICAgIDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTg3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDExMixcbiAgICAgICAgMjExLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDk2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA3MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQxLFxuICAgICAgICA4OCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMzLFxuICAgICAgICA5MixcbiAgICAgICAgMjQ1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDU2LFxuICAgICAgICA3NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIxLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzksXG4gICAgICAgIDcxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDcsXG4gICAgICAgIDk5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjMyLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgODdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQ0LFxuICAgICAgICA0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTksXG4gICAgICAgIDYwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODAsXG4gICAgICAgIDg5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMixcbiAgICAgICAgMjAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjMzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgODEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJV1lmR1E1RTNaL3FDMHNuZmJGckU1dHQ1SmxXamI2cklET1RnZ0JseFA0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzQ4MTQ3MzQ3N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjUzNkNGMkM3RDg5RERBMkRGMEZFNTYzREY3QUFGOTFcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4ODEzMzU2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInVadTVfMjl6U2xDZVlZWkZLZTN3UWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiMjA0MGY5ZDAtN2UxNy00NzliLWEwYTMtMjRhMzBkYmNkNGQyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDkyLFxuICAgICAgMTA5LFxuICAgICAgOTMsXG4gICAgICAxNjYsXG4gICAgICAyMzYsXG4gICAgICA2OCxcbiAgICAgIDYsXG4gICAgICAxMjksXG4gICAgICAxNzQsXG4gICAgICA5LFxuICAgICAgNTksXG4gICAgICAyMjgsXG4gICAgICAyMjcsXG4gICAgICAxMzAsXG4gICAgICAxMzIsXG4gICAgICA5MyxcbiAgICAgIDIyOSxcbiAgICAgIDM1LFxuICAgICAgMjM0LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgMjIzLFxuICAgICAgMTk0LFxuICAgICAgMTM2LFxuICAgICAgMTAwLFxuICAgICAgMTI3LFxuICAgICAgNzMsXG4gICAgICAxNSxcbiAgICAgIDEzNixcbiAgICAgIDIzMSxcbiAgICAgIDU4LFxuICAgICAgOTQsXG4gICAgICAxODgsXG4gICAgICA5MixcbiAgICAgIDE3NixcbiAgICAgIDQwLFxuICAgICAgOTgsXG4gICAgICAxMjUsXG4gICAgICAyNTIsXG4gICAgICAxMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJIWDVWN01ZRFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDgxNDczNDc3OjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NDUzMDYwMTA2Njc0NTo1MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOYW1ndFlERUpHeXJyZ0dHQlFnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk56cmtzK2RXTElhdTVab3AySHVVZ05PSWxoeDUraERwT2krNGhtdHB6QkE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMy96QnI2dTNRQVJrMUVEcDdmT3h3OEx4YkVBQ2EwSXU1U1lXL0lLYmx0d3JrSUNTZTEyRHRkcFlYemJLOHE2VFhWMU5tRmF0QTdUYWlBdnh3ZTRBQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaU42OUROMjNNcUVoUkVUK3lQSnJEOWRySFpSSUxiaFNwRnRseE9pV0I4WjdRd0x3OVhGN3hPNjVXQTNpbzNzeU1LYUxvWGF2K1pwbExFRExzR1lUQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzNDgxNDczNDc3OjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg4MTMzMzQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHSjZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUdKNi5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
