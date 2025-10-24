import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // TODO: Add email sending logic here
    // For now, just log the data
    console.log('Contact form submission:', { name, email, message });

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { message: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}