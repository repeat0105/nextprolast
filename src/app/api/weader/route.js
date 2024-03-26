import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(req) {


    try {
        const res = await axios.get(process.env.NEXT_PUBLIC_WEATHER_URL); 
        const data = res.data;
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching data from API:', error);
        return NextResponse.json({ message: 'Error fetching data' });
    }
}

