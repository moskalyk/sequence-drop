import { sequence } from '0xsequence'
import { ethers } from 'ethers'

globalThis.window = globalThis;

export default {
  async fetch(request, env) {
    return await handleRequest(request)
  }
}

async function handleRequest(request) {
  console.log('test')
  const body = JSON.parse((await request.text()))
  return new Response(JSON.stringify({status: body.address}), {
                headers: {
                    "content-type": "application/json;charset=UTF-8",
                },
            })
}