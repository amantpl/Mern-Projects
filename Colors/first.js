document.addEventListener('click', (event) => {
    const circle = document.createElement('div');
    circle.className = 'circle';

    const x = event.clientX;
    const y = event.clientY;

    const greetings = [
        "Hi", "Hola", "Hello", "Hey", "Yo",
        "Hiya", "Bonjour", "Namaste", "Ciao", "Hallo"
    ];

    const gradients = [
        "linear-gradient(135deg, #FF5733, #FFC300)",
        "linear-gradient(135deg, #33FF57, #00FF00)",
        "linear-gradient(135deg, #3357FF, #1E90FF)",
        "linear-gradient(135deg, #FF33A1, #FF69B4)",
        "linear-gradient(135deg, #33FFF5, #40E0D0)",
        "linear-gradient(135deg, #FFD700, #FFA500)",
        "linear-gradient(135deg, #800080, #8A2BE2)",
        "linear-gradient(135deg, #FF8C00, #FF6347)",
        "linear-gradient(135deg, #00CED1, #4682B4)",
        "linear-gradient(135deg, #B22222, #DC143C)"
    ];

    const indexText = Math.floor(Math.random() * greetings.length);
    circle.innerHTML = greetings[indexText];

    const indexGradient = Math.floor(Math.random() * gradients.length);
    circle.style.background = gradients[indexGradient];

    circle.style.left = `${x - 25}px`;
    circle.style.top = `${y - 25}px`;

    document.body.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 5000);
});
