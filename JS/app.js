const gallery = document.getElementById('game-container');

const imagesGameIcons = [
    '/RetroGameClub/images/game_icons/blizkrieg1.jpg',
    '/RetroGameClub/images/game_icons/diablo2.jpg',
    '/RetroGameClub/images/game_icons/homm3.jpg',
    '/RetroGameClub/images/game_icons/homm4.jpg',
    '/RetroGameClub/images/game_icons/homm5.jpg',
    '/RetroGameClub/images/game_icons/nfh.jpg',
    '/RetroGameClub/images/game_icons/oblivion.jpg',
    '/RetroGameClub/images/game_icons/warcraft3.jpeg',
    '/RetroGameClub/images/game_icons/willrock.jpg',
    '/RetroGameClub/images/game_icons/wc3rc.webp',
    '/RetroGameClub/images/game_icons/sacred.webp',
    '/RetroGameClub/images/game_icons/gothic3.jpg',
    '/RetroGameClub/images/game_icons/cod1.jpg',
    '/RetroGameClub/images/game_icons/maxpayne1.webp',
    '/RetroGameClub/images/game_icons/morrowind.webp',
    '/RetroGameClub/images/game_icons/RomeTW1.jpg',
    '/RetroGameClub/images/game_icons/cossacks.webp',
]

imagesGameIcons.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gallery.appendChild(img);
})

gallery.addEventListener('click', () => {
    alert('clicked');
})

                                 /*Анимация для BEST GAMES FROM THE WORLD!*/

function changeText() {
    const bestGameText = document.getElementById('bestGamesText');
    const bestGameTextChange = bestGameText.textContent;
    bestGameText.textContent = '';
    for (let i = 0; i <= bestGameTextChange.length; i++) {
        setTimeout(() => {
            if (i === 0) {
                bestGameText.textContent = ' ';
            } else {
                bestGameText.textContent = bestGameTextChange.slice(0, i);
            }
            if (i === bestGameTextChange.length) {
                setTimeout(changeText, 100);
            }
        }, i * 100);
    }
}

changeText();
