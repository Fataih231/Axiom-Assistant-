async function sendMessage() {
    let userInput = document.getElementById('userInput').value;
    let chatBox = document.getElementById('chatBox');
    
    if(userInput.trim() !== '') {
        let userMessage = document.createElement('p');
        userMessage.textContent = "Sen: " + userInput;
        chatBox.appendChild(userMessage);
        
        // OpenAI API'ye bağlanma
        let botMessage = document.createElement('p');
        botMessage.textContent = "Axiom Asistanı: " + await getAIResponse(userInput);
        chatBox.appendChild(botMessage);
        
        document.getElementById('userInput').value = ''; // Input kutusunu temizle
        chatBox.scrollTop = chatBox.scrollHeight; // Chatbox'ı en alta kaydır
    }
}

async function getAIResponse(input) {
    const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer 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',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: 'text-davinci-003',  // Ya da kullanmak istediğiniz model
            prompt: input,
            max_tokens: 150
        })
    });

    const data = await response.json();
    return data.choices[0].text.trim();
}
