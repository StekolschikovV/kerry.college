export interface CourseI {
    title?: string;
    lecture?: string;
    room?: string;
}

export interface CourseDataI {
    title: string;
    schedule: CourseI[][];
}

export interface DataI {
    times: string[];
    course: CourseDataI[];
}

export interface StaffCardI {
    name: string;
    img: string;
    job: string;
}

const dataStaff: StaffCardI[] = [
    {
        name: "Michael Jordan",
        img: "/staff/michael-jordan.jpg",
        job: "Basketball Coach"
    },
    {
        name: "Albert Einstein",
        img: "",
        job: "Physics Professor"
    },
    {
        name: "Oprah Winfrey",
        img: "",
        job: "Communications and Media Instructor"
    },
    {
        name: "Stephen King",
        img: "",
        job: "Creative Writing Professor"
    },
    {
        name: "Marie Curie",
        img: "",
        job: "Chemistry Department Head"
    },
    {
        name: "Serena Williams",
        img: "",
        job: "Tennis Coach"
    },
    {
        name: "Steve Jobs",
        img: "",
        job: "Entrepreneurship and Innovation Lecturer"
    },
    {
        name: "Frida Kahlo",
        img: "",
        job: "Art History Professor"
    },
    {
        name: "Neil deGrasse Tyson",
        img: "",
        job: "Astronomy Professor"
    },
    {
        name: "Jane Goodall",
        img: "",
        job: "Anthropology Professor"
    },
    {
        name: "Mark Zuckerberg",
        img: "",
        job: "Computer Science Lecturer"
    },
    {
        name: "David Attenborough",
        img: "",
        job: "Environmental Science Instructor"
    },
    {
        name: "J.K. Rowling",
        img: "",
        job: "English Literature Professor"
    },
    {
        name: "Elon Musk",
        img: "",
        job: "Engineering and Space Exploration Instructor"
    },
    {
        name: "Beyoncé",
        img: "",
        job: "Music and Performance Arts Teacher"
    },
    {
        name: "Leonardo da Vinci",
        img: "",
        job: "Art and Engineering Professor"
    },
    {
        name: "Amelia Earhart",
        img: "",
        job: "Aviation and History Instructor"
    },
    {
        name: "Bill Gates",
        img: "",
        job: "Technology and Business Lecturer"
    },
    {
        name: "Muhammad Ali",
        img: "",
        job: "Boxing Coach"
    },
    {
        name: "Ada Lovelace",
        img: "",
        job: "Mathematics and Computer Science Professor"
    }
];


const dataCourse: DataI = {
    times: [
        "09:00-10:00",
        "10:00-11:00",
        "11:00-11:20", // Перемена
        "11:20-12:20",
        "12:20-13:20",
        "13:20-14:00", // Обеденный перерыв
        "14:00-15:00",
        "15:00-16:00"
    ],
    course: [
        {
            title: "Web Development",
            schedule: [
                [ // Понедельник
                    {lecture: "John Doe", title: "HTML Basics", room: "101"},
                    {lecture: "Jane Smith", title: "CSS Styling", room: "102"},
                    {}, // Перемена
                    {lecture: "John Doe", title: "JavaScript Introduction", room: "103"},
                    {lecture: "Jane Smith", title: "Responsive Design", room: "102"},
                ],
                [ // Вторник
                    {lecture: "John Doe", title: "JavaScript Functions", room: "103"},
                    {lecture: "Jane Smith", title: "APIs and AJAX", room: "102"},
                    {}, // Перемена
                    {lecture: "John Doe", title: "Project Workshop", room: "104"},
                    {},
                ],
                [ // Среда
                    {lecture: "Jane Smith", title: "React Basics", room: "105"},
                    {lecture: "John Doe", title: "State Management", room: "103"},
                    {}, // Перемена
                    {lecture: "Jane Smith", title: "Component Lifecycle", room: "105"},
                    {lecture: "John Doe", title: "Routing in React", room: "104"},
                ],
                [ // Четверг
                    {lecture: "John Doe", title: "Node.js Introduction", room: "201"},
                    {lecture: "Jane Smith", title: "Express.js Basics", room: "202"},
                    {}, // Перемена
                    {lecture: "John Doe", title: "Database Connections", room: "203"},
                    {},
                ],
                [ // Пятница
                    {lecture: "Jane Smith", title: "Deployment Strategies", room: "201"},
                    {lecture: "John Doe", title: "Testing Basics", room: "202"},
                    {}, // Перемена
                    {lecture: "Jane Smith", title: "Final Project Review", room: "203"},
                    {},
                ]
            ]
        },
        {
            title: "Data Science",
            schedule: [
                [ // Понедельник
                    {lecture: "Alice Brown", title: "Python Basics", room: "301"},
                    {lecture: "Bob White", title: "Data Visualization", room: "302"},
                    {}, // Перемена
                    {lecture: "Alice Brown", title: "Statistics Fundamentals", room: "303"},
                    {lecture: "Bob White", title: "Machine Learning Intro", room: "302"},
                ],
                [ // Вторник
                    {lecture: "Alice Brown", title: "Data Cleaning", room: "301"},
                    {lecture: "Bob White", title: "Pandas Library", room: "302"},
                    {}, // Перемена
                    {lecture: "Alice Brown", title: "Data Ethics", room: "303"},
                    {},
                ],
                [ // Среда
                    {lecture: "Bob White", title: "SQL Basics", room: "304"},
                    {lecture: "Alice Brown", title: "Data Mining", room: "301"},
                    {}, // Перемена
                    {lecture: "Bob White", title: "Data Storytelling", room: "304"},
                    {lecture: "Alice Brown", title: "Final Project Guidance", room: "301"},
                ],
                [ // Четверг
                    {lecture: "Alice Brown", title: "Big Data Technologies", room: "305"},
                    {lecture: "Bob White", title: "Data Warehouse Concepts", room: "301"},
                    {}, // Перемена
                    {lecture: "Alice Brown", title: "Visualization Tools", room: "302"},
                    {},
                ],
                [ // Пятница
                    {lecture: "Bob White", title: "Capstone Project", room: "301"},
                    {lecture: "Alice Brown", title: "Career Opportunities", room: "302"},
                    {}, // Перемена
                    {lecture: "Bob White", title: "Guest Speaker Session", room: "303"},
                    {},
                ]
            ]
        },
        {
            title: "Artificial Intelligence",
            schedule: [
                [ // Понедельник
                    {lecture: "Emma Green", title: "Introduction to AI", room: "401"},
                    {lecture: "Liam Black", title: "Machine Learning Overview", room: "402"},
                    {}, // Перемена
                    {lecture: "Emma Green", title: "Neural Networks Basics", room: "403"},
                    {lecture: "Liam Black", title: "AI Ethics", room: "402"},
                ],
                [ // Вторник
                    {lecture: "Emma Green", title: "Supervised Learning", room: "401"},
                    {lecture: "Liam Black", title: "Unsupervised Learning", room: "402"},
                    {}, // Перемена
                    {lecture: "Emma Green", title: "Reinforcement Learning", room: "403"},
                    {},
                ],
                [ // Среда
                    {lecture: "Liam Black", title: "Deep Learning", room: "404"},
                    {lecture: "Emma Green", title: "Computer Vision", room: "401"},
                    {}, // Перемена
                    {lecture: "Liam Black", title: "Natural Language Processing", room: "404"},
                    {lecture: "Emma Green", title: "AI in Industry", room: "401"},
                ],
                [ // Четверг
                    {lecture: "Emma Green", title: "AI Tools and Libraries", room: "405"},
                    {lecture: "Liam Black", title: "Project Work", room: "401"},
                    {}, // Перемена
                    {lecture: "Emma Green", title: "Future of AI", room: "404"},
                    {},
                ],
                [ // Пятница
                    {lecture: "Liam Black", title: "AI Capstone Project", room: "401"},
                    {lecture: "Emma Green", title: "Final Exam Review", room: "402"},
                    {}, // Перемена
                    {lecture: "Liam Black", title: "Feedback Session", room: "403"},
                    {},
                ]
            ]
        },
        {
            title: "Mobile Development",
            schedule: [
                [ // Понедельник
                    {lecture: "Sophia Blue", title: "Introduction to Android", room: "501"},
                    {lecture: "Jackson Grey", title: "iOS Development", room: "502"},
                    {}, // Перемена
                    {lecture: "Sophia Blue", title: "Cross-Platform Frameworks", room: "503"},
                    {lecture: "Jackson Grey", title: "UI/UX Design", room: "502"},
                ],
                [ // Вторник
                    {lecture: "Sophia Blue", title: "Building UI in Android", room: "501"},
                    {lecture: "Jackson Grey", title: "Swift Basics", room: "502"},
                    {}, // Перемена
                    {lecture: "Sophia Blue", title: "App Architecture", room: "503"},
                    {},
                ],
                [ // Среда
                    {lecture: "Jackson Grey", title: "API Integration", room: "504"},
                    {lecture: "Sophia Blue", title: "Testing Mobile Apps", room: "501"},
                    {}, // Перемена
                    {lecture: "Jackson Grey", title: "Publishing Apps", room: "504"},
                    {lecture: "Sophia Blue", title: "App Monetization Strategies", room: "501"},
                ],
                [ // Четверг
                    {lecture: "Sophia Blue", title: "Mobile Security", room: "505"},
                    {lecture: "Jackson Grey", title: "Final Project Work", room: "501"},
                    {}, // Перемена
                    {lecture: "Sophia Blue", title: "User Feedback Analysis", room: "504"},
                    {},
                ],
                [ // Пятница
                    {lecture: "Jackson Grey", title: "Mobile Development Trends", room: "501"},
                    {lecture: "Sophia Blue", title: "Project Showcase", room: "502"},
                    {}, // Перемена
                    {lecture: "Jackson Grey", title: "Closing Ceremony", room: "503"},
                    {},
                ]
            ]
        },
        {
            title: "Cybersecurity",
            schedule: [
                [ // Понедельник
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "Work Experience", room: "1"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Math for IT", room: "25"},
                    {lecture: "", title: "Communications (Level 5)", room: "25"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Communications (Level 5)", room: "1"},
                    {lecture: "", title: "", room: ""},
                ],
                [ // Вторник
                    {lecture: "", title: "Programming & Design Principles", room: "31"},
                    {lecture: "", title: "Programming & Design Principles", room: "31"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Programming & Design Principles", room: "31"},
                    {lecture: "", title: "Web Authoring", room: "31"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Web Authoring", room: "31"},
                    {lecture: "", title: "Web Authoring", room: "31"},
                ],
                [ // Среда
                    {lecture: "", title: "Fundamentals", room: "31"},
                    {lecture: "", title: "Fundamentals", room: "31"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Fundamentals", room: "31"},
                    {lecture: "", title: "Networking Essentials", room: "31"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Networking Essentials", room: "31"},
                    {lecture: "", title: "Networking Essentials", room: "31"},
                ],
                [ // Четверг
                    {lecture: "", title: "Software Architecture", room: "31"},
                    {lecture: "", title: "Software Architecture", room: "31"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Software Architecture", room: "31"},
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "Math for IT", room: "20"},
                    {lecture: "", title: "Math for IT", room: "20"},
                ],
                [ // Пятница
                    {lecture: "", title: "Operating Systems", room: "31"},
                    {lecture: "", title: "Operating Systems", room: "31"},
                    {lecture: "", title: "BREAK", room: ""},                     // Перемена
                    {lecture: "", title: "Operating Systems", room: "31"},
                    {lecture: "", title: "Work Experience", room: "31"},
                    {lecture: "", title: "LUNCH BREAK", room: ""},               // Обеденный перерыв
                    {lecture: "", title: "", room: ""},
                    {lecture: "", title: "", room: ""},
                ]
            ]
        }
    ]
}

export {dataCourse, dataStaff};