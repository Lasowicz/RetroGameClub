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
]

imagesGameIcons.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    gallery.appendChild(img);
})