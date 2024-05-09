/* const { SlashCommandBuilder, StringSelectMenuBuilder, ActionRowBuilder } = require('discord.js');

const generalRules = `**1. Age Requirement:**  You must be 18 years or older to bid or make a purchase.
            
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
               ` 

const shippingRules = `**1. Shipping Restrictions:** Live animal shipping is limited to the 48 contiguous states (No AK or HI sales at this time).

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

** For a more in-depth rules, please check <#1179161850630377576>`
module.exports = {
  data: new SlashCommandBuilder()
      .setName('send-rules')
      .setDescription('Send rules to the chat that anyone can see.'),

  async execute(interaction) {
      // Create select menu for rule selection
      const selectMenu = new StringSelectMenuBuilder()
          .setCustomId('select_rules')
          .setPlaceholder('Select rules category')
          .addOptions([
              {
                  label: 'General Rules',
                  description: 'View general rules',
                  value: 'general_rules'
              },
              {
                  label: 'Shipping Rules',
                  description: 'View shipping rules',
                  value: 'shipping_rules'
              }
          ]);

      const row = new ActionRowBuilder()
          .addComponents(selectMenu);

      await interaction.reply({ content: 'Please select a rules category:', components: [row] });

      // Handle interaction
      const filter = (interaction) => interaction.customId === 'select_rules';
      const collector = interaction.channel.createMessageComponentCollector({ filter, time: 15000 });

      collector.on('collect', async (interaction) => {
          const selectedValue = interaction.values[0];
          let selectedRule;

          if (selectedValue === 'general_rules') {
              selectedRule = generalRules;
          } else if (selectedValue === 'shipping_rules') {
              selectedRule = shippingRules;
          }

          await interaction.reply(selectedRule);
      });

      collector.on('end', () => {
          console.log('Collector ended.');
      });
  },
}; */