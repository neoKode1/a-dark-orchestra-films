import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  // Return a message directing users to social media
  return NextResponse.json(
    { 
      success: false, 
      message: 'Our contact form is currently disabled. Please reach out to us through our social media channels instead.' 
    },
    { status: 200 }
  );
} 