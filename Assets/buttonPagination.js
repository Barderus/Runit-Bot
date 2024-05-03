// Source: https://github.com/thenorthsolution/V14Revamped-Codebase/blob/cd3c9ee3c3e6cab3d6f72ce8fdac975305493f48/src/utils/buttonPagination.js
const {ActionRowBuilder, ButtonBuilder, ButtonStyle, ComponentType} = require("discord.js")
const auctionItem = require('../Runit Bot/AuctionItem'); // Import the AuctionItem class

module.exports = async (interaction, pages, time = 30 * 1000) => {
    try {
        if (!interaction || !pages || !pages > 0) throw new Error("Invalid arguments");

        await interaction.deferReply();

        if(pages.length === 1){
            return await interaction.editReply({
                embeds: pages,
                components: [],
                fecthReply: true
            })
        }
        // Update the first embed with auction item details
        pages[0].setDescription(`Item ID: ${auctionItem.id}\nItem Name: ${auctionItem.name}\nWinner Bidder: ${auctionItem.bidderName}\nQuantity: ${auctionItem.quantity}\nFinal Bid: ${auctionItem.finalBid}\nTotal Cost: ${auctionItem.ttlCost}\nDate: ${auctionItem.itemDate}`);
		
        const prev = new ButtonBuilder()
            .setCustomId('prev')
            .setEmoji('⬅️')
            .setStyle(ButtonStyle.Primary)
            .setDisabled(true);

		const home = new ButtonBuilder()
            .setCustomId('home')
            .setEmoji('🏠')
            .setStyle(ButtonStyle.Secondary)
            .setDisabled(true);

		const next = new ButtonBuilder()
            .setCustomId('next')
            .setEmoji('➡️')
            .setStyle(ButtonStyle.Primary);

		const buttons = new ActionRowBuilder().addComponents([prev, home, next]);
		let index = 0;

        const msg = await interaction.editReply({
            embeds: [pages[index]],
            components: [buttons],
            fecthReply: true
        });

        const mc = await msg.createMessageComponentCollector({
			componentType: ComponentType.Button,
			time,
		});

        mc.on("collect", async(i) => {
            if(i.user.id!== interaction.user.id) return await i.reply({content: "You are not allowed to do this!", ephemeral: true});
            await i.deferUpdate();

            if (i.CustomId === "prev"){
                if (index > 0){
                    index --
                } else if (i.CustomId === "home"){
                    index = 0;
                } else if (i.CustomId === "next"){
                    if(index < pages.length - 1){
                        index ++
                    }
                }

                if (index === 0){
                    prev.setDisabled(true);
                    home.setDisabled(true);
                } else {
                    prev.setDisabled(false);
                    next.setDisabled(false);
                }

                if (index === pages.length -1){
                    next.setDisabled(true);
                } else {
                    next.setDisabled(false);
                }

                await msg.edit({
                    embeds: [pages[index]],
                    components: [buttons],
                });

                mc.resetTimer();
            }

            mc.on("end", async() => {
                await msg.edit({
                    embeds: [pages[index]],
                    components: [],
                });
            });
            return msg
        });

    } catch (err){
        console.log(err);
    }
};