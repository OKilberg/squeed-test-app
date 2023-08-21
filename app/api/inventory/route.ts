import { NextResponse } from "next/server"

let data = {
    inventory: {
        computers: {
            name: 'Macbook Pro 16"',
            amount: 11
        },
        mugs: {
            name: 'Ikea Coffee Mug',
            amount: 23
        },
        desks: {
            name: 'Uplift V2 Standing Desk',
            amount: 7
        },

    }
}

export async function GET(request: Request) {
    /*const res = await fetch('', 
        headers:{
            'Content-Type': 'application/json',
            'API-Key': 123123
        }
    );*/
    

    return NextResponse.json({inventory: data.inventory})
}

export async function POST(request: Request) {
    /*const res = await fetch('', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'API-Key': process.env.DATA_API_KEY,
      },
      body: JSON.stringify({ time: new Date().toISOString() }),
    })*/

    const { newItem } = await request.json()
   
    data.inventory = {...data.inventory, [newItem.category]: {name: newItem.name, amount: newItem.amount}}
    console.log(data)
    return NextResponse.json(data)
  }