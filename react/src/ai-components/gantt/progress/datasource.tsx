export let TaskDataCollection  = [
    { TaskID: 1,TaskName: "Product concept", StartDate: new Date(2026, 3, 2), EndDate: new Date(2026, 3, 8), Duration: "5 days" },
    { TaskID: 2,TaskName: "Defining the product usage", StartDate: new Date(2026, 3, 2), EndDate: new Date(2026, 3, 8), Duration: "3", Progress: 30, ParentTaskID: 1 },
    { TaskID: 3,TaskName: "Defining the target audience", StartDate: new Date(2026, 3, 2), EndDate: new Date(2026, 3, 4), Duration: "3", Progress: 40, ParentTaskID: 1 },
    { TaskID: 4,TaskName: "Prepare product sketch and notes", StartDate: new Date(2026, 3, 5), EndDate: new Date(2026, 3, 8), Duration: "2", Progress: 30, ParentTaskID: 1, Predecessor: "2" },
    { TaskID: 5,TaskName: "Concept approval", StartDate: new Date(2026, 3, 8), EndDate: new Date(2026, 3, 8), Duration: "0", Predecessor: "3,4", ParentTaskID: 1 },
    { TaskID: 6,TaskName: "Market research", StartDate: new Date(2026, 3, 9), EndDate: new Date(2026, 3, 18), Predecessor: "2", Duration: "4", Progress: 30 },
    { TaskID: 7,TaskName: "Demand analysis", StartDate: new Date(2026, 3, 9), EndDate: new Date(2026, 3, 12), Duration: "4", Progress: 40, ParentTaskID: 6 },
    { TaskID: 8,TaskName: "Customer strength", StartDate: new Date(2026, 3, 9), EndDate: new Date(2026, 3, 12), Duration: "4", Progress: 30, ParentTaskID: 7, Predecessor: "5" },
    { TaskID: 9,TaskName: "Market opportunity analysis", StartDate: new Date(2026, 3, 9), EndDate: new Date(2026, 3, 12), Duration: "4", ParentTaskID: 7, Predecessor: "5" },
    { TaskID: 10,TaskName: "Competitor analysis", StartDate: new Date(2026, 3, 15), EndDate: new Date(2026, 3, 18), Duration: "4", Progress: 30, ParentTaskID: 6, Predecessor: "7,8" },
    { TaskID: 11,TaskName: "Product strength analysis", StartDate: new Date(2026, 3, 15), EndDate: new Date(2026, 3, 18), Duration: "4", Progress: 40, ParentTaskID: 6, Predecessor: "9" },
    { TaskID: 12,TaskName: "Research completed", StartDate: new Date(2026, 3, 18), EndDate: new Date(2026, 3, 18), Duration: "0", Progress: 30, ParentTaskID: 6, Predecessor: "10" },
    { TaskID: 13,TaskName: "Product design and development", StartDate: new Date(2026, 3, 19), EndDate: new Date(2026, 4, 16), Duration: "20", Predecessor: "6" },
    { TaskID: 14,TaskName: "Functionality design", StartDate: new Date(2026, 3, 19), EndDate: new Date(2026, 3, 23), Duration: "3", Progress: 30, ParentTaskID: 13, Predecessor: "12" },
    { TaskID: 15,TaskName: "Quality design", StartDate: new Date(2026, 3, 19), EndDate: new Date(2026, 3, 23), Duration: "3", Progress: 40, ParentTaskID: 13, Predecessor: "12" },
    { TaskID: 16,TaskName: "Define reliability", StartDate: new Date(2026, 3, 24), EndDate: new Date(2026, 3, 25), Duration: "2", Progress: 30, ParentTaskID: 13, Predecessor: "15" },
    { TaskID: 17,TaskName: "TaskIDentifying raw materials", StartDate: new Date(2026, 3, 24), EndDate: new Date(2026, 3, 25), Duration: "2", ParentTaskID: 13, Predecessor: "15" },
    { TaskID: 18,TaskName: "Define cost plan", StartDate: new Date(2026, 3, 26), EndDate: new Date(2026, 3, 29), Duration: "2", Progress: 30, ParentTaskID: 13, Predecessor: "17" },
    { TaskID: 19,TaskName: "Manufacturing cost", StartDate: new Date(2026, 3, 26), EndDate: new Date(2026, 3, 29), Duration: "2", Progress: 40, ParentTaskID: 18, Predecessor: "17" },
    { TaskID: 20,TaskName: "Selling cost", StartDate: new Date(2026, 3, 26), EndDate: new Date(2026, 3, 29), Duration: "2", Progress: 30, ParentTaskID: 18, Predecessor: "17" },
    { TaskID: 21,TaskName: "Development of final design", StartDate: new Date(2026, 3, 30), EndDate: new Date(2026, 4, 8), Duration: "7", ParentTaskID: 13 },
    { TaskID: 22,TaskName: "Develop dimensions and design", StartDate: new Date(2026, 3, 30), EndDate: new Date(2026, 4, 1), Duration: "2", Progress: 30, ParentTaskID: 21, Predecessor: "19,20" },
    { TaskID: 23,TaskName: "Develop designs to meet industry", StartDate: new Date(2026, 4, 2), EndDate: new Date(2026, 4, 3), Duration: "2", Progress: 40, ParentTaskID: 21, Predecessor: "22" },
    { TaskID: 24,TaskName: "Include all the details", StartDate: new Date(2026, 4, 6), EndDate: new Date(2026, 4, 8), Duration: "3", Progress: 30, ParentTaskID: 21, Predecessor: "23" },
    { TaskID: 25,TaskName: "Project closure", StartDate: new Date(2026, 4, 9), EndDate: new Date(2026, 4, 13), Duration: "3", Predecessor: "24" },
];