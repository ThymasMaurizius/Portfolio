// Optional: Auto-scroll the gallery (adjust speed as needed)
const gallery = document.querySelector('.gallery');
let scrollAmount = 0;

function autoScrollGallery() {
    if (scrollAmount <= gallery.scrollWidth - gallery.clientWidth) {
        gallery.scrollBy({ left: 2, behavior: 'smooth' });
        scrollAmount += 2;
    } else {
        scrollAmount = 0;
        gallery.scrollTo({ left: 0, behavior: 'smooth' });
    }
}

setInterval(autoScrollGallery, 20);
