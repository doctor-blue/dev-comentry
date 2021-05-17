const os = require('os')

const osInfo = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    cpu: os.cpus(),
    arch: os.arch(),
    userInfo: os.userInfo()
}

console.log(osInfo)