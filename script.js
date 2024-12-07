// Basit bir yerel yanıt fonksiyonu
function getBotResponse(input) {
    const simpleResponses = {
        "merhaba": "Merhaba! Size nasıl yardımcı olabilirim?",
        "nasılsın": "Ben bir yazılımım, ama iyi olduğumu söyleyebilirim! Siz nasılsınız?",
        "hoşça kal": "Hoşça kal! Görüşmek üzere!"
    };

    return simpleResponses[input.toLowerCase()] || "Üzgünüm, anlamadım.";
}

// Kullanıcının mesajını chatbox'a ekler
function addMessageToChat(message, sender) {
    const chatBox = document.getElementById("chatBox");
    const messageElement = document.createElement("div");
    messageElement.classList.add(sender === 'user' ? "userMessage" : "botMessage");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;  // En son mesaja kaydırma
}

// Gönder butonuna basıldığında çalışacak fonksiyon
function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    if (userInput === "") return;

    addMessageToChat(userInput, 'user');  // Kullanıcının mesajını ekle

    document.getElementById("userInput").value = "";  // Input kutusunu temizle

    // Basit yerel yanıt al
    const botResponse = getBotResponse(userInput);

    addMessageToChat(botResponse, 'bot');  // Bot'un cevabını ekle
}

// Enter tuşu ile mesaj gönderme
document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
