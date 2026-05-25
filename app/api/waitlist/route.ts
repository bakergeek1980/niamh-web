import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const EMAIL_FR = (email: string) => `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#FDF6EE;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FDF6EE;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:white;border-radius:24px;overflow:hidden;border:1px solid #EDE0D4;max-width:560px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1C0E0A,#3D1A14);padding:40px 48px;text-align:center;">
            <div style="display:inline-flex;align-items:center;gap:10px;margin-bottom:16px;">
              <div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#E05780,#FF8FAB);display:inline-flex;align-items:center;justify-content:center;">
                <span style="color:white;font-weight:700;font-size:18px;font-family:Georgia,serif;">N</span>
              </div>
              <span style="color:white;font-size:22px;font-weight:600;font-family:Georgia,serif;letter-spacing:-0.01em;">Niamh</span>
            </div>
            <p style="margin:0;color:#E05780;font-size:12px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;">✦ Liste d'attente</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:48px 48px 40px;">
            <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:36px;font-weight:600;color:#1C0E0A;line-height:1.1;">
              Tu es sur la liste ✦
            </h1>
            <p style="margin:0 0 24px;font-size:16px;color:#5C3D2E;line-height:1.7;">
              Merci de rejoindre Niamh. Tu seras parmi les premières à savoir quand l'app arrive sur l'App Store.
            </p>
            <p style="margin:0 0 32px;font-size:15px;color:#8C7B73;line-height:1.7;">
              En attendant, suis-nous pour les updates — et prépare-toi à nourrir ton éclat.
            </p>

            <!-- CTA -->
            <table cellpadding="0" cellspacing="0" style="margin-bottom:40px;">
              <tr>
                <td style="background:linear-gradient(135deg,#E05780,#FF8FAB);border-radius:16px;padding:0;">
                  <a href="https://niamh.app" style="display:inline-block;padding:14px 32px;color:white;font-size:15px;font-weight:600;text-decoration:none;">
                    Découvrir Niamh →
                  </a>
                </td>
              </tr>
            </table>

            <hr style="border:none;border-top:1px solid #EDE0D4;margin:0 0 32px;">

            <p style="margin:0;font-size:13px;color:#8C7B73;line-height:1.6;">
              Tu as rejoint la liste avec l'adresse <strong style="color:#5C3D2E;">${email}</strong>.<br>
              Pour te désinscrire, réponds simplement "Stop" à cet email.
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#F5E9D8;padding:24px 48px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#8C7B73;">
              © 2026 Niamh · Fait avec soin, en France ·
              <a href="https://niamh.app/privacy" style="color:#C47B5A;text-decoration:none;">Confidentialité</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
`

const EMAIL_EN = (email: string) => `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#FDF6EE;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FDF6EE;padding:40px 20px;">
    <tr><td align="center">
      <table width="560" cellpadding="0" cellspacing="0" style="background:white;border-radius:24px;overflow:hidden;border:1px solid #EDE0D4;max-width:560px;width:100%;">

        <!-- Header -->
        <tr>
          <td style="background:linear-gradient(135deg,#1C0E0A,#3D1A14);padding:40px 48px;text-align:center;">
            <div style="display:inline-flex;align-items:center;gap:10px;margin-bottom:16px;">
              <div style="width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,#E05780,#FF8FAB);display:inline-flex;align-items:center;justify-content:center;">
                <span style="color:white;font-weight:700;font-size:18px;font-family:Georgia,serif;">N</span>
              </div>
              <span style="color:white;font-size:22px;font-weight:600;font-family:Georgia,serif;letter-spacing:-0.01em;">Niamh</span>
            </div>
            <p style="margin:0;color:#E05780;font-size:12px;font-weight:600;letter-spacing:0.15em;text-transform:uppercase;">✦ Waitlist</p>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:48px 48px 40px;">
            <h1 style="margin:0 0 16px;font-family:Georgia,serif;font-size:36px;font-weight:600;color:#1C0E0A;line-height:1.1;">
              You're on the list ✦
            </h1>
            <p style="margin:0 0 24px;font-size:16px;color:#5C3D2E;line-height:1.7;">
              Thank you for joining Niamh. You'll be among the first to know when the app launches on the App Store.
            </p>
            <p style="margin:0 0 32px;font-size:15px;color:#8C7B73;line-height:1.7;">
              In the meantime, check out our website for updates — and get ready to nourish your radiance.
            </p>

            <!-- CTA -->
            <table cellpadding="0" cellspacing="0" style="margin-bottom:40px;">
              <tr>
                <td style="background:linear-gradient(135deg,#E05780,#FF8FAB);border-radius:16px;padding:0;">
                  <a href="https://niamh.app" style="display:inline-block;padding:14px 32px;color:white;font-size:15px;font-weight:600;text-decoration:none;">
                    Discover Niamh →
                  </a>
                </td>
              </tr>
            </table>

            <hr style="border:none;border-top:1px solid #EDE0D4;margin:0 0 32px;">

            <p style="margin:0;font-size:13px;color:#8C7B73;line-height:1.6;">
              You signed up with <strong style="color:#5C3D2E;">${email}</strong>.<br>
              To unsubscribe, simply reply "Stop" to this email.
            </p>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#F5E9D8;padding:24px 48px;text-align:center;">
            <p style="margin:0;font-size:12px;color:#8C7B73;">
              © 2026 Niamh · Made with care, in France ·
              <a href="https://niamh.app/privacy" style="color:#C47B5A;text-decoration:none;">Privacy</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
`

export async function POST(request: NextRequest) {
  try {
    const { email, lang } = await request.json() as { email: string; lang: string }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const audienceId = process.env.RESEND_AUDIENCE_ID
    if (!audienceId) {
      return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 })
    }

    // Add to Resend Audience (handles duplicates gracefully)
    await resend.contacts.create({
      email: email.toLowerCase(),
      audienceId,
      unsubscribed: false,
    })

    // Send confirmation email
    await resend.emails.send({
      from: 'Niamh <contact@niamh.app>',
      to: email,
      subject: lang === 'en'
        ? "You're on the Niamh waitlist ✦"
        : "Tu es sur la liste d'attente Niamh ✦",
      html: lang === 'en' ? EMAIL_EN(email) : EMAIL_FR(email),
    })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
