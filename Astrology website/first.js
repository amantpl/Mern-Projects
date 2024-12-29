const signs = [
    "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", 
    "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
];

// 31 size

const compliments = [
    "You are amazing!", "You are a true star!", "You are incredibly talented!", 
    "You have a great sense of humor!", "You are so kind!", "You are very thoughtful!", 
    "You are a great friend!", "You are very creative!", "You are so smart!", 
    "You are very hardworking!", "You have a beautiful smile!", "You are very generous!", 
    "You are very brave!", "You are very patient!", "You are very reliable!", 
    "You are very honest!", "You are very supportive!", "You are very understanding!", 
    "You are very inspiring!", "You are very positive!", "You are very determined!", 
    "You are very passionate!", "You are very energetic!", "You are very friendly!", 
    "You are very funny!", "You are very polite!", "You are very respectful!", 
    "You are very ambitious!", "You are very compassionate!", "You are very loyal!", 
    "You are very optimistic!"
];

const victimCards = [
    "You always do good to others but don't get anything in return.",
    "You help everyone but no one helps you.",
    "You are always there for others but they are never there for you.",
    "You give your best but people don't appreciate it.",
    "You are always kind but people take advantage of you.",
    "You are always supportive but no one supports you.",
    "You always listen to others but no one listens to you.",
    "You always care for others but no one cares for you.",
    "You always make time for others but no one makes time for you.",
    "You always go out of your way for others but they don't do the same for you.",
    "You always put others first but they put you last.",
    "You always forgive others but they don't forgive you.",
    "You always trust others but they don't trust you.",
    "You always believe in others but they don't believe in you.",
    "You always defend others but they don't defend you.",
    "You always encourage others but they don't encourage you.",
    "You always respect others but they don't respect you.",
    "You always understand others but they don't understand you.",
    "You always stand up for others but they don't stand up for you.",
    "You always give to others but they don't give to you."
];

const recommendations = [
    "Feed homeless people.", "Plant a tree.", "Volunteer at a local shelter.", 
    "Donate clothes to charity.", "Help a neighbor in need.", "Pick up litter in your community.", 
    "Support local businesses.", "Mentor a young person.", "Donate blood.", 
    "Adopt a pet from a shelter.", "Cook a meal for someone in need.", "Write a thank you note.", 
    "Visit a nursing home.", "Offer to babysit for free.", "Teach someone a new skill.", 
    "Participate in a charity run.", "Donate to a food bank.", "Help someone with their groceries.", 
    "Offer your seat to someone on public transport.", "Smile at strangers.", 
    "Pay for someone's coffee.", "Leave a generous tip.", "Compliment someone.", 
    "Help someone with their homework.", "Donate books to a library.", 
    "Volunteer at a hospital.", "Help clean up a park.", "Offer to do chores for someone.", 
    "Be a good listener.", "Share your knowledge with others."
];

const predictions = [
    "You will become a millionaire at the age of 27.",
    "You will travel to 10 different countries in the next 5 years.",
    "You will find your true love within the next year.",
    "You will achieve your dream job in the next 2 years.",
    "You will buy your dream house in the next 3 years.",
    "You will start your own successful business soon.",
    "You will make a significant impact in your community.",
    "You will discover a hidden talent that will change your life.",
    "You will reconnect with an old friend who will help you in your career.",
    "You will receive an unexpected inheritance.",
    "You will be recognized for your hard work and dedication.",
    "You will achieve a major personal goal this year.",
    "You will have a positive influence on many people's lives.",
    "You will overcome a major challenge and come out stronger.",
    "You will find a new hobby that brings you great joy.",
    "You will make a new friend who will become very important to you.",
    "You will receive a promotion at work.",
    "You will have a life-changing experience while traveling.",
    "You will be blessed with good health and happiness.",
    "You will achieve financial stability and security."
];

// const form=document.getElementById(`astroForm`);

// form.addEventListener(`submit`, (event) => {
//     event.preventDefault();

//     const name = document.getElementById(`name`).value;
//     const surname = document.getElementById(`surname`).value;
//     const date = Number(document.getElementById(`date`).value);
//     const month = Number(document.getElementById(`month`).value);
//     const year = Number(document.getElementById(`year`).value);

//     const result = document.getElementById(`result`);

//     const firstmsg = `Hello ${name} ${surname}`;
//     const secondmsg = `Your Zodiac sign is ${signs[(month - 1) % 12]}`;
//     const thirdmsg = compliments[date - 1];

//     let index = Math.floor(Math.random() * victimCards.length);
//     const fourthmsg = victimCards[index];

//     index = name.length * surname.length * year % recommendations.length;
//     const fifthmsg = recommendations[index];

//     index = date * month * year % predictions.length;
//     const sixthmsg = predictions[index];

//     result.innerHTML = `
//         <p>${firstmsg}</p>
//         <p>${secondmsg}</p>
//         <p>${thirdmsg}</p>
//         <p>${fourthmsg}</p>
//         <p>${fifthmsg}</p>
//         <p>${sixthmsg}</p>
//     `;
// });

const form=document.getElementById(`astroForm`);

form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const name = document.getElementById(`name`).value;
    const surname = document.getElementById(`surname`).value;
    const date = Number(document.getElementById(`date`).value);
    const month = Number(document.getElementById(`month`).value);
    const year = Number(document.getElementById(`year`).value);
    const result = document.getElementById(`result`);

    const firstmsg = `Hello ${name} ${surname}.`;
    const secondmsg = `Your Zodiac Sign is ${signs[month - 1]}.`;
    const thirdmsg = compliments[date - 1];

    let index = Math.floor(Math.random() * victimCards.length);
    const fourthmsg = victimCards[index];

    index=name.length*surname.length*year%recommendations.length;
    const fifthmsg=recommendations[index];

    index=date*month*year%predictions.length;
    const sixthmsg=recommendations[index];

    result.innerHTML = `${firstmsg} ${secondmsg} ${thirdmsg} ${fourthmsg} ${fifthmsg} ${sixthmsg}`;
});
