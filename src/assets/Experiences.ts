interface Experience {
  Id: number;
  Type: string;
  Title: string;
  Company: string;
  StartDate: string;
  EndDate: string;
  Location: string;
  Description: string;
  Body: string;
  Skills: string;
} 

const ExperienceData: Experience[] = [
    {
      "Id": 1,
      "Type": "work",
      "Title": "Web Developer",
      "Company": "Blen USA",
      "StartDate": "Nov 2019",
      "EndDate": "Jul 2021",
      "Location": "Guadalajara, Jalisco, Mexico",
      "Description": "Website developer and designer: Built, redesigned, & translated the website, integrating an inventory system for seamless user experience.",
      "Body": "Working for Blen Usa, I built, maintained, and revamped a website, seamlessly integrating an inventory platform while bridging the language gap through expert translations. My work enhanced user experience and accessibility, ensuring the site functioned smoothly and effectively.",
      "Skills": "WordPress,FTP,Adobe Photoshop,Adobe Illustrator"
    },
    {
      "Id": 2,
      "Type": "work",
      "Title": "Web Developer",
      "Company": "The Grade GDL",
      "StartDate": "Jun 2022",
      "EndDate": "Jul 2022",
      "Location": "Guadalajara, Jalisco, Mexico",
      "Description": "Planned, designed and developed a WordPress website, implementing a smooth user experience.",
      "Body": "I designed and developed a functional and captivating WordPress website. This collaborative approach yielded a user-friendly and effective online presence for the organization's needs. The website is fully responsive.",
      "Skills": "WordPress,Adobe Photoshop,Adobe Illustrator"
    },
    {
      "Id": 3,
      "Type": "work",
      "Title": "Web Developer",
      "Company": "GodCast MX",
      "StartDate": "Dec 2022",
      "EndDate": "May 2023",
      "Location": "Guadalajara, Jalisco, Mexico",
      "Description": "I developed and maintained the organization's website, using React, seamlessly integrating a content retrieval system linked to Medium.",
      "Body": "I built and managed the organization's website, ensuring its visual appeal and user-friendliness. My key contribution involved seamlessly integrating a dynamic content retrieval system linked to Medium, keeping the website consistently updated with their posts. Additionally, I implemented version control using Git and GitHub.",
      "Skills": "JavaScript,HTML,CSS,React"
    },
    {
      "Id": 4,
      "Type": "work",
      "Title": "Excel Developer",
      "Company": "Power Sheet (\"ExcelPaDummies\")",
      "StartDate": "Jun 2023",
      "EndDate": "Sep 2023",
      "Location": "Guadalajara, Jalisco, Mexico",
      "Description": "Worked in development of macro-enabled Excel projects for diverse businesses, encompassing database construction, data-driven reports, registries, and cash flow analyses.",
      "Body": "As a key player in project development, I applied my expertise in Excel and VBA to create customized solutions for various businesses. From building robust databases and crafting insightful data reports to designing efficient registries and conducting thorough cash flow analyses, I tackled a wide range of challenges. Automation played a crucial role in my approach, as I utilized VBA to seamlessly handle repetitive tasks and ensure effective file management.",
      "Skills": "Microsoft Excel,Visual Basic for Applications (VBA)"
    },
    {
      "Id": 5,
      "Type": "work",
      "Title": "Application Development Intern",
      "Company": "DXC Technology",
      "StartDate": "Sep 2023",
      "EndDate": "Mar 2024",
      "Location": "Guadalajara, Jalisco, Mexico",
      "Description": "Contributing to project success, I actively collaborated with the team to generate automated tests and to provide valuable insights into code, tests, and debugging processes.",
      "Body": "I designed and implemented innovative test automation scripts, using Cypress, contributing to the organization's quality control initiatives. I also worked on mapping parts of the application, starting from its front end all the way into the project's databases, in the back end.",
      "Skills": "C#,.NET,ASP.NET,AngularJS,Typescript,SQL,SQL Developer"
    },
    {
      "Id": 6,
      "Type": "projects",
      "Title": "Demand Forecasting Best Practices",
      "Company": "Learning",
      "StartDate": "Mar 2024",
      "EndDate": "Apr 2024",
      "Location": "Guadalajara, Jalisco, Mexico",
      "Description": "I read a book called Demand Forecasting Best Practices in order to learn more about demand forecasting.",
      "Body": "I read a book called Demand Forecasting Best Practices in order to learn more about demand forecasting, and to possibly land a job on Sales and Operations.",
      "Skills": "Demand Planning,Machine Learning,S&OP"
    },
    {
      "Id": 7,
      "Type": "projects",
      "Title": "Portfolio Website",
      "Company": "Personal",
      "StartDate": "Mar 2024",
      "EndDate": "Apr 2024",
      "Location": "Guadalajara, Jalisco, Mexico",
      "Description": "I developed a portfolio website using React, TypeScript and the Material UI library.",
      "Body": "I developed a portfolio website using React, TypeScript and the Material UI library. This was in order to post my future projects, both academic and personal, as well as professional experiences for people to read. It was a practice project.",
      "Skills": "React,TypeScript,HTML,CSS,Material UI,Git,GitHub"
    },
    {
      "Id": 8,
      "Type": "work",
      "Title": "Process and Business Intelligence Engineer",
      "Company": "Ayúdate LTA",
      "StartDate": "May 2024",
      "EndDate": "Now",
      "Location": "Guadalajara, Jalisco, Mexico",
      "Description": "I work as a Process and Business Inteligence Engineer at Ayúdate LTA. I optimize processes and analyse data to generate actionable KPIs.",
      "Body": "I work by analysing and dissecting processes within the company, so i can identify waste and implement optimization and automation measures. I also analyse data and generate KPIs to monitor said processes.",
      "Skills": "MySQL,Metabase,MS Excel,Lucidchart,BPMN 2.0,Python,Figma"
    },
  ]

export default ExperienceData;