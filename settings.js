export const settings = {
    // Bot Configuration
    botName: 'yourhïghness',
    version: '1.0',
    prefix: '.',

    // Owner Configuration
    ownerNumber: '2349132151386', // Replace with actual owner number
    ownerNumbers: ['2349132151386@s.whatsapp.net'], // Multiple owner numbers for recognition

    // Session Configuration (Manual Session)
    // To change session: Replace the base64 string below with your new session data
    sessionBase64: "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUVkL2kxaFVZd01VWjFTcUIxOXIxZFhsSEpHdVpyYThZVmQ4em5CbFgwMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUFpEWjRLb0pNSncvYjhTVEhucjIraHBTR1RGUUsxMGVkRHlUbG01REdDOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4QWJQYmZDY3VnRFlVRmMvL3pob2R6Nm5rSVRiTlBiZ09ZYmVrdGVTQlZZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJd01mZmNlbEVGcUl2dzFFdnNYNDNQWXo5WWhUaEk4YnpSWVAwZHRxblJnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFCMUNxM1lQRUdHOHo3VVRsbkxjSXJEWVdEb2lVRE9nN3gxN1l2NWkwMmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im4vQnZUUHIxWWgva3YxY1dDU3FxOU9Xa3BRdHhZOUVJcHJ1SzM0dFduMXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUxkNFcrdW5JRlU5T3lwL0xDTEplRWpCT2F1eUdaL2hCcEhqeEFpZnFuST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM0VoRmNReTNYbTBsSGs0bjNRWWs5RFJpM0V0c2NydVlJdUF0RCs2SG1UZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZ5NlJ1NEVORjRXVGIzQnNRK3g0bTMwNFAxMUdYTzAzVlJ5S1NhOGVsSGYzak93aWVHK1N3VmdLRXMvUTQva05iTWJnY0VJanZ6QkNSYTd3Snp5NWdnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA1LCJhZHZTZWNyZXRLZXkiOiJFN2UwdTRLN2c4YkNUdFcxNVp3bUVLSnZKNDZwL1A4VUMySklMRVdEMmcwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkxMzIxNTEzODZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkY2NzlGQzIzMTFDMDQ4MjFDRTQyNUMyNkI4OUI4NDQifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MjUwNjI4Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEzMjE1MTM4NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIyNzUwMENFRkMyMkZCMUUwOTlEQkQ5QTk3N0JEREYxNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzUyNTA2Mjg0fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJaQTc4TEY3USIsIm1lIjp7ImlkIjoiMjM0OTEzMjE1MTM4Njo2NUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjIyNTI3Nzc0NTcyNzc4OjY1QGxpZCIsIm5hbWUiOiLKs",  //get from the link in the README.md

    // API Keys
    geminiApiKey: process.env.GEMINI_API_KEY || 'AIzaSyArdMt3se0P2U5PCWjprpBZlzGZ2bHJklg',
    youtubeApiKey: process.env.YOUTUBE_API_KEY || 'AIzaSyBvVo--Jslb084-F8ATSWgsgqOl2JVh660',
    geniusApiKey: "NrGLCWeRCNlny8qtUzXhxalvAwWWjcjWdwyCe3aUrXJZLlzs3lwSd5ddu_Iy3q5O", // Get from https://genius.com/api-clients
    openaiApiKey: "", // Get from https://platform.openai.com/account/api-keys
    truecallerId: 'a1i0x--L2j_d8lF4BTFZ7e3p0t',
    truecallerId: process.env.TRUECALLER_ID || '',

    // Profile Pictures
    profilePics: [
        'https://files.catbox.moe/mq8b1n.png',
        'https://files.catbox.moe/dm7w9d.jpeg',
        'https://files.catbox.moe/0j5tnz.jpeg',
        'https://files.catbox.moe/b7wnah.jpeg',
        'https://files.catbox.moe/oo7yfn.jpeg',
        'https://files.catbox.moe/57l61y.jpeg',
        'https://files.catbox.moe/q64syc.jpeg'
    ],

    // Anti-spam settings
    antiSpam: {
        enabled: false,
        maxMessages: 5,
        timeWindow: 60000, // 1 minute
        cooldownTime: 30000 // 30 seconds
    }
};
