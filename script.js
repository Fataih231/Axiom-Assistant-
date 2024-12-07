let targetNumber = null;
let userName = localStorage.getItem("userName");

function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const chatBox = document.getElementById('chatBox');

    if (userInput.trim() !== "") {
        // Kullanıcı mesajını ekle
        chatBox.innerHTML += `<p><strong>Sen:</strong> ${userInput}</p>`;
        document.getElementById('userInput').value = "";  // Input alanını temizle

        // Asistan yanıtı
        setTimeout(() => {
            chatBox.innerHTML += `<p><strong>Axiom Asistanı:</strong> ${getResponse(userInput)}</p>`;
            chatBox.scrollTop = chatBox.scrollHeight;  // Son mesaja kaydır
        }, 1000);
    }
}

function getResponse(userInput) {
    const lowerInput = userInput.toLowerCase();

    // Tarih ve Saat
    if (lowerInput.includes("tarih") || lowerInput.includes("bugün")) {
        const today = new Date();
        return `Bugünün tarihi: ${today.toLocaleDateString()}.`;
    }

    if (lowerInput.includes("saat") || lowerInput.includes("zaman")) {
        const time = new Date();
        return `Şu an saat: ${time.toLocaleTimeString()}.`;
    }

    // Müzik Önerisi
    if (lowerInput.includes("müzik önerisi")) {
        const musicSuggestions = ["Kendine İyi Bak - Yüksek Sadakat", "Fikrimin İnce Gülü - Sezen Aksu", "Rakkas - Tarkan"];
        return `Müzik önerim: "${musicSuggestions[Math.floor(Math.random() * musicSuggestions.length)]}"`;
    }

    // Film Önerisi
    if (lowerInput.includes("film önerisi")) {
        const movieSuggestions = ["Inception", "The Dark Knight", "Interstellar", "Parasite"];
        return `Film önerim: "${movieSuggestions[Math.floor(Math.random() * movieSuggestions.length)]}"`;
    }

    // Sayı Tahmin Oyunu
    if (lowerInput.includes("oyun")) {
        return "Sayı tahmin oyununa başlamak için 1-100 arasında bir sayı düşün ve yaz. Ben tahmin etmeye başlayacağım!";
    }

    // Matematik İşlemleri
    if (lowerInput.includes("işlem")) {
        try {
            const result = eval(userInput.replace("işlem", "").trim());
            return `Sonuç: ${result}`;
        } catch (e) {
            return "Geçersiz işlem. Lütfen geçerli bir matematiksel ifade girin.";
        }
    }

    // Ruh Halini Sor
    if (lowerInput.includes("ruhum") || lowerInput.includes("nasılsın")) {
        const moods = ["mutluyum", "üzgünüm", "görüşmemiz gerekiyor", "bunu halletmeliyim"];
        const mood = moods[Math.floor(Math.random() * moods.length)];
        return `Ruh halim: ${mood}. Sen nasılsın?`;
    }

    // Kullanıcı Adı Hatırlama
    if (lowerInput.includes("adın ne") || lowerInput.includes("kimse")) {
        return userName ? `Merhaba ${userName}! Hoş geldin.` : "Adınızı bilmiyorum, lütfen adınızı söyleyin!";
    }

    if (lowerInput.includes("adım") && lowerInput.split(" ")[1]) {
        userName = lowerInput.split(" ")[1];
        localStorage.setItem("userName", userName);
        return `Merhaba ${userName}, seni tanıdığıma sevindim!`;
    }

    // Şaka yap
    if (lowerInput.includes("şaka")) {
        const jokes = [
            "Neden bilgisayarlar çok soğuk? Çünkü fanları var! 😄",
            "Bira içen bilgisayarlar ne kadar akıllıdır? Hızlıca bozulurlar! 🍻",
            "Bir köpek neden bilgisayar kullanamaz? Çünkü fareyi anlamaz! 🐶"
        ];
        return jokes[Math.floor(Math.random() * jokes.length)];
    }

    // Film Türlerine Göre Öneri
    if (lowerInput.includes("film önerisi") && lowerInput.includes("komedi")) {
        return "Komedi filmi önerim: 'The Hangover'!";
    }

    if (lowerInput.includes("film önerisi") && lowerInput.includes("aksiyon")) {
        return "Aksiyon filmi önerim: 'Mad Max: Fury Road'!";
    }

    // Müzik Türlerine Göre Öneri
    if (lowerInput.includes("müzik önerisi") && lowerInput.includes("rock")) {
        return "Rock müzik önerim: 'Queen - Bohemian Rhapsody'!";
    }

    if (lowerInput.includes("müzik önerisi") && lowerInput.includes("pop")) {
        return "Pop müzik önerim: 'Ariana Grande - Thank U, Next'!";
    }

    // Sayı Tahmin Oyunu
    if (lowerInput.includes("oyun") && targetNumber === null) {
        targetNumber = Math.floor(Math.random() * 100) + 1;
        return "Sayı tahmin oyununa başlıyoruz! 1-100 arasında bir sayı düşündüm. Tahmin et!";
    }

    if (targetNumber !== null && !isNaN(userInput)) {
        const guess = parseInt(userInput);
        if (guess < targetNumber) {
            return "Tahminin çok düşük. Biraz daha yüksek bir sayı söyle!";
        } else if (guess > targetNumber) {
            return "Tahminin çok yüksek. Biraz daha düşük bir sayı söyle!";
        } else {
            targetNumber = null;  // Oyun bitince sıfırlama
            return "Tebrikler! Sayıyı buldun!";
        }
    }

    // Basit yanıtlar
    if (lowerInput.includes("merhaba")) {
        return "Merhaba! Size nasıl yardımcı olabilirim?";
    } else if (lowerInput.includes("nasılsın")) {
        return "Ben bir yapay zekayım, ama iyiyim! 😊";
    } else if (lowerInput.includes("adın ne")) {
        return "Benim adım Axiom Asistanı!";
    }

    return "Üzgünüm, bu konuda size yardımcı olamıyorum.";
}
