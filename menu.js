
(function() {
    
    const input = document.querySelector('.input');
    input.style.display = 'none';
    const menu = document.querySelector('#menu');
    gameDisks.forEach(diskInfo => {
        const menuItem = document.createElement('div');
        const menuHTML = `<b>${diskInfo.title}</b> - <i>${diskInfo.desc}</i>`;
        menuItem.insertAdjacentHTML('beforeend', menuHTML);
        menuItem.onclick = clickHandler(diskInfo.sourceFile, diskInfo.diskType);
        menu.appendChild(menuItem);
    });
    function clickHandler(sourceFile, type) {
        console.log(sourceFile, type);
        return () => {
            let diskDir = null;
            if (type === 'dir') {
                diskDir = sourceFile.replace("/index.js","");
            }
            loadScript(sourceFile, diskLoadHandler(diskDir), onDiskError);
            menu.remove();
            input.style.display = 'block';
        }
    }
    function diskLoadHandler(diskDir) {
        return function onDiskLoad() {
            if (diskDir) {
                loadRoomFile.diskDir = diskDir;
            }
            loadDisk(diskMain);
        }
    }
    function onDiskError() {
        document.querySelector('#output')
        .appendChild(
            document.createTextNode('Error loading game disk.')
        );
    }
})();
