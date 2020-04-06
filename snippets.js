const snippets = [
  {
    title: "How to hide all elements specified?",
    description: "The one of the useful ways to hide all elements on the page",
    recommendations: [
      {
        key: 0,
        content: "Select all elements with querySelectorAll DOM API",
      },
      {
        key: 1,
        content: "Loop through all selected elements with forEach iterator",
      },
    ],
    content:
      "1.First Select all elements with querySelectorAll DOM API. 2. Then Loop through all selected elements with forEach iterator ",
  },
  {
    title: "How to check if the element has the specified class?",
    description: "Process of Checking if the element has the specified class",
    recommendations: [
      {
        key: 0,
        content: "Use the contains API on the classList",
      },
      {
        key: 1,
        content: "use querySelector to handle this issue",
      },
    ],
    content:
      "1. use querySelector to choose element 2. Then use contains method on the element classList",
  },
  {
    title: "How to toggle a class for an element?",
    description: "Process of Toggling the class of the element",
    recommendations: [
      {
        key: 0,
        content: "1.Select element using querySelector",
      },
      {
        key: 1,
        content: "2.use toggle API on the classList to handle it",
      },
    ],
    content:
      "1.Create a function with the parameters of the class to be toggles and the element on which to perform the operation of class toggling 2.Use toggle method to switch class dynamically",
  },
  {
    title: "How to get the scroll position of the current page?",
    description: "Find the scroll position of the element easily",
    recommendations: [
      {
        key: 0,
        content: "create a function to find the scroll position",
      },
      {
        key: 1,
        content: "use pageXOffset method",
      },
      {
        key: 2,
        content: "use pageYOffset method",
      },
    ],
    content:
      "1.The scroll is “elastic”. We can scroll a little beyond the document start or end in some browsers/devices (empty space below is shown, and then the document will automatically “bounces back” to normal). 2.The scroll is imprecise. When we scroll to page end, then we may be in fact like 0-50px away from the real document bottom.",
  },
];
