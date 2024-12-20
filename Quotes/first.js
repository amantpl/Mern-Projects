const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emerson",
    "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well. - Ralph Waldo Emerson",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The best time to plant a tree was 20 years ago. The second best time is now. - Chinese Proverb",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "You miss 100% of the shots you don’t take. - Wayne Gretzky",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "It always seems impossible until it’s done. - Nelson Mandela",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. - Ralph Waldo Emerson",
    "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "You can't go back and change the beginning, but you can start where you are and change the ending. - C.S. Lewis",
    "Life isn't about waiting for the storm to pass, it's about learning how to dance in the rain. - Vivian Greene"
];





function quotee(){
    const index=Math.floor(Math.random()*quotes.length);
    const element=document.getElementById(`quote`);
    element.innerHTML=quotes[index];
}

setInterval(quotee,5000);



const colors = [
    "#FFFFFF",  // White
    "#F4F4F9",  // Cultured (soft off-white)
    "#DFF6F0",  // Honeydew (soft greenish hue)
    "#E1F7D5",  // Honeydew (light, fresh green)
    "#F3E5AB",  // Light Beige (warm light yellow)
    "#B4E7F8",  // Light Sky Blue
    "#F7B7A3",  // Soft Coral
    "#A8D0DB",  // Light Aqua
    "#F9C8D3",  // Light Rose
    "#B2E1F3",  // Light Periwinkle
    "#E6E6FA",  // Lavender
    "#F2D7A1",  // Light Golden
    "#FFB3BA",  // Light Pink
    "#A3C1AD",  // Soft Sage Green
    "#F0C5C0",  // Peachy Pink
    "#D4E157",  // Lime Green
    "#C1F0A1",  // Light Mint Green
    "#FF9A8B",  // Light Salmon
    "#D4A5A5",  // Dusty Pink
    "#D3E6F2",  // Light Sky Blue
    "#F1F8E9",  // Light Sage Green
    "#B2DFDB",  // Light Teal
    "#FFEB3B",  // Yellow (Bright Yellow)
    "#FFCDD2",  // Light Red Pink
    "#F1C6D9",  // Soft Pink
    "#B5EAEA",  // Pale Aqua
    "#FFCCBC",  // Soft Peach
    "#E1F5FE",  // Light Sky Blue
    "#FFD54F",  // Amber
    "#D1C4E9",  // Light Lavender
    "#FF4081",  // Pinkish Red
    "#9FA8DA",  // Lavender Blue
    "#FFC107",  // Amber Yellow
    "#C8E6C9",  // Pale Green
    "#FF80AB",  // Light Pink
    "#B2FF59",  // Yellow-Green
    "#64B5F6",  // Sky Blue
    "#FFEB3B",  // Bright Yellow
    "#FFD700",  // Gold
    "#4CAF50",  // Green
    "#FF9800",  // Deep Orange
    "#9C27B0",  // Purple
    "#D32F2F",  // Red
    "#2196F3",  // Blue
    "#9E9D24",  // Olive Green
    "#F44336",  // Red
    "#673AB7",  // Deep Purple
    "#03A9F4",  // Light Blue
    "#FF5722",  // Deep Orange
    "#FF6347",  // Tomato
    "#795548",  // Brown
    "#B3E5FC",  // Light Blue
    "#80DEEA",  // Light Cyan
    "#6A1B9A",  // Purple
    "#C2185B",  // Pink
    "#0288D1",  // Bright Blue
    "#D81B60",  // Dark Pink
    "#00897B",  // Teal
    "#0097A7",  // Light Cyan
    "#7B1FA2",  // Dark Purple
    "#009688",  // Teal Green
    "#F44336",  // Red
    "#3F51B5"   // Indigo
];



function col(){
    const index1=Math.floor(Math.random()*colors.length);
    const body=document.querySelector(`body`);
    body.style.backgroundColor=colors[index1];
}

setInterval(col,5000);

const inspirationalPics = [
    "https://www.w3schools.com/w3images/mountains.jpg", // Mountain range at sunset
    "https://www.w3schools.com/w3images/forest.jpg",   // Dense forest
    "https://www.w3schools.com/w3images/ocean.jpg",    // Ocean horizon
    "https://www.w3schools.com/w3images/rocks.jpg",    // Rocky coastline
    "https://www.w3schools.com/w3images/snow.jpg",     // Snowy mountain peak
    "https://www.w3schools.com/w3images/lights.jpg",   // Colorful lights in the night
    "https://www.w3schools.com/w3images/mountains2.jpg", // Serene mountain landscape
    "https://www.w3schools.com/w3images/bridge.jpg",   // Bridge across river
    "https://www.w3schools.com/w3images/flowers.jpg",  // Field of flowers
];


function pics(){
    const index2=Math.floor(Math.random()*inspirationalPics.length);
    const img=document.getElementById(`imge`);
    img.style.backgroundImage=`url(${inspirationalPics[index2]})`;
}

setInterval(pics,5000);