"use server"
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest, { params }: { params: { slug: string } }) {
  const slug = params.slug;
  const data = await fetch('http://localhost:8545/accountTxList/'+slug).then(res => res.json());
  return NextResponse.json({ data});
}





