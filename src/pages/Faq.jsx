import CustomSummary from "../components/CustomSummary"

function Faq() {
  return (
    <div className="container bg-white p-5 my-5 border" style={{ borderRadius: '30px' }}>
      <h1 className="fw-bold mb-5">FAQ</h1>

      <ul className='bg-white list-unstyled d-flex flex-column gap-2 summary-list' style={{ fontSize: '16px' }}>

        <CustomSummary
          summary='Will Paytm TicketNew ask for my personal and bank details to book tickets?'
          text='You can book tickets only through Paytm TicketNew website and app. We do not process phone/email requests from users. Please note that Paytm TicketNew or its employees will never contact you requesting for your bank account number/ card number/ card expiry date/ CVV/ OTP/ net banking password to help you book movie tickets. Do not share these details with anyone over phone or e-mail as this could lead to fraudulent transactions.'
        />

        <CustomSummary
          summary='How to login/Register with us?'
          text='Are you a new user? No worries! All you have to do is, Click Profile icon option on the homepage, and fill up your mobile number. After submitting it, you will be receiving an OTP on your phone. Now, you can just log in by entering the OTP, and book movie tickets in a hassle-free way.'
        />

        <CustomSummary
          summary='Where can the users find details about upcoming films, show timings &amp; more?'
          text='The users can visit our website (ticketnew.com), and check the details about upcoming films, show timings, the genre of films, theatres and more on the homepage. They can book tickets in a hassle-free &amp; secured way through online transactions using wallets, debits and credit cards from anywhere and anytime.'
        />

        <CustomSummary
          summary='How to book your movie tickets online?'
          text='The customers should enter the given login id (phone number that you registered in ticketnew.com), and then choose their preferred location, theatres, show timings, &amp; no. of seats. The site then redirects the user to the online transaction page where they will be given a choice to make payment availing offers through wallets, credit or debit cards.'
        />

        <CustomSummary
          summary='How many tickets can I book per transaction?'
          text='A customer is allowed to book a maximum of 10 tickets per transaction. For Bulk bookings, please feel free to call us on 1234567890.'
        />

        <CustomSummary
          summary='What is the minimum age for children to book tickets?'
          text='Children aged 3 yrs and above require a ticket to enter the cinema hall.'
        />

        <CustomSummary
          summary='How to avail the Movie offers/discounts on Paytm TicketNew?'
          text='We do have a lot of exciting offers on Paytm TicketNew, and it can be availed using wallets, credit/debit cards. The promo offers will be available on your review payment page that appears after selecting seats. One should also read the terms and conditions of the offers your planning to avail before making the transactions.'
        />

        <CustomSummary
          summary='Payment &amp; Online transaction'
          text={
            <>
              <p>You can make online transactions &amp; book movie tickets using UPI, Debit cards, Credit cards, Netbanking or Paytm wallets. After entering your credit/debit card details, including CVV number in the online transaction page, the site will direct you to the bank&apos;s website where you have to enter Verification code (an extra-level of authentication) which is mandatory for any online transaction in India. After completing the banking process, you will be redirected again to Paytm TicketNew website where you will get the booking confirmation message. Modes of Payment available on Paytm TicketNew Website/App</p>
              <ul style={{listStyleType: 'disc'}}>
                <li>NetBanking</li>
                <li>Credit/Debit Card</li>
                <li>Paytm Wallet</li>
                <li>Unified Payment Interface</li>
              </ul>
            </>
          } />

        <CustomSummary
          summary='How and where can I check the booking status?'
          text='After completing the online transaction, please do check if you have received any confirmation SMS or Emails. If you have received, then all you have to do is, collect the tickets at the theatre premises/Counter with the order ID. But if you haven&rsquo;t received any such messages, go to the order status page on our site and check whether your booking details are reflecting on the same.'
        />

        <CustomSummary
          summary='What should I do if I haven&rsquo;t received the confirmed tickets through SMS or Emails?'
          text='Due to technical issues, you may not receive any SMS or Emails of the confirmed tickets. It happens on rare occasions, and we deeply regret it. However, in such situations, it is completely your responsibility to visit the Order Status Page and check whether your booking confirmation is reflecting on the page. If its reflecting, all you have to do is, take a print out of it. As simple as that. If you are unable to find anything on the Order Status Page, please do click &lsquo;Unpaid/Pending&rsquo; tab and you can confirm the tickets all by yourself. In case, if you find it difficult to confirm, please feel free to call us 1234567890 or Email us on support@faketicketnew.com. We are here to help you in confirming the tickets.'
        />

        <CustomSummary
          summary='What if my booking status is not reflecting on the page?'
          text='It&apos;s a very rare situation and may occur due to network error caused at the time confirming the transaction. But you don&rsquo;t have to worry about it. Paytm TicketNew doesn&rsquo;t charge for the transaction made if the order is not reflecting on the page. Also, in such situations, please do not try making another transaction at least for next 20 minutes as it might result in duplication/ multiple transactions. If at all the amount gets debited from your bank account or wallet, the refund of the same will happen within 3 to 10 working days.<br>For any queries or clarification regarding failed transactions or website issues, please do email us on support@faketicketnew.com. Don&rsquo;t forget to mention the date &amp; time of transaction, Name, login ID &amp; Theatre in the mail. You can also reach us on 1234567890.<br>NOTE: To have a clear update of every transaction you make on Paytm TicketNew, make sure that you sign-in using your registered USER ID. Only then, all your transactions or booking gets displayed without any error in the &lsquo;My Order Status&rsquo; page. In case, if you have booked tickets without signing in, the transactions/booking status may not reflect in the &lsquo;My Order Status&rsquo; page.'
        />

        <CustomSummary
          summary='How can I avoid or get rid of failed transactions/booking?'
          text='Make sure that your network connection is fine, without any fluctuations. Also, we always recommend you to always clear &lsquo;CACHE&rsquo; in your app or website to avoid failed transactions/booking.'
        />

        <CustomSummary
          summary='Where can I collect the tickets I booked on Paytm Ticketnew?'
          text='As we have mentioned earlier, you can show the order/confirmation ID received through SMS at the theatre ticket counter/ premises and collect the ticket. It is also safe for you to carry the credit/Debit card used to make the online transaction. Sometimes, you might not receive any SMS from Paytm TicketNew, as you might have activated Do Not Disturb/Call mode.'
        />

        <CustomSummary
          summary='Will you refund the money if a show gets cancelled?'
          text='A customer will be informed in advance if a show gets cancelled or postponed. This is a rare situation, and we don&rsquo;t hold responsibility for the cancellation of the show. However, the amount transacted will be refunded to their respective source within 7 to 10 business days.'
        />

        <CustomSummary
          summary='Can I cancel the tickets if I book them by mistake or If I prefer another show time?'
          text='As per law, tickets once booked cannot be cancelled or replaced. Also, it&rsquo;s impossible to make changes in the show timings, date or seats once the tickets are booked.'
        />

        <CustomSummary
          summary='Why Paytm TicketNew enforces a Time-limit during the online transaction process?'
          text='We ensure that no one else purchases the seats you have selected until you cancel the transaction process or abandon it in the middle. But due to high demand, we&apos;ve implemented a time limit for each checkout page based on the amount of information we want you to fill up. If you fail to complete the transaction within the given time period, the blocked tickets will be released for others to purchase. All you have is ten minutes, to complete the booking process.'
        />

        <CustomSummary
          summary='How can I ensure that the transaction made through this website is secure?'
          text='Our service is equipped with the latest state-of-the-art technology to make sure that every transaction made through Paytm TicketNew website/App is safe and secure. All transactions happen through a highly-protected browser and the best software available for secure online commerce business. For any help/assistance, you can always call us on 1234567890 or Email us on support@faketicketnew.com'
        />

        <CustomSummary
          summary='How to avail Coupon Code?'
          text='After entering the code on order review screen, all you have to do is, click apply, and wait for this message on-screen for successful application. Note that you will be entitled to avail the coupon code/ cashback/discount only after logging in.'
        />

        <CustomSummary
          summary='Need any Help or Assistance?'
          text='You can always reach us on : 1234567890 (or) Email to support@faketicketnew.com'
        />

      </ul>
    </div>
  )
}

export default Faq