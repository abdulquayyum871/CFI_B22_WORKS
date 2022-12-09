var readlineSync = require('readline-sync');
var ip = readlineSync.question("eNTER AN ADDRESS:")
function isValidIPv6(ip) {
    // Split the address into blocks
    let blocks = ip.split(":");
    
    // Check if the number of blocks is exactly 8
    if (blocks.length !== 8) return false;
    
    // Check if each block is a valid hexadecimal number
    for (let block of blocks) {
      if (!/^[0-9a-fA-F]{1,4}$/.test(block)) return false;
    }
    
    // Check if the address does not contain any leading zeros in each block
    for (let block of blocks) {
      if (block.length > 1 && block[0] === "0") return false;
    }
    
    // Check if the address does not contain any consecutive blocks of zeros, except for the zero blocks at the beginning or end of the address
    let consecutiveZeros = 0;
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i] === "0") {
        consecutiveZeros++;
      } else {
        if (consecutiveZeros > 1) return false;
        consecutiveZeros = 0;
      }
    }
    
    return true;
  }

  isValidIPv6("2001:0db8:3c4d:0015:0000:0000:1a2f:1a2b")
  