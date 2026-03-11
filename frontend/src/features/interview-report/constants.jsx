export const NAV_ITEMS = [
  {
    id: "technical",
    label: "Technical Questions",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "behavioral",
    label: "Behavioral Questions",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    id: "roadmap",
    label: "Road Map",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="3 11 22 2 13 21 11 13 3 11" />
      </svg>
    ),
  },
];

//Dummy data for technical questions
export const TECHNICAL_QUESTIONS = [
  {
    question:
      "Explain how you would implement caching with Redis to optimize a high-traffic Node.js API. What data eviction policies would you consider?",
    intention:
      "Assess the candidate's understanding of Redis beyond basics and their ability to handle real-world performance scenarios.",
    answer:
      "Discuss strategies like Cache-Aside, Write-Through, or Write-Back. Explain how to use Redis for session management or result caching. Mention eviction policies like LRU (Least Recently Used) vs LFU (Least Frequently Used) based on the use case.",
  },
  {
    question:
      "How do you handle asynchronous operations in Node.js, and what are the potential pitfalls of using too many nested callbacks or unhandled promise rejections?",
    intention:
      "Evaluate depth of knowledge in Node.js event loop and asynchronous programming paradigms.",
    answer:
      "Discuss Promises, Async/Await, and error handling patterns. Mention the importance of preventing memory leaks and avoiding event loop blocking by offloading heavy computations.",
  },
  {
    question:
      "Describe your approach to designing a database schema in MongoDB for a scalable application. How do you decide between embedding and referencing?",
    intention:
      "Test the candidate's proficiency in NoSQL database design patterns and performance considerations.",
    answer:
      "Focus on the access patterns. Explain that embedding is better for performance (fewer reads) when data is accessed together, while referencing is better for large datasets or avoiding document size limits.",
  },
];

//Dummy data for behavioral questions
export const BEHAVIORAL_QUESTIONS = [
  {
    question:
      "Tell me about a time you had to optimize a piece of code that was causing performance bottlenecks. What was your approach and result?",
    intention:
      "Evaluate the candidate's problem-solving skills and their ability to quantify performance improvements.",
    answer:
      "Use the STAR method (Situation, Task, Action, Result). Highlight the metrics you used to measure the bottleneck, the optimization strategy chosen, and the quantifiable improvement.",
  },
  {
    question:
      "Describe a situation where you had a disagreement with a team member regarding a technical decision. How did you resolve it?",
    intention:
      "Assess communication skills, teamwork, and the ability to handle technical conflicts professionally.",
    answer:
      "Focus on objective evaluation. Explain how you presented data, listened to the other perspective, and reached a consensus that was in the best interest of the project.",
  },
];

//Dummy data for the preparation plan
export const PREPARATION_PLAN = [
  {
    day: 1,
    focus: "Caching & Redis",
    tasks: [
      "Deep dive into Redis data types and eviction policies",
      "Implement a cache-aside pattern in a local Node.js project",
    ],
  },
  {
    day: 2,
    focus: "Docker & CI/CD",
    tasks: [
      "Containerize your Node.js application using Docker",
      "Research basic GitHub Actions workflows for automated testing",
    ],
  },
  {
    day: 3,
    focus: "Distributed Systems & Message Queues",
    tasks: [
      "Learn basic concepts of RabbitMQ or Kafka",
      "Understand why and when to use message queues in microservices",
    ],
  },
  {
    day: 4,
    focus: "System Design",
    tasks: [
      "Review system design basics (Load balancing, Horizontal vs Vertical scaling)",
      "Practice designing a scalable chat or notification service",
    ],
  },
  {
    day: 5,
    focus: "Mock Interview & Review",
    tasks: [
      "Conduct a mock interview focusing on behavioral STAR stories",
      "Review key Node.js performance optimization techniques",
    ],
  },
];

//Dummy data for skill gaps
export const SKILL_GAPS = [
  {
    skill: "Redis (Production use)",
    severity: "medium",
  },
  {
    skill: "Docker & CI/CD",
    severity: "medium",
  },
  {
    skill: "Distributed Systems / Message Queues",
    severity: "high",
  },
];
