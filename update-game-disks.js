
const fs = require("fs");

fs.readdir('game-disks', 'utf8', (err, files) => {
    if (err) {
        console.error(err);
    }
    else {
        let declaration =
            `// this file is auto-generated\n`+
            `// run 'node update-game-disks.js' to refresh this file.\n\n`+
            `const gameDisks = [\n`;
        files.filter(dirEntry => dirEntry !== 'index.js')
             .forEach(dirEntry => {
                let filename = dirEntry;
                let diskType = 'file';
                if (!dirEntry.match(/\.js/)) {
                    filename = `${dirEntry}/index.js`;
                    diskType = 'dir';
                }
                const sourceFile = `game-disks/${filename}`;
                const sourceCode = fs.readFileSync(sourceFile, 'utf8');
                let titleMatch = sourceCode.match(/menu.title=([^\r\n]+)/);
                let descMatch = sourceCode.match(/menu.desc=([^\r\n]+)/);
                let diskInfo = {
                    sourceFile,
                    diskType,
                    title: titleMatch? titleMatch[1] : dirEntry,
                    desc: descMatch? descMatch[1] : 'No description',
                };
                declaration += `  ${JSON.stringify(diskInfo)},\n`
             });
        declaration += "];\n\n";
        fs.writeFile('game-disks/index.js', declaration, 'utf8', () => {});
    }
});
