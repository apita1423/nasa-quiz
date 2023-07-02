




//event listeners
//questions and answers
const nasaQuestions = [
    {
        id: "1",
        question: "What date was NASA established?",
        answers: {
            A: 'May 14, 1945',
            B: 'July 20, 1969',
            C: 'July 29, 1958',
            D: 'August 04, 1985'
        },
        correctAnswer: 'C: July 29, 1958',
        fact: 'Fact: The National Aeronautics and Space Administration (NASA) was established on July 29, 1958 by President Dwight D. Eisenhower.'
    },
    {
        id: "2",
        question: "What NASA mission was the first to land on the moon?",
        answers: {
            A: 'Apollo 11',
            B: 'Mercury 7',
            C: 'Artemis',
            D: 'Apollo 13'
        },
        correctAnswer: 'A: Apollo 11',
        fact: 'The Apollo 11 NASA mission successfully landed on the moon on July 20, 1969. Astronauts Neil Armstrong and Buzz Aldrin were the first to step on the moon.'
    },
    {
        id: "3",
        question: 'What U.S. President said these words: "We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard..."?',
        answers: {
            A: 'Barack Obama',
            B: 'John F. Kennedy',
            C: 'Richard Nixon',
            D: 'Abraham Lincoln'
        },
        correctAnswer: 'B: John F. Kennedy',
        fact: 'President John F. Kennedy gave this speech on September 12, 1962. Although JFK did not live to see the moon landing, NASA was able successfuly land man on the moon by the end of the decade.',
    },
    {
        id: "4",
        question: "Which famous 1960s show\'s spaceship became the namesake of a shuttle in the Space Shuttle Program?",
        answers: {
            A: 'Doctor Who',
            B: 'I Dream of Jeannie',
            C: 'Star Trek',
            D: 'Bewitched'
        },
        correctAnswer: 'C: Star Trek',
        fact: 'In 1976, fans of Star Trek wrote to NASA and President Gerald R. Ford to name the first shuttle in the Space Shuttle Program, "Enterprise". Both NASA Administrator and the president agreed.'
    },
    {
        id: "5",
        question: "In what year was the Hubble Space Telescope launched?",
        answers: {
            A: '1955',
            B: '1968',
            C: '1988',
            D: '1990'
        },
        correctAnswer: 'D: 1990',
        fact: 'The Hubble Space Telescope was launched in 1990, and is still in operation. "Hubble has made more than 1.5 million observations over the course of its lifetime (nasa.gov)."' 
    },
    {
        id: "6",
        question: 'What Apollo mission did the famous phrase, "Okay, Houston, we\'ve had a problem here." come from?',
        answers: {
            A: 'Apollo 11',
            B: 'Apollo 13',
            C: 'Apollo 1',
            D: 'Apollo 17'
        },
        correctAnswer: 'B: Apollo 13',
        fact: 'The three astronauts on Apollo 13 would never fly in space again. In the 1995, Apollo 13 film, the phrase was changed to, "Houston, we have a problem."'
    },
    {
        id: "7",
        question: 'In the 1970s, Voyager 1 and 2 was launched with a Golden Record. What is one song that is on the record?',
        answers: {
            A: 'Michael Jackson: Beat It.',
            B: 'Chuck Berry: Johnny B.Goode',
            C: 'Cyndi Lauper: Time After Time',
            D: 'Spice Girls: Wannabe'
        },
        correctAnswer: 'B: Chuck Berry: Johnny B Goode',
        fact: 'The Golden Record on Voyager 1 and 2, is a record that has images, sounds, music, and greetings from around the world. Voyager 1 nd 2 are still in operation.'
    },
    {
        id: "8",
        question: 'Cassini was a spacecraft that studied which planet?',
        answers: {
            A: 'Mars',
            B: 'Neptune',
            C: 'Jupiter',
            D: 'Saturn'
        },
        correctAnswer: 'D: Saturn',
        fact: '"Cassini carried a passenger...the European Huygens probe-the first human-made object to land on a world in the distant outer solar system (nasa.gov)."'
    },
    {
        id: "9",
        question: 'Who was the first American to orbit the Earth?',
        answers: {
            A: 'John H. Glenn',
            B: 'Neil Armstrong',
            C: 'Scott Kelly',
            D: 'Alan Shepherd'
        },
        correctAnswer: 'A: John H. Glenn',
        fact: 'John H. Glenn returned to space in 1998 making him the oldest person to fly in space at that time.'
    },
    {
        id: "10",
        question: 'NASA would use human computers to perform important calculations that was important to NASA flight missions during the 1960s and 70s. Who is a well-known human computer?.',
        answers: {
            A: 'Mae Jemison',
            B: 'Nichelle Nichols',
            C: 'Katherine Johnson',
            D: 'Taraji P. Henson'
        },
        correctAnswer: 'C: Katherine Johnson',
        fact: 'John H. Glenn asked for Katherine Johnson specifically to perform the calculations for his lauch on Friendship, which would allow him to become the first Americna to orbit the Earth.'
    },
];