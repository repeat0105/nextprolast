
import { NextResponse } from 'next/server';
import axios from "axios";

export async function GET(req) {

 
    const {start,end} = Object.fromEntries(req.nextUrl.searchParams);
    
    
    try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_AXIOS_URL}${start}/${end}`); // 여기에 오픈API URL을 넣으세요.
        const data = res.data;
        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching data from API:', error);
        return NextResponse.json({ message: 'Error fetching data' });
    }
}

