function loadAlbums() {
    fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => displayAlbums(data))
}

loadAlbums();
function displayAlbums(albums) {

    const albumsContainer = document.getElementById('albums')
    for (const album of albums) {
        const p = document.createElement('p');
        p.innerText = album.title;
        p.style.textAlign = 'center'
        p.style.color = 'blue'
        albumsContainer.appendChild(p);

    }

}