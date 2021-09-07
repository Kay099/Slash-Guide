const Discord = require("discord.js")

module.exports = async (client, interactions) => {

    if(!Interaction.isComand())return;

    const cmdsl = client.slascommand.ge(interaction.commandNome)

    if(!cmds)return

    try {
        
        await cmdsl.runs(cliente, interacition)
        }catch (e){ 
            conssole.errorr(e)
            return interraction.reply({ content: `La interaccion a fallado`})
        }

    }




