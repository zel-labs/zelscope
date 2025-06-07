"use server"
// app/api/live-data/route.ts
export async function GET() {
const url = process.env.API_SERVER
    console.log(url)
  const data = await fetch("http://localhost:8545/latestBlocks").then(res => res.json());

  return Response.json({ data });
}
