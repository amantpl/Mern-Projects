// const form=document.querySelector(`form`);

// const obj={
//     q1: "Sachin Tendulkar",
//     q2: "West Indies",
//     q3: "Sachin Tendulkar",
//     q4: "264",
//     q5: "Muttiah Muralitharan"
// };

// form.addEventListener(`submit`,(event)=>{
//     event.preventDefault();

//     const data=new FormData(form);
//     // console.log(Array.from(data.entries()));
//     let result=0;
//     for(let [key,values] of data.entries()){
//         if(values==obj[key]){
//             result++;
//         }
//     }

//     const res=document.getElementById(`res`);
//     res.innerText=`${result} out of 5 are correct`;

    

// })

// const resetButton = document.getElementById('butt');

// resetButton.addEventListener('click', () => {
//     form.reset();
//     const res = document.getElementById('res');
//     res.innerText = '';
// });

const form=document.querySelector(`form`);

const quizQuestions = [
    {
      question: "Who has the most centuries in international cricket?",
      options: ["Sachin Tendulkar", "Virat Kohli", "Ricky Ponting", "Jacques Kallis"],
      answer: "Sachin Tendulkar",
    },
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars",
    },
    {
      question: "Who wrote the play 'Romeo and Juliet'?",
      options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
      answer: "William Shakespeare",
    },
    {
      question: "What is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      answer: "2",
    },
    {
      question: "Which element has the chemical symbol O?",
      options: ["Oxygen", "Osmium", "Gold", "Oxide"],
      answer: "Oxygen",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "South Korea", "Thailand"],
      answer: "Japan",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
      answer: "Leonardo da Vinci",
    },
    {
      question: "What is the capital of India?",
      options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
      answer: "New Delhi",
    },
    {
      question: "Which is the largest ocean on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
      answer: "Pacific Ocean",
    },
    {
      question: "Who is known as the father of computers?",
      options: ["Charles Babbage", "Alan Turing", "Thomas Edison", "Isaac Newton"],
      answer: "Charles Babbage",
    },
    {
      question: "Which is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
      answer: "Nile",
    },
    {
      question: "What is the square root of 144?",
      options: ["12", "14", "16", "18"],
      answer: "12",
    },
    {
      question: "Which year did World War II end?",
      options: ["1945", "1940", "1939", "1947"],
      answer: "1945",
    },
    {
      question: "Who invented the telephone?",
      options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Marie Curie"],
      answer: "Alexander Graham Bell",
    },
    {
      question: "What is the boiling point of water in Celsius?",
      options: ["100°C", "90°C", "80°C", "110°C"],
      answer: "100°C",
    },
    {
      question: "Which is the smallest continent by land area?",
      options: ["Europe", "Australia", "Antarctica", "South America"],
      answer: "Australia",
    },
    {
      question: "Who discovered penicillin?",
      options: ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Isaac Newton"],
      answer: "Alexander Fleming",
    },
    {
      question: "Which planet is closest to the Sun?",
      options: ["Mercury", "Venus", "Earth", "Mars"],
      answer: "Mercury",
    },
    {
      question: "What is the freezing point of water in Fahrenheit?",
      options: ["32°F", "0°F", "100°F", "50°F"],
      answer: "32°F",
    },
    {
      question: "Who is known as the Iron Man of India?",
      options: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhas Chandra Bose"],
      answer: "Sardar Vallabhbhai Patel",
    },
    {
      question: "Which organ in the human body filters blood?",
      options: ["Heart", "Liver", "Kidneys", "Lungs"],
      answer: "Kidneys",
    },
    {
      question: "Who is the author of 'The Theory of Relativity'?",
      options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Stephen Hawking"],
      answer: "Albert Einstein",
    },
    {
      question: "Which is the largest planet in our Solar System?",
      options: ["Earth", "Saturn", "Jupiter", "Uranus"],
      answer: "Jupiter",
    },
    {
      question: "Which is the hardest natural substance on Earth?",
      options: ["Diamond", "Gold", "Iron", "Graphite"],
      answer: "Diamond",
    },
    {
      question: "Who invented the light bulb?",
      options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Henry Ford"],
      answer: "Thomas Edison",
    },
    {
      question: "What is the speed of light in a vacuum?",
      options: ["300,000 km/s", "150,000 km/s", "100,000 km/s", "200,000 km/s"],
      answer: "300,000 km/s",
    },
    {
      question: "What is the chemical formula for water?",
      options: ["H2O", "CO2", "O2", "NaCl"],
      answer: "H2O",
    },
    {
      question: "Who was the first President of the United States?",
      options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "John Adams"],
      answer: "George Washington",
    },
    {
      question: "Which is the most spoken language in the world?",
      options: ["Mandarin", "English", "Spanish", "Hindi"],
      answer: "Mandarin",
    },
    {
      question: "What is the national sport of Canada?",
      options: ["Ice Hockey", "Lacrosse", "Basketball", "Soccer"],
      answer: "Ice Hockey",
    },
    {
      question: "Which gas do plants absorb during photosynthesis?",
      options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
      answer: "Carbon Dioxide",
    },
    {
      question: "Who was the first man to step on the Moon?",
      options: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Michael Collins"],
      answer: "Neil Armstrong",
    },
    {
      question: "Which is the tallest mountain in the world?",
      options: ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
      answer: "Mount Everest",
    },
    {
      question: "Who is known as the father of geometry?",
      options: ["Euclid", "Pythagoras", "Archimedes", "Aristotle"],
      answer: "Euclid",
    },
    {
      question: "What is the SI unit of force?",
      options: ["Newton", "Joule", "Pascal", "Watt"],
      answer: "Newton",
    },
    {
      question: "Which country hosted the 2020 Summer Olympics?",
      options: ["Japan", "Brazil", "China", "UK"],
      answer: "Japan",
    },
    {
      question: "What is the national animal of India?",
      options: ["Peacock", "Tiger", "Elephant", "Lion"],
      answer: "Tiger",
    },
    {
      question: "Who invented the World Wide Web?",
      options: ["Tim Berners-Lee", "Steve Jobs", "Bill Gates", "Mark Zuckerberg"],
      answer: "Tim Berners-Lee",
    },
    {
      question: "What is the atomic number of hydrogen?",
      options: ["1", "2", "3", "4"],
      answer: "1",
    },
    {
      question: "What is the largest desert in the world?",
      options: ["Sahara", "Gobi", "Kalahari", "Arctic"],
      answer: "Sahara",
    },
    {
      question: "Which planet has the most moons?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      answer: "Saturn",
    },
    {
      question: "Who developed the theory of evolution by natural selection?",
      options: ["Charles Darwin", "Gregor Mendel", "Alfred Wallace", "Louis Pasteur"],
      answer: "Charles Darwin",
    },
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      answer: "Canberra",
    },
    {
      question: "Which is the coldest place on Earth?",
      options: ["Antarctica", "Arctic", "Greenland", "Siberia"],
      answer: "Antarctica",
    },
    {
      question: "Which is the closest star to Earth?",
      options: ["Sirius", "Alpha Centauri", "Proxima Centauri", "Sun"],
      answer: "Sun",
    },
    {
      question: "Who is known as the father of modern physics?",
      options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Niels Bohr"],
      answer: "Albert Einstein",
    },
    {
      question: "What is the national flower of Japan?",
      options: ["Cherry Blossom", "Rose", "Lotus", "Lily"],
      answer: "Cherry Blossom",
    },
];

  
function randomquestions(){
    const set=new Set();
    while(set.size<5){
        const index=Math.floor(Math.random()*quizQuestions.length);
        set.add(index);
    }
    return Array.from(set);
    
}

const randomindex=randomquestions();
// console.log(randomindex[0]);

randomindex.forEach((index,questionNumber)=>{
    const div=document.createElement(`div`);
    div.className=`question`;

    const para=document.createElement(`p`);
    para.innerText=`${questionNumber+1}. ${quizQuestions[index].question}`;
    div.appendChild(para);
    

    // create options
    const options=quizQuestions[index].options;
    options.forEach((option)=>{
      const label=document.createElement(`label`);
      const input=document.createElement(`input`);
      input.type=`radio`;
      input.value=option;
      // console.log(option);
      input.name=`${questionNumber}`;

      const br=document.createElement(`br`);

      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      label.appendChild(br);

      div.appendChild(label);


    });

    form.appendChild(div);
    
});


const button=document.createElement(`button`);
button.innerText=`Submit`;
button.type=`submit`;
button.className=`submit-btn`;

form.addEventListener(`submit`,(event)=>{
    event.preventDefault();

    const data=new FormData(form);
    const arr=Array.from(data);

    let score=0;
    // arr.forEach((val)=>{
    //   if(val[1]==quizQuestions[randomindex[val[0]]].answer){
    //     score++;
    //   }
    // });

    for(let [key,value] of data.entries()){
      console.log(key,value);
      if(value==quizQuestions[randomindex[key]].answer){
        score++;
      }
    }

    const result=document.getElementById(`result`);
    result.innerText=`Your Score: `+score;
    result.style.color=`black`;

});




form.appendChild(button);

const resetbtn=document.createElement(`button`);
resetbtn.type=`reset`;
resetbtn.innerText=`Reset`;
resetbtn.className=`submit-btn`;
resetbtn.id=`butt`;

form.appendChild(resetbtn);

resetbtn.addEventListener(`click`,()=>{
  form.reset();
  const result=document.getElementById(`result`);
  result.innerHTML=``;
})

// calculate the score