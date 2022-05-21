const dgram = require('node:dgram')
const socket = dgram.createSocket('udp4')

socket.on('error', (err) => {
  console.log(`server error:\n${err.stack}`)
  socket.close()
})

socket.on('message', (msg, rinfo) => {
  console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`)
})

socket.on('listening', () => {
  const address = socket.address()
  console.log(`server listening ${address.address}:${address.port}`)
})

socket.bind(6881)

const host = '212.129.33.59'
const msg = 'd1:ad2:id20:abcdefghij01234567896:target20:mnopqrstuvwxyz123456e1:q9:find_node1:t2:aa1:y1:qe'
socket.send(msg,0,msg.length,6881,host,()=>{
    console.log('send',msg,'to',host,'success')
})