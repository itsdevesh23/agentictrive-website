import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { firstName, lastName, workEmail, phone, company, serviceType, message } = req.body || {};

  if (!firstName || !lastName || !workEmail || !message) {
    return res.status(400).json({ 
      success: false, 
      message: 'Please fill in all required fields.' 
    });
  }

  const gmailUser = process.env.GMAIL_USER || 'agentictrive@gmail.com';
  const gmailPass = process.env.GMAIL_APP_PASS || 'uvfqdtcoafkdzvuz';

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPass,
      },
    });

    // 1. Email to Agency Owner (New Lead Notification)
    const adminMailOptions = {
      from: `"Agentictrive Agency" <${gmailUser}>`,
      to: gmailUser,
      replyTo: workEmail,
      subject: `🚨 New Request: ${firstName} ${lastName} (${serviceType || 'Web/AI'}) - ${company || 'Individual'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #09090B; color: #ffffff; padding: 30px; border-radius: 16px; border: 1px solid #1e293b;">
          <h2 style="color: #3b82f6; margin-top: 0;">New Project / Audit Request</h2>
          <p style="color: #94a3b8;">A new prospect submitted an inquiry through the Agentictrive contact form.</p>
          
          <hr style="border: 0; border-top: 1px solid #334155; margin: 20px 0;" />
          
          <table style="width: 100%; border-collapse: collapse; text-align: left; color: #e2e8f0;">
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-weight: bold; width: 140px;">Name:</td>
              <td style="padding: 8px 0;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-weight: bold;">Service Needed:</td>
              <td style="padding: 8px 0; color: #38bdf8; font-weight: bold;">${serviceType || 'Custom Web Development / AI'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-weight: bold;">Work Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${workEmail}" style="color: #3b82f6;">${workEmail}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px 0;"><a href="tel:${phone || ''}" style="color: #3b82f6;">${phone || 'Not provided'}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #94a3b8; font-weight: bold;">Company & Industry:</td>
              <td style="padding: 8px 0;">${company || 'Not provided'}</td>
            </tr>
          </table>

          <div style="margin-top: 20px; background: #18181b; padding: 20px; border-radius: 12px; border: 1px solid #27272a;">
            <h4 style="margin: 0 0 10px 0; color: #3b82f6;">Project Details & Goals:</h4>
            <p style="margin: 0; color: #cbd5e1; white-space: pre-line;">${message}</p>
          </div>

          <div style="margin-top: 24px; text-align: center;">
            <a href="https://wa.me/${(phone || '').replace(/[^0-9]/g, '')}" style="display: inline-block; background: #22c55e; color: #ffffff; padding: 10px 20px; border-radius: 8px; font-weight: bold; text-decoration: none;">
              📱 Message Lead on WhatsApp
            </a>
          </div>

          <p style="font-size: 12px; color: #64748b; margin-top: 30px; text-align: center;">
            Sent automatically via Agentictrive Serverless Function
          </p>
        </div>
      `,
    };

    // 2. Auto-reply Confirmation Email to Lead
    const leadMailOptions = {
      from: `"Agentictrive Agency" <${gmailUser}>`,
      to: workEmail,
      subject: `We received your request - Agentictrive`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #09090B; color: #ffffff; padding: 30px; border-radius: 16px; border: 1px solid #1e293b;">
          <h2 style="color: #3b82f6; margin-top: 0;">Thank You, ${firstName}!</h2>
          <p style="color: #e2e8f0; line-height: 1.6;">
            We've received your request for <strong>${serviceType || 'your business'}</strong> (${company || 'your company'}).
          </p>
          <p style="color: #94a3b8; line-height: 1.6;">
            Our Lead Strategist is reviewing your requirements and will reach out to you within <strong>24 business hours</strong> with initial recommendations and project timelines.
          </p>
          
          <div style="margin: 30px 0; padding: 20px; background: #18181b; border-radius: 12px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #94a3b8; font-size: 14px;">Need immediate assistance or WhatsApp contact?</p>
            <p style="margin: 8px 0 0 0; font-weight: bold;"><a href="https://wa.me/916303690660" style="color: #3b82f6;">Chat with us directly on WhatsApp (+91 63036 90660)</a></p>
          </div>

          <p style="color: #64748b; font-size: 14px; margin-top: 30px;">
            Best regards,<br />
            <strong style="color: #ffffff;">The Agentictrive Team</strong>
          </p>
        </div>
      `,
    };

    const tasks = [
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(leadMailOptions)
    ];

    // Optional Google Sheets Webhook Sync
    const sheetWebhook = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    if (sheetWebhook) {
      tasks.push(
        fetch(sheetWebhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ firstName, lastName, workEmail, phone, company, serviceType, message })
        }).catch(err => console.error('⚠️ Google Sheets Sync Error:', err))
      );
    }

    await Promise.all(tasks);

    return res.status(200).json({
      success: true,
      message: 'Your AI Audit request has been submitted successfully! Check your inbox for confirmation.'
    });

  } catch (error) {
    console.error('❌ [SMTP Error] Failed to send email:', error);
    return res.status(500).json({
      success: false,
      message: error.message || 'Failed to send email via SMTP server.'
    });
  }
}
