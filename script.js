async function sendMessage() {
    let userInput = document.getElementById('userInput').value;
    let chatBox = document.getElementById('chatBox');
    
    if (userInput.trim() !== '') {
        let userMessage = document.createElement('p');
        userMessage.textContent = "Sen: " + userInput;
        chatBox.appendChild(userMessage);
        
        // OpenAI API'ye bağlanarak yanıt almak
        const response = await getAIResponse(userInput);

        let botMessage = document.createElement('p');
        botMessage.textContent = "Axiom Asistanı: " + response;
        chatBox.appendChild(botMessage);
        
        document.getElementById('userInput').value = ''; // Input kutusunu temizle
        chatBox.scrollTop = chatBox.scrollHeight; // Chatbox'ı en alta kaydır
    }
}

async function getAIResponse(input) {
    const apiKey = "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"; // Buraya OpenAI API anahtarınızı koyun
    const url = "https://api.openai.com/v1/completions";

    const data = {
        model: "text-davinci-003", // Ya da başka bir model
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
    return result.choices[0].text.trim();
}

