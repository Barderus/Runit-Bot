const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('shipping-rules')
        .setDescription('Displays live animal shipping information.'),
    async execute(interaction) {
        const isAdmin = interaction.member.roles.cache.some(role => role.name === 'ADMIN');
        const shipEmbed = new EmbedBuilder()
            .setTitle('Live Animal Shipping Information')
            .setDescription(
                `**1. Shipping Restrictions:** Live animal shipping is limited to the 48 contiguous states (No AK or HI sales at this time).

                **2. Shipping Process:** All packages containing live animals must be held for pickup at a FedEx Ship Center (NOT a FedEx OnSite or Print & Ship Center). Home delivery is not available for live animal packages.
                
                **3. Tracking Information:** 
                Tracking info will be sent via email to the address provided during registration. For any delays or issues, contact us at RUNITReptileExpo@gmail.com.
                
                **4. Shipping Costs:** 
                Live animal orders incur a flat rate of $65. Shipping for dry goods orders is based on package size and weight.
                
                **5. Scheduling Shipments:** 
                Auction winners will be contacted via email to schedule a ship date. No shipments will occur without prior arrangement.
                
                **6. Shipping Days:** 
                Live animals are shipped on Tuesdays or Wednesdays for next-day delivery. Exceptions may occur rarely.
                
                **7. Inspection Policy:** 
                Live animals must be unboxed and inspected within two hours of receipt. Photos or videos are required for any issues.
                
                **8. Local Pickup Option:** 
                Local/show pickup is available upon request. Indicate your preference during sign-up or when contacted about shipping.
                
                ** For a more in-depth rules, please check <#1179161850630377576>` )
            .setColor('#0099ff')
            .setTimestamp();
                    // For more rules, go to the FAQs channel
            await interaction.reply({ embeds: [shipEmbed], ephemeral: !isAdmin });
    },
};
