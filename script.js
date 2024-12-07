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
