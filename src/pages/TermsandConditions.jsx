import CustomSummary from "../components/CustomSummary"

function TermsandConditions() {
  return (
    <div className="container bg-white p-5 my-5 border" style={{ borderRadius: '30px' }}>
      <h3 className="fw-bold mb-5">Terms & Conditions</h3>

      <ul className='bg-white list-unstyled d-flex flex-column gap-2 summary-list'>

        <CustomSummary
          summary='Our Policies'
          text='Tickets once sold cannot be exchanged, cancelled, rescheduled or refunded.'
        />

        <CustomSummary
          summary='Payment Methods'
          text='Paytm TicketNew accepts major credit and debit cards. We also accept payment through Paytm wallet, Netbanking and UPI, we are in the process of adding more payment options to provide you with the convenience in the near future. Paytm TicketNew does not offer any refunds or exchanges of tickets purchased on Paytm TicketNew website or via phone. In addition, tickets purchased through Paytm TicketNew will be subject to a non-refundable per-ticket convenience charge. Before purchasing your tickets we insist you to confirm the title, time and location of the movie you wish to see. Paytm TicketNew will place an order for your tickets in our ticketing system, reducing the number of seats available for the chosen show time. While this allows us to provide our customers with the clear benefit of guaranteed seats, it prevents Paytm TicketNew and our event partners from reselling tickets in the event you do not attend your chosen show time. Please read the online and email confirmation pages carefully, as they provide you with important information about retrieving your tickets that may be unique to your chosen event, movie and theatre. The confirmation pages and email have your confirmation number. Just take your confirmation number with you to the venue along with a photo id and the card, if used for the booking. We respect the privacy of our users and the importance of the information they entrust to us. We may collect personal information that can identify you, such as your name, phone number and email address. We may combine the personal information that we receive from different sources.'
        />

        <CustomSummary
          summary='Information we collect'
          text='We also may collect other types of information in the following ways when you visit our website: Our server logs automatically collect information, such as your IP address, your browser type and language, and the date and time of your visit, which helps us track users movements around our site and understand trends. We may assign your computer one or more cookies which may collect information to facilitate access to our website and to personalize your online experience. We may use standard Internet tools, which collect information that tracks your use of our website and enables us to customize our services and advertisements.'
        />

        <CustomSummary
          summary='Information others may collect'
          text='We may allow third-party advertising companies or ad networks to display advertisements on our websites. We do not provide any personal information to these companies. If you post information about yourself or others, or communicate with others using our website, please note that we cannot control who reads your postings or what they do with the information you provide. We encourage you to use caution in posting personal information.'
        />

        <CustomSummary
          summary='With whom we may share information we collect'
          text='We will not share your personal information with others except as indicated below, or except when we inform you in advance and give you the opportunity to opt out. We may share personal information with Event providers, such as the venues, event managers, promoters and others who are involved in, produce or bring you events service providers, such as credit-card payment processors, performing services on our behalf. Other businesses with which we partner or which we carefully select to offer you products, services, and promotions through our website or offline. Other third parties in limited circumstances, such as complying with legal requirements, preventing fraud, and protecting the safety of our users.'
        />

        <CustomSummary
          summary='Security'
          text='We take appropriate security measures to help safeguard personal information from unauthorized access, alteration, or disclosure.'
        />

        <CustomSummary
          summary='Purchase Policy'
          text='Our goal at Paytm Ticketnew is to make your purchasing experience easy, efficient and equitable, so we can get you on your way to live events as quickly as possible. The following purchase policies are designed to ensure your satisfaction and understanding of the purchase process on Ticketnew.com. This Purchase Policy is subject to, and incorporates by this reference, the Terms of Use. Each ticket that you purchase is a license to attend a particular event, and is subject to the additional terms set forth on that ticket.'
        />

        <CustomSummary
          summary='Pre Booking'
          text={
            <ol>
              <li>To increase your chances of confirming tickets, choose minimum 3 cinemas. Once you Pre-book tickets with us, giving all the necessary details that includes Showtime &amp; preferred theatre, we will send you a pre-book confirmation SMS/E-Mail. But it doesn&apos;t mean your tickets are confirmed and You should not show this message in the ticket counter.</li>
              <li>Once bookings open at the time of films release, we block the seats for you in your preferred theatre, and send you the order status with confirmed seat details through SMS/E-mail. Show this confirmation message the ticket counter &amp; enjoy the show!</li>
              <li>If there is any difference between the actual ticket price, and the amount you pay to pre-book the ticket, TicketNew ensures that the extra money will be refunded to you in 3-10 working days.</li>
              <li>The tickets will be allocated for you by Paytm TicketNew in the preferred theatres only if the seats are available for the requested show.</li>
              <li>If the seats are not available at the time of release date, your money will be refunded to you, that includes convenience fee, in 3 to 10 working days.</li>
              <li>Refunds will be credited to the wallets, UPI, netbanking, credit or debit card, (i.e) through the same mode by which you paid us.</li>
              <li>Please do remember that you can book a maximum of only 10 tickets &amp; not more than that.</li>
              <li>If your Pre-book fails during transaction, or if you don&apos;t receive any SMS after the pre-book, please feel free to call us on 1234567890</li>
              <li>If the movie gets postponed or the release gets cancelled, your money will be refunded in 3 to 10 working days.</li>
              <li>Paytm TicketNew reserves rights to modify/change terms applicable to the program without any reasons or prior intimation.</li>
              <li>Paytm TicketNew reserves the right to disqualify any user or booked tickets if any fraudulent activity is identified as being carried out for the purpose of availing the benefits under the program.</li>
            </ol>
          }
        />

        <CustomSummary
          summary='Payment Methods'
          text='Paytm TicketNew accepts Visa and MasterCard credit cards, UPI, Paytm Wallet and multiple banks in net-banking.'
        />

        <CustomSummary
          summary='Who You Are Buying From'
          text='Paytm TicketNew acts as the agent to those who are promoting or otherwise providing the events for which you purchase tickets, such as venues, teams and event promoters. Paytm TicketNew generally is just a services provider with respect to the sale.'
        />

        <CustomSummary
          summary='Pricing and Availability'
          text='Paytm TicketNew sells tickets on behalf of theatres, promoters, teams, bands and venues, event organisers which means Paytm TicketNew does not set the ticket prices or determine seating locations. The cost of the tickets displayed in the respective events, theatres directly comes from the theatre live booking system, Paytm TicketNew does not approve or set the pricing of tickets. Most distribution points generally access the same ticketing system and inventory. Therefore, tickets for popular movies, events may sell out quickly. Occasionally, additional tickets may be available prior to the event. However, Paytm TicketNew does not control this inventory or its availability.'
        />

        <CustomSummary
          summary='Order Confirmation'
          text='If you do not receive a confirmation number (in the form of a confirmation page or email or SMS) after submitting payment information, or if you experience an error message or service interruption after submitting payment information, it is your responsibility to confirm with us whether or not your order has been placed. Only you may be aware of any problems that may occur during the purchase process.Paytm TicketNew will not be responsible for losses (monetary or otherwise) if you assume that an order was not placed because you failed to receive confirmation.'
        />

        <CustomSummary
          summary='Canclled and Postponed Events'
          text='Tickets to Cancelled/Postponed Events will not be refund by Paytm TicketNew.'
        />

        <CustomSummary
          summary='Refunds and Exchanges'
          text='Paytm TicketNew accepts Visa and MasterCard credit cards, UPI, Paytm Wallet and multiple banks in net-banking.'
        />

        <CustomSummary
          summary='Billing Information and verification'
          text='Orders are processed only after validating the details provided, has been verified. If, we receive incorrect details or credit card account information for a ticket order that can delay processing and confirmation of tickets. In these cases, Paytm TicketNew customer service will attempt to contact you, using the information provided at the time of purchase. If Paytm TicketNew is unable to reach you after its initial attempt, Paytm TicketNew may cancel your order and may sell your tickets to another customer without further notice.'
        />

        <CustomSummary
          summary='Permitted Use'
          text='You agree that you are only authorized to visit, view and to retain a copy of pages of this Site for your own personal use, and that you shall not duplicate, download, publish, modify or otherwise distribute the material on this Site for any purpose other than to review event and promotional information, for personal use, or to purchase tickets or merchandise, unless otherwise specifically authorized by Paytm TicketNew to do so. You also agree not to deep-link to the site for any purpose, unless specifically authorized by Paytm TicketNew to do so or unless deep-linking to Paytm TicketNew pages where you have posted tickets for sale. The content and software on this Site is the property of Paytm TicketNew and/or its suppliers. Access and Interference You agree that you will not use any robot, spider or other automatic device, process or means to access the Site. Nor shall you use any manual process to monitor or copy our web pages or the content contained thereon or for any other unauthorized purpose without our prior expressed written permission. You agree that you will not use any device, software or routine that interferes with the proper working of the Site nor shall you attempt to interfere with the proper working of the Site. You agree that you will not take any action that imposes an unreasonable or disproportionately large load on our infrastructure. You agree that you will not access, reload or "refresh" transactional event or ticketing pages, or make any other request to transactional servers, more than once during any three second interval. You agree that you will not copy, reproduce, alter, modify, create derivative works, or publicly display any content (except for your own personal, non-commercial use) from the Site without the prior expressed written permission of Paytm TicketNew. Paytm TicketNew is not required to provide any refund to you if it exercises any of its rights or remedies because you have violated these Terms or any of Paytm TicketNew&apos;s rights. Additionally, we reserve the right, in our sole discretion, to modify, suspend or discontinue any part of this Site at any time, with or without notice to you. We also reserve the right, in our sole discretion, to impose limits on certain features and services and to restrict access to any part or to the entire Site without notice to you. We shall not be liable to you or any third party for any claim or cause of action arising out of our exercise of the foregoing rights.'
        />

        <CustomSummary
          summary='Disclaimer'
          text='Paytm TicketNew does not promise that the site will be error-free, uninterrupted, or that it will provide specific results from use of the site or any content, search or link on it. The site and its content are delivered on an "as-is" and "as-available" basis. Paytm TicketNew cannot ensure that files you download from the site will be free of viruses or contamination or destructive features. Paytm TicketNew disclaims all warranties, express or implied, including also any implied warranties of merchantability and fitness for a particular purpose. Paytm TicketNew will not be liable for any damages of any kind arising from the use of this site, including without limitation, direct, indirect, incidental, and punitive and consequential damages.Paytm TicketNew makes no guarantee of any specific result from use of this site or use of the Paytm TicketNew services. Paytm TicketNew disclaims any and all liability for the acts, omissions and conduct of any third party users, Paytm TicketNew users, advertisers and/or sponsors on the site, in connection with the Paytm TicketNew service or otherwise related to your use of the site and/or the Paytm TicketNew service. Paytm TicketNew is not responsible for the products, services, actions or failure to act of any venue, performer, promoter or other third party in connection with or referenced on the site.'
        />

      </ul>
    </div>
  )
}

export default TermsandConditions