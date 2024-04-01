// @ts-check

/// <reference types="../index.d.ts"/>

const wasmLink = "/xhe-vpn.wasm";

const net = await vpn.connect({
  Key: "087ec6e14bbed210e7215cdc73468dfa23f080a1bfb8665b2fd809bd99d28379",
  WASM: wasmLink,
  Route: ["192.168.4.28/24"],
  Link: ["ws://f928d4f6c1b86c12f2562c10b07c555c5c57fd00f59e90c8d8d88767271cbf7c@127.0.0.1:2234"], 
  Peer: [
    {
      Pubkey:
        "c4c8e984c5322c8184c72265b92b250fdb63688705f504ba003c88f03393cf28",
      PSK: "ba3ef732682972723e233daf6daaa748a6641e4c22b0bc726d94ca03b35055bb",
      Allow: ["192.168.4.29/32"],
    },
  ],
});

const srv = await net.listen("0.0.0.0:80", {
  fetch(req) {
    return new Response("ok");
  },
});
