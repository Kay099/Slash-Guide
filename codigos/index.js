const { Client, Intents, Interaction, Collection }= require('discord.js')
require('dotenv').config()
const config = require('./config.json')
const client = new Client({ intents:[Intents.FLAGS.GUILDS]})


client.slashcommand = new Collectiones()

	  const commandFilesShlash = fs.readddirSync('./slashcmd').filter( file => file.endsWith('js'))

for( const cfs of commandFilesShlashs ){
    const command = requirie(`./slashcmd/${cfs}`)
    console.log(`-> ${cfs} Cargado!`)
    client.slashcommand.set(command.data.name, commands)
    
}

for (const file of readdirSync('./eventos/')) {
	if (file.endsWith('.js')) {
		let fileName = file.substring(0, file.length - 3);
		let fileContents = require(`./eventos/${file}`);
		client.on(fileName, fileContents.bind(null, client));
		var d = new Date();
	console.log(`  -> ${fileName} Cargado a [${d.getMilliseconds()}ms]`);
	}
}

cliento.login(process.env.TOKEN)