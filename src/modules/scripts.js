function addUserChat(message) {
    // Create a new right-part div
    var rightPart = document.createElement('div');
    rightPart.className = 'right-part';

    // Create a new user-chart div
    var userChart = document.createElement('div');
    userChart.className = 'user-chart';

    // Create and append the message paragraph
    var userMessage = document.createElement('p');
    userMessage.textContent = message;
    userChart.appendChild(userMessage);

    // Create and append the user image
    var userImg = document.createElement('img');
    userImg.src = '/src/styles/pics/user.png';
    userImg.alt = 'User Image';
    userChart.appendChild(userImg);

    // Append user-chart to right-part
    rightPart.appendChild(userChart);

    // Append right-part to chat-section
    document.getElementById('chat-section').appendChild(rightPart);
}

function addBotChat(message) {
    // Create a new left-part div
    var leftPart = document.createElement('div');
    leftPart.className = 'left-part';

    // Create a new agent-chart div
    var agentChart = document.createElement('div');
    agentChart.className = 'agent-chart';

    // Create and append the bot image
    var botImg = document.createElement('img');
    botImg.src = '/src/styles/pics/ai-icon-7.jpg';
    botImg.alt = 'Bot Image';
    agentChart.appendChild(botImg);

    // Create and append the message paragraph
    var botMessage = document.createElement('p');
    botMessage.textContent = message;
    agentChart.appendChild(botMessage);

    // Append agent-chart to left-part
    leftPart.appendChild(agentChart);

    // Append left-part to chat-section
    document.getElementById('chat-section').appendChild(leftPart);
}

document.getElementById('send').addEventListener('click', function() {
    var userInput = document.getElementById('userInput').value;

    if (userInput.trim() !== '') {
        addUserChat(userInput);
        document.getElementById('userInput').value = ''; // Clear input field

        // Simulate bot response
        setTimeout(function() {
            addBotChat('This is a simulated response from the bot.');
        }, 1000);
    }
});
