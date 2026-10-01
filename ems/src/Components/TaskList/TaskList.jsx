import React from "react";

const TaskList = () => {
  const tasks = [
    {
      id: 1,
      priority: "High",
      date: "20 Feb 2026",
      title: "Make an Employee Management System",
      description:
        "Develop a complete employee management system with employee records, departments, roles and authentication.",
    },
    {
      id: 2,
      priority: "Medium",
      date: "22 Feb 2026",
      title: "Create User Authentication",
      description:
        "Implement secure login, registration, logout and password reset functionality using JWT authentication.",
    },
    {
      id: 3,
      priority: "Low",
      date: "25 Feb 2026",
      title: "Design Responsive Navbar",
      description:
        "Create a modern responsive navigation bar with dropdown menus and mobile-friendly functionality.",
    },
    {
      id: 4,
      priority: "High",
      date: "27 Feb 2026",
      title: "Fix Dashboard UI Bugs",
      description:
        "Identify and resolve dashboard layout issues, overlapping elements and responsive design problems.",
    },
    {
      id: 5,
      priority: "Medium",
      date: "01 Mar 2026",
      title: "Integrate REST APIs",
      description:
        "Connect frontend components with backend REST APIs and implement proper loading and error handling.",
    },
    {
      id: 6,
      priority: "High",
      date: "03 Mar 2026",
      title: "Implement Employee Search",
      description:
        "Add search and filtering functionality to find employees by name, department and employment status.",
    },
    {
      id: 7,
      priority: "Low",
      date: "05 Mar 2026",
      title: "Improve Website Footer",
      description:
        "Design an attractive footer with useful navigation links, social media icons and contact information.",
    },
    {
      id: 8,
      priority: "Medium",
      date: "08 Mar 2026",
      title: "Add Dark Mode Feature",
      description:
        "Implement dark and light themes with a toggle button and maintain the selected theme across pages.",
    },
    {
      id: 9,
      priority: "High",
      date: "10 Mar 2026",
      title: "Develop Admin Dashboard",
      description:
        "Build an admin dashboard displaying employee statistics, department information and performance reports.",
    },
    {
      id: 10,
      priority: "Medium",
      date: "12 Mar 2026",
      title: "Perform Application Testing",
      description:
        "Test application functionality, identify bugs, validate forms and improve overall application performance.",
    },
  ];
  return (
    <div id = 'tasklist' className="flex gap-5 overflow-x-auto p-4 mt-20">

  {tasks.map((task) => (

    <div
      key={task.id}
      className="h-full shrink-0 w-75 bg-blue-400 rounded-xl"
    >

      <div className="flex justify-between items-center text-white font-semibold">

        <h3 className="bg-red-500 rounded m-3 p-1">
          {task.priority}
        </h3>

        <h4 className="m-3">
          {task.date}
        </h4>

      </div>

      <div className="text-white mt-4 p-3">

        <h2 className="font-semibold">
          {task.title}
        </h2>

        <p className="mt-2 text-sm">
          {task.description}
        </p>

      </div>

    </div>

  ))}

</div>
  );
};

export default TaskList;
