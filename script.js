async function sendMessage() {
    let userInput = document.getElementById('userInput').value.trim();
    let chatBox = document.getElementById('chatBox');
    
    if (userInput !== '') {
        // Kullanıcının mesajını ekliyoruz
        let userMessage = document.createElement('p');
        userMessage.textContent = "Sen: " + userInput;
        chatBox.appendChild(userMessage);

        // Bot'un verdiği yanıtı alıyoruz
        let botMessage = document.createElement('p');
        botMessage.textContent = "Axiom Asistanı: " + await getAIResponse(userInput);
        chatBox.appendChild(botMessage);

        // Kullanıcı input kutusunu temizliyoruz
        document.getElementById('userInput').value = ''; 

        // Chatbox'ı en alta kaydırıyoruz
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}

// OpenAI API'den yanıt almak için fonksiyon
async function getAIResponse(input) {
    const apiKey = "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"; // Buraya OpenAI API anahtarınızı koyun
    const url = "https://api.openai.com/v1/completions";

    const data = {
        model: "text-davinci-003", // Ya da başka bir model kullanabilirsiniz
        prompt: input,
        max_tokens: 150,
        temperature: 0.7
    };

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    return result.choices[0].text.trim();  // Modelin verdiği yanıtı alıyoruz
}

