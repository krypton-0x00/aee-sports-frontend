export async function POST(req:Request){
    const body = await req.json();
    console.log(body)
    return new Response('Hello from your server', { status: 200 })
}

export async function GET(){

  return new Response('Hello from your server', { status: 200 })
}