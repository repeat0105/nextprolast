import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(req) {

    // 여기서 오픈API 요청을 보내고 응답을 반환합니다.    
    try {
        const res = await axios.get(process.env.NEXT_PUBLIC_WEATHER_URL); // 여기에 오픈API URL을 넣으세요.
        const data = res.data;
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching data from API:', error);
        return NextResponse.json({ message: 'Error fetching data' });
    }
}

