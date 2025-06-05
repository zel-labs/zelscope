import React from 'react'
import HeaderComponent from '../Component/header'
import FooterComponent from '../Component/footer'

export default function page() {
  return (
    <>
    <HeaderComponent/>
    <div className='max-w-[1450px] m-auto mb-20 bg-[#333] rounded-lg mt-20 p-20 pt-10'>
      <h1 className='text-[36px] mt-4 font-semibold text-center '>Zelscope Explorer </h1>

      <h2 className='text-[18px] mt-4 font-semibold'>Terms of Use</h2>
      <h2 className='text-[18px] mt-4 font-semibold'>Last Updated: May 26, 2025</h2>
      <div className='pl-10 pr-10 text-justify text-[14px] font-light leading-8'>
        <h3 className='mt-3 text-[16px] mb-1 font-semibold'>1. Introduction</h3>
        These Terms of Use ("Terms") constitute a legal agreement between you ("User" or "you") and Zelscope Explorer. ("Zelscope," "we," "our," or "us"), a company incorporated under the laws of [Your Jurisdiction]. By accessing or using any services provided by Zelscope, including but not limited to our website, APIs, and related services (collectively, the "Services"), you agree to be bound by these Terms and our Privacy Policy.
        <br/>
        If you do not agree to these Terms, please refrain from using our Services.<br/><br/>
        <h3 className='mt-3 text-[16px] mb-1 font-semibold'>2. Eligibility and User Representations</h3>
        By using our Services, you represent and warrant that:<br/>
        •	You are at least the age of majority in your jurisdiction and have the legal capacity to enter into these Terms.<br/>
        •	You have not been previously suspended or removed from using our Services. <br/>
        •	Your use of the services complies with all applicable laws and regulations.<br/>
        If you are using the Services on behalf of an entity, you represent that you are authorized to accept these Terms on behalf of that entity.<br/><br/>
        <h3 className='mt-3 text-[16px] mb-1 font-semibold'>3. Services Overview</h3>
        Zelscope provides a blockchain explorer platform that allows users to:<br/>
        •	View and analyze blockchain transactions, addresses, tokens, NFTs, and smart contracts. <br/>
        •	Access APIs for programmatic interaction with blockchain data.<br/>
        •	Utilize analytical tools and dashboards for blockchain data insights.<br/>
        The Services are provided for informational purposes only and should not be construed as financial or investment advice.<br/><br/>
        <h3 className='mt-3 text-[16px] mb-1 font-semibold'>4. Account Registration</h3>
        Certain features of the Services may require you to register for an account. By registering, you agree to:<br/>
        •	Provide accurate, current, and complete information.<br/>
        •	Maintain and promptly update your information.<br/>
        •	Maintain the security of your account credentials. <br/>
        •	Accept responsibility for all activities that occur under your account.<br/><br/>
        <h3 className='mt-3 text-[16px] mb-1 font-semibold'>5. Acceptable Use</h3>
        You agree not to:<br/>
        •	Use the Services for any unlawful purpose or in violation of any applicable laws. <br/>
        •	Engage in any activity that could harm or disrupt the Services or the networks connected to the Services.<br/>
        •	Attempt to gain unauthorized access to any portion of the Services or any other accounts, systems, or networks connected to the Services.<br/>
        •	Use any automated means to access or scrape data from the Services without our prior written consent. <br/><br/>
        <h3 className='mt-3 text-[16px] mb-1 font-semibold'>6. Intellectual Property</h3>
        All content, trademarks, service marks, logos, and other intellectual property displayed on the Services are the property of Zelscope or its licensors. You are granted a limited, non-exclusive, non-transferable license to access and use the Services for personal, non-commercial purposes. You may not reproduce, distribute, modify, or create derivative works from any content without our express written permission. <br/><br/>
        <h3 className='mt-3 text-[16px] mb-1 font-semibold'>7. API Usage</h3>
        If you access Zelscope's APIs:<br/>
        •	Your use is subject to our API Terms and Conditions. <br/>
        •	You must obtain an API key and comply with usage limits and guidelines.<br/>
        •	We reserve the right to suspend or terminate your API access for violations of these Terms or our API policies.<br/><br/>
        <h3 className='mt-3 text-[16px] mb-1 font-semibold'>8. Disclaimers</h3>
        The Services are provided "as is" and "as available" without warranties of any kind, either express or implied. Zelscope does not warrant that the Services will be uninterrupted, error-free, or free of viruses or other harmful components. We disclaim all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement.<br/><br/>
        <h3 className='mt-3 text-[16px] mb-1 font-semibold'>9. Limitation of Liability</h3>
        To the fullest extent permitted by law:<br/>
        •	Zelscope shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Services.<br/>
        •	Our total liability to you for any claims arising from the Services shall not exceed the amount you paid, if any, for accessing the Services.<br/><br/>
        <h3 className='mt-3 text-[16px] mb-1 font-semibold'>10. Indemnification</h3>
        You agree to indemnify, defend, and hold harmless Zelscope, its affiliates, officers, agents, and employees from any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the Services, your violation of these Terms, or your infringement of any rights of another.<br/><br/>
        <h3 className='mt-3 text-[16px] mb-1 font-semibold'>11. Termination</h3>
        We reserve the right to suspend or terminate your access to the Services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users of the Services, us, or third parties, or for any other reason.<br/><br/>
        <h3 className='mt-3 text-[16px] mb-1 font-semibold'>12. Changes to Terms</h3>
        We may update these Terms from time to time. Any changes will be effective upon posting the revised Terms on our website. Your continued use of the Services after the effective date constitutes your acceptance of the revised Terms <br/><br/>
        <h3 className='mt-3 text-[16px] mb-1 font-semibold'>13. Governing Law</h3>
        These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in [Your Jurisdiction] to resolve any legal matter arising from these Terms or your use of the Services.<br/><br/>
        <h3 className='mt-3 text-[16px] mb-1 font-semibold'>14. Contact Us</h3>
        If you have any questions or concerns about these Terms, please contact us at:<br/>
        Zelscope Explorer.<br/><br/>

        Email: [support@zelscope.space]<br/>
        Website: https://zelscope.org<br/>
      </div>

    </div>
    <FooterComponent/>
    </>
  )
}
