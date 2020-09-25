
module.exports = process.stdin.on("data", (data) => {  
    const directory = process.cwd()
    process.stdout.write(directory);
    process.stdout.write("\nprompt > ");
});