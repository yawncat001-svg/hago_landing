import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

// Resend 인스턴스 초기화 (RESEND_API_KEY 환경변수 필요)
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { companyName, contactInfo, concern } = body;

    // 입력값 검증
    if (!companyName || !contactInfo || !concern) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString('ko-KR', { timeZone: 'Asia/Seoul' });

    // Resend를 이용한 이메일 발송
    const { data, error } = await resend.emails.send({
      // Resend에서 도메인 인증 전에는 'onboarding@resend.dev'만 발신자로 사용 가능합니다.
      from: 'HAGO <onboarding@resend.dev>',
      to: [process.env.CONTACT_EMAIL || 'yawncat.001@gmail.com'],
      subject: `[AI 진단 신청] ${companyName} - ${timestamp}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
          <h2 style="color: #333; text-align: center; border-bottom: 2px solid #39ff14; padding-bottom: 10px;">
            AI 진단 리포트 신청 알림
          </h2>
          <p style="color: #666; text-align: center;">
            새로운 무료 AI 진단 신청이 접수되었습니다.
          </p>
          <br />
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; width: 30%; font-weight: bold;">신청 일시</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${timestamp}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">병원/기업명</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${companyName}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">담당자 연락처</td>
              <td style="padding: 10px; border: 1px solid #ddd;">${contactInfo}</td>
            </tr>
            <tr>
              <td style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9; font-weight: bold;">고민 내용</td>
              <td style="padding: 10px; border: 1px solid #ddd; white-space: pre-wrap;">${concern}</td>
            </tr>
          </table>
          <br />
          <p style="text-align: center; font-size: 12px; color: #999;">
            본 메일은 (주)하품하는고양이 웹사이트에서 발송되었습니다.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { message: 'Failed to send email', error },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
