const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('general-rules')
        .setDescription('Displays general rules.'),
    async execute(interaction) {
        const shipEmbed = new EmbedBuilder()
            .setTitle('RUN IT Expo General Rules')
            .setDescription(`**1. Age Requirement:**  You must be 18 years or older to bid or make a purchase.
            
            **2. Sales Policy:**  
            All sales are final; no returns or exchanges will be accepted.
            
            **3. Payment Terms:**  
            Full payment is due within 24 hours of receiving your invoice. Orders will not be shipped or available for pickup until the balance is paid in full. If there are any discrepancies with your invoice, contact us promptly for resolution.
            
            **4. Non-Payment Consequences:**  
            Failure to submit full payment within the timeframe may result in a ban from future events. Similarly, canceling auction wins may also lead to a ban from future participation.
            
            **5. Accepted Payment Methods:**  
            We accept credit/debit cards, PayPal, Venmo, Zelle, and CashApp. You may opt for direct payment or receive an email invoice for payment upon receipt.
            
            **6. Registration Requirement:**  
            Before participating, fill out and submit a registration form with your contact and shipping information.
            
            **7. Bidding Increments:**  
            Bid only in increments of $5. No need for dollar signs or other symbols.
            
            **8. Auction Procedure:**  
            Winners will be determined based on our primary host screen. Discrepancies due to internet lag are possible.
            
            **9. First-time Participant Deposit:**  
            If your total auction wins reach $500, a $100 deposit is required immediately. This deposit is non-refundable if you decide against paying for your wins.

            ** For a more in-depth rules, please check <#1179161850630377576>
                           ` )
            .setColor('#0099ff')
            .setTimestamp()
			                    // For more rules, go to the FAQs channel
        await interaction.reply({ embeds: [shipEmbed], ephemeral: true });
    },
};
