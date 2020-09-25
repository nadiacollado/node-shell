// let pwdFunc = require('./pwd')
// const ls = require('./ls')


process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
    const cmd = data.toString().trim()
    if (cmd === 'pwd') {
       return require('./pwd')
    } else if (cmd === 'ls') {
        return require('./ls')
    } else {
        return 'NO!'
    }
    // process.stdout.write("You typed: " + cmd);
    process.stdout.write("\nprompt > ");
})


// we want the prompt to prompt --> CHECK
// we pwd to return directory