  const fs = require('fs')
  const NodeRSA = require('node-rsa');
  const key = new NodeRSA({b: 1024}); 
  const publicDer = key.exportKey('pkcs8-public-pem');
  const privateDer = key.exportKey('pkcs8-private-pem'); 
  fs.writeFileSync('./keys/public.pem', publicDer)
  fs.writeFileSync('./keys/privet.pem', privateDer)