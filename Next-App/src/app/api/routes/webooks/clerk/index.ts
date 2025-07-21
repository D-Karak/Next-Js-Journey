import { NextRequest, NextResponse } from 'next/server';

let webhookEvents: any[] = [];

export async function POST(req: NextRequest) {
    try {
        const data: {} | any = await req.json();

        // Store the webhook event
        webhookEvents.push(data);

        // Console log the event data
        console.log('Received Clerk webhook event:', data);

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error processing Clerk webhook:', error);
        return NextResponse.json({ success: false, error: error }, { status: 400 });
    }
}