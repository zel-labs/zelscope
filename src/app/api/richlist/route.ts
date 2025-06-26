"use server"
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const data = await fetch('http://localhost:8545/accounts/').then(res => res.json());
  return NextResponse.json({ data});
}





