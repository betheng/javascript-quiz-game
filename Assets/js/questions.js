// list of all questions, choices, and answers
var questions = [
    { 
        question: "Commonly used data types DO NOT include:", 
        answers: [
            { text: "booleans", correct: false },
            { text: "alerts" , correct: true },
            { text: "numbers", correct: false },
            { text: "strings", correct: false }
        ]
    },
    { 
        question: "The condition in an if / else statement is enclosed within ____.", 
        answers: [
            { text: "parentheses", correct: false },
            { text: "quotes", correct: false },
            { text: "curly brackets", correct: true },
            { text: "square brackets", correct: false }
        ]
    },
    { 
        question: "Which built-in method removes the last element from an array and returns that element?", 
        answers: [
            { text: "pop()", correct: true },
            { text: "last()", correct: false },
            { text: "get()", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    { 
        question: "What is the correct syntax for a JavaScript array?", 
        answers: [
            { text: "var car = (0:'sedan', 1:'SUV', 2:'compact')", correct: false },
            { text: "var car = ['sedan', 'SUV', 'compact']", correct: true },
            { text: "var car = (sedan, SUV, compact)", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    { 
        question: "Which built-in method returns the calling string value converted to lower case?",
        answers: [
            { text: "toLowerCase()", correct: true },
            { text: "changeCase(case)", correct: false },
            { text: "toLower()", correct: false },
            { text: "None of the above", correct: false }
        ]
    },
    { 
      question: "Which of the following function of Number object returns the number's value?",
      answers: [
          { text: "valueOf()", correct: true },
          { text: "toString()", correct: false },
          { text: "toLocaleString()", correct: false },
          { text: "toPrecision()", correct: false }
      ]
  },
  { 
    question: "Which of the following function of Array object joins all elements of an array into a string?",
    answers: [
        { text: "concat()", correct: false },
        { text: "join()", correct: true },
        { text: "pop()", correct: false },
        { text: "map()", correct: false }
    ]
},
];