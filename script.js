const apiKey = "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"; // Buraya OpenAI API anahtarınızı ekleyin

// Chatbot'a mesaj gönderme fonksiyonu
async function getAIResponse(input) {
    const apiUrl = "https://api.openai.com/v1/completions"; // OpenAI API URL'si

    const data = {
        model: "text-davinci-003",  // Modeli ihtiyaca göre değiştirebilirsiniz
        prompt: input,
        max_tokens: 150,
        temperature: 0.7
    };

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('API istek hatası: ' + response.statusText);
        }

        const result = await response.json();
        return result.choices[0].text.trim();  // Modelin verdiği yanıtı döndürür
    } catch (error) {
        console.error('Hata:', error);
        return 'Bir hata oluştu, lütfen tekrar deneyin.';
    }
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
async function sendMessage() {
    const userInput = document.getElementById("userInput").value.trim();
    if (userInput === "") return;

    addMessageToChat(userInput, 'user');  // Kullanıcının mesajını ekle

    document.getElementById("userInput").value = "";  // Input kutusunu temizle

    // Chatbot'tan yanıt al
    const botResponse = await getAIResponse(userInput);

    addMessageToChat(botResponse, 'bot');  // Bot'un cevabını ekle
}

// Enter tuşu ile mesaj gönderme
document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
