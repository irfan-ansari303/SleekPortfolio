import { NextResponse } from 'next/server';

export const revalidate = 60; // Cache for 1 minute

export async function GET() {
  const apiKey = process.env.WAKATIME_API_KEY;

  if (!apiKey || apiKey === 'your_secret_wakatime_api_key_here') {
    // Return mock data for demo purposes if the API key isn't set yet.
    return NextResponse.json({ 
      active: true, 
      todayText: '2 hr 45 min',
      yesterdayText: '4 hr 10 min',
      isMock: true
    });
  }

  try {
    const now = new Date();
    
    // User is in India (IST), enforce local timezone for precise date boundaries
    const formatter = new Intl.DateTimeFormat('en-CA', { 
      timeZone: 'Asia/Kolkata', 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit' 
    });
    
    const todayStr = formatter.format(now); // Gives strictly YYYY-MM-DD in IST
    
    const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
    const yesterdayStr = formatter.format(yesterday);
    
    const encodedKey = Buffer.from(apiKey).toString('base64');
    
    // Fetch summaries for yesterday and today
    const response = await fetch(`https://wakatime.com/api/v1/users/current/summaries?start=${yesterdayStr}&end=${todayStr}`, {
      headers: {
        Authorization: `Basic ${encodedKey}`
      },
      next: { revalidate: 60 }
    });

    if (!response.ok) {
      throw new Error(`WakaTime API HTTP error: ${response.status}`);
    }

    const data = await response.json();

    let todayData = { hours: 0, minutes: 0, total_seconds: 0 };
    let yesterdayData = { hours: 0, minutes: 0, total_seconds: 0 };

    if (data.data) {
      // Find today and yesterday from the returned range
      for (const day of data.data) {
        if (day.range.date === todayStr && day.grand_total) {
          todayData = day.grand_total;
        } else if (day.range.date === yesterdayStr && day.grand_total) {
          yesterdayData = day.grand_total;
        }
      }
    }

    // Determine active status: true if worked today for at least 1 minute
    const hasWorkedToday = todayData.total_seconds > 60;

    return NextResponse.json({
      active: hasWorkedToday,
      todayText: `${todayData.hours} hr ${todayData.minutes} min`,
      yesterdayText: `${yesterdayData.hours} hr ${yesterdayData.minutes} min`,
      isMock: false
    });
    
  } catch (error: any) {
    console.error('WakaTime Error:', error);
    // Graceful fallback incase of error
    return NextResponse.json({ 
      active: false, 
      todayText: '0 hr 0 min',
      yesterdayText: '0 hr 0 min',
      error: 'Failed to fetch WakaTime' 
    });
  }
}
