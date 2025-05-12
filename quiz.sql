CREATE TABLE quiz_questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question TEXT NOT NULL,
    option_a VARCHAR(255),
    option_b VARCHAR(255),
    option_c VARCHAR(255),
    option_d VARCHAR(255),
    correct_option CHAR(1)
);


INSERT INTO quiz_questions (question, option_a, option_b, option_c, option_d, correct_option) VALUES
("What does HTML stand for?", "Hyper Trainer Marking Language", "Hyper Text Markup Language", "Hyper Text Marketing Language", "Hyper Text Markup Leveler", "B"),
("Which language is used for styling web pages?", "HTML", "JQuery", "CSS", "XML", "C"),
("What does CSS stand for?", "Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "B"),
("Which is a JavaScript framework?", "Laravel", "Django", "React", "Flask", "C"),
("Which of the following is used to connect a database?", "HTML", "CSS", "SQL", "JavaScript", "C"),
("Which tag is used for inserting a line break in HTML?", "<break>", "<br>", "<lb>", "<line>", "B"),
("What is the default alignment of content in a <div> element?", "Center", "Left", "Right", "Justify", "B"),
("Which symbol is used for comments in JavaScript?", "//", "/* */", "#", "<!-- -->", "A"),
("In which year was JavaScript created?", "1995", "2000", "1990", "1998", "A"),
("What is the use of the <head> tag in HTML?", "Contains main content", "Defines header section", "Contains meta and links", "None of the above", "C"),
("Which attribute is used to define inline styles?", "style", "class", "id", "styles", "A"),
("Which HTML tag is used to define an unordered list?", "<ul>", "<ol>", "<li>", "<list>", "A"),
("Which SQL command is used to retrieve data?", "GET", "SELECT", "FETCH", "RETRIEVE", "B"),
("How do you define a variable in JavaScript?", "var name", "variable name", "v name", "new name", "A"),
("What is the extension for a JavaScript file?", ".html", ".css", ".js", ".java", "C"),
("Which SQL keyword is used to insert data?", "INSERT INTO", "ADD", "PUT", "APPEND", "A"),
("What does DOM stand for?", "Document Object Model", "Data Object Model", "Document Order Model", "None", "A"),
("Which of the following is a looping structure in JavaScript?", "if", "for", "define", "loop", "B"),
("Which HTML tag is used to display a picture?", "<pic>", "<image>", "<img>", "<src>", "C"),
("Which event occurs when the user clicks on an HTML element?", "onmouse", "onchange", "onmouseover", "onclick", "D"),
("How can you add a comment in HTML?", "// comment", "<!-- comment -->", "# comment", "/* comment */", "B"),
("What is the correct syntax to link a CSS file?", "<link src='style.css'>", "<style src='style.css'>", "<link rel='stylesheet' href='style.css'>", "<css>style.css</css>", "C"),
("What is SQL primarily used for?", "Creating web pages", "Styling content", "Managing databases", "Designing graphics", "C"),
("Which keyword is used to create a function in JavaScript?", "function", "method", "define", "create", "A"),
("Which method is used to write a message in the console in JavaScript?", "console.log()", "print()", "echo()", "log.console()", "A");

