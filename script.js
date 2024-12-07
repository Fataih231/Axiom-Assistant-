// Sayfa geçiş fonksiyonu
function showPage(pageId) {
    let pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

// Saat ve Tarih gösterimi
function updateDateTime() {
    let date = new Date();
    document.getElementById('dateTime').textContent = `Bugün: ${date.toLocaleDateString()} - Saat: ${date.toLocaleTimeString()}`;
}

// Film önerisi
function showMovieSuggestion() {
    const movieSuggestions = [
        "The Matrix",
        "Inception",
        "Interstellar",
        "The Dark Knight",
        "Shawshank Redemption"
    ];
    const randomMovie = movieSuggestions[Math.floor(Math.random() * movieSuggestions.length)];
    document.getElementById('suggestionResult').textContent = `Film Önerisi: ${randomMovie}`;
}

// Müzik önerisi
function showMusicSuggestion() {
    const musicSuggestions = [
        "Bohemian Rhapsody - Queen",
        "Shape of You - Ed Sheeran",
        "Blinding Lights - The Weeknd",
        "Happier - Marshmello feat. Bastille",
        "Levitating - Dua Lipa"
    ];
    const randomMusic = musicSuggestions[Math.floor(Math.random() * musicSuggestions.length)];
    document.getElementById('suggestionResult').textContent = `Müzik Önerisi: ${randomMusic}`;
}

// Sayı tahmin oyunu
let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function guessNumber() {
    const userGuess = parseInt(document.getElementById('userInput').value);
    attempts++;
    if (userGuess === secretNumber) {
        alert(`Tebrikler! ${attempts} denemede doğru sayıyı bildiniz.`);
    } else if (userGuess < secretNumber) {
        alert('Tahmininiz çok düşük. Tekrar deneyin!');
    } else {
        alert('Tahmininiz çok yüksek. Tekrar deneyin!');
    }
    document.getElementById('userInput').value = ''; // Input kutusunu temizle
}
