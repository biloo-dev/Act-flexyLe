  const fs = require('fs')
const NodeRSA = require('node-rsa'); 

async function encrypt(License) {
  try {
    let filePublicKey = await fs.readFileSync('./keys/public.pem', "utf8")
    let publicKey = new NodeRSA() 
    let = publicKey.importKey(filePublicKey)
    let lis = await EncryptionFile(publicKey.encrypt(License, 'base64'))
     fs.writeFileSync('license.txt', lis) 
    return lis
    
  } catch (err) {
    console.log('err encrypt:>> ', err);
  }
}
async function decrypt(License) {
  try { 
    let filePrivetKey = await fs.readFileSync('./keys/privet.pem', "utf8")
    let privetKey = new NodeRSA()  
    privetKey.importKey(filePrivetKey)
    return privetKey.decrypt(License, 'utf8')
  } catch (err) {
    console.log('err decrypt:>> ', err);
  }
}
async function checkLicense() {
  try {
    let IMSI = 603016030559064;
    let IMEI = 866481022645563; 
    let license = await fs.readFileSync('./license.txt', "utf8") 
    let decrypts = await DecryptionFile(license)

    console.log('decrypt(IMSI + IMEI) :>> ', await decrypt(decrypts));
    
  } catch (err) {
    console.log('err checkLicense:>> ', err);
  }
}
checkLicense()
const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey'); 
async function EncryptionFile(data) { 
  try {
    return cryptr.encrypt(data); 
  } catch (err) {
    console.log('err EncryptionFile:>> ', err);
  } 
} 
async function DecryptionFile(data) {
  try { 
    const cryptr = new Cryptr('myTotalySecretKey');  
    return cryptr.decrypt(data.toString());  
  } catch (err) {
    console.log('err DecryptionFile:>> ', err);
  } 
}

 


