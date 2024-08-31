document.getElementById("info-tab").addEventListener("click", function() {
    const chatbox = document.getElementById("chatbox");
    chatbox.classList.toggle("open");  // Toggle the "open" class to slide the chatbox in/out
});

document.getElementById("send-btn").addEventListener("click", function() {
    handleUserInput();
});

document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        handleUserInput();
    }
});

function handleUserInput() {
    const inputField = document.getElementById("user-input");
    const userInput = inputField.value.trim();
    if (userInput === "") return;

    displayMessage(userInput, "user");

    const response = getBotResponse(userInput);
    displayMessage(response, "bot");

    inputField.value = "";  // Clear the input field
}

function displayMessage(message, sender) {
    const chatBody = document.getElementById("chat-body");
    const messageElement = document.createElement("div");
    messageElement.classList.add(`${sender}-message`);
    messageElement.innerHTML = `<p>${message}</p>`;
    chatBody.appendChild(messageElement);
    chatBody.scrollTop = chatBody.scrollHeight;  // Scroll to bottom
}

function getBotResponse(input) {
    const responses = {
        "1": "To add a formula, select a cell, type '=' followed by the formula, and press Enter.",
        "2": "To apply conditional formatting, go to the Home tab, click on Conditional Formatting, and set your rules.",
        "3": "To create a chart, select your data and click on the Insert tab, then choose a chart type.",
        "4": "To filter data, click on any column header and choose the Filter option from the Data tab.",
        "5": "To sort data, select the column you want to sort and use the Sort buttons on the Data tab.",
        "6": "To use pivot tables, go to the Insert tab and select PivotTable, then choose your data range.",
        "7": "To freeze panes, go to the View tab and click Freeze Panes.",
        "8": "To merge cells, select the cells you want to merge, then click Merge & Center from the Home tab.",
        "9": "To protect a sheet, go to the Review tab and click Protect Sheet.",
        "10": "To split text into columns, select the text, go to the Data tab, and click Text to Columns.",
        "hello": "Hello! How can I assist you today?",
        "hi": "Hi there! How may I help you with Excel today?",
        "thanks": "You're welcome! If you have more questions, feel free to ask.",
        "thank you": "You're welcome! Happy to help!",
    };

    const lowerCaseInput = input.toLowerCase();

    // If the input is a greeting, number (1-10), or thanks, respond accordingly
    if (responses[lowerCaseInput]) {
        return responses[lowerCaseInput];
    } else if (!isNaN(lowerCaseInput) && responses[lowerCaseInput]) {
        return responses[lowerCaseInput];
    } else {
        return "I'm sorry, I don't understand. Please choose a number from 1 to 10, or ask a greeting.";
    }
}
