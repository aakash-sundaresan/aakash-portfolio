    function toggleDarkMode() {
        const body = document.body;
        body.classList.toggle('dark-mode');
        
        // Call the function to toggle SVG fill color
        toggleSVGFillColor();
    }

    // Function to toggle SVG fill color based on mode
    function toggleSVGFillColor() {
        const webLinks = document.getElementById('web-links');
        const svgLinks = webLinks.querySelectorAll('svg');

        svgLinks.forEach(svg => {
            if (document.body.classList.contains('dark-mode')) {
                // Change fill color to white when it's dark mode
                svg.setAttribute('fill', 'white');
            } else {
                // Change fill color to black when it's light mode
                svg.setAttribute('fill', 'black');
            }
        });
    }

    // Call the function to toggle SVG fill color when the page loads
    window.onload = toggleSVGFillColor;


    

    function toggleTab(tabName) {
    const tabContent = document.getElementById(tabName);
    tabContent.classList.toggle('show');

    const icon = document.getElementById(tabName + '-icon');
    icon.textContent = icon.textContent === '+' ? '-' : '+';
    }
    ;
    document.addEventListener('DOMContentLoaded', function () {
        const timelineItems = document.querySelectorAll('.timeline-item');

        timelineItems.forEach(item => {
            const content = item.querySelector('.expanded-content');

            item.addEventListener('click', function () {
                if (content) {
                    content.style.display = content.style.display === 'none' ? 'block' : 'none';
                }
            });
        });
    });



    document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const headerHeight = document.querySelector('.sticky-header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });


    function openProjectDetails(projectId) {
    const projectDetails = getProjectDetails(projectId);
    document.getElementById('modalTitle').textContent = projectDetails.name;
    document.getElementById('modalGithubLink').href = projectDetails.githubLink;
    // document.getElementById('modalImage').src = projectDetails.imageUrl;



    const ul = document.createElement('ul');

    // Populate the unordered list with items from the projectDetails.summary array
    projectDetails.summary.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
    const br = document.createElement('br');
    ul.appendChild(br);
    });

    // Clear existing content in modalSummary and append the unordered list
    const modalSummary = document.getElementById('modalSummary');
    modalSummary.innerHTML = '';
    modalSummary.appendChild(ul);


    // Show the modal
    document.getElementById('projectModal').style.display = 'block';
    }


    function closeModal() {

    document.getElementById('projectModal').style.display = 'none';
    }

    function getProjectDetails(projectId) {
    if (projectId === 1) {
    return {
        name: 'Yelp Business Prediction (UC Berkeley)',
        summary: [
    "Developed a project to predict whether a given business listed on Yelp will close or continue operations in the coming years using Python, SciKit, and Keras.",
    "Utilized a publicly available dataset with approximately 150,000 observations.",
    "Employed Natural Language Processing for Sentiment Analysis on business reviews.",
    "Ran multiple machine learning models on the data, including Logistic Regression, LDA, CART, Random Forest, and Neural Networks, achieving an average accuracy of approximately 82% on the testing dataset.",
    "Enhanced models using boosting techniques such as AdaBoost, XGBoost, and CatBoost, resulting in an average improvement of approximately 2%."
        ],
        githubLink: 'https://github.com/yourusername/project1',
        
    };
    } else if (projectId === 2) {
    return {
        name: 'Design and Analysis of RDBMS Schema (UC Berkeley)',
        summary:[
            "Created a schema and ER diagram of an E-commerce company.",
            "Generated data in order to populate this schema using packages pydbgen and Faker. Imported the schema and data generated onto SQL to run queries.",
            "Did EDA and statistical analysis on python using the data exported from queries.",
            "Generated Analytic Dashboards and Reports from the data using SQL"
        ],
        githubLink: 'https://github.com/yourusername/project2',
        
    };
    } else if (projectId === 3) {
    return {
        name: 'Credit Risk Analysis (UC Berkeley)',
        summary: [
        "Built a banking system to perform basic banking functions such as creating accounts, making transactions and updating profiles.",
    "Used Machine Learning models to predict a risk of default on purchased loans. The customer’s age, credit history, incomeand the loan category were found to be major contributors to the dependent variable ie loan default.",
    "Identified Random Forest to be the most accurate model with an accuracy of 90% on test data"
        ],
        githubLink: 'https://github.com/yourusername/project3',
    };
    } else if (projectId === 4) {
    return {
        name: 'Transit Route Optimization using Uber/Lyft Data',
        summary: ["Optimizing routing of transit services in and around the greater Boston Area using various machine learning models.",
    "The project began with processing the data from rideshare records from Uber and Lyft.",
    "Machine learning models included demand forecasting using ARIMA and SARIMAX and XGBoost.",
    "Performed customer segmentation using K-means clustering to determine city hotspots.",
    "Used Gurobi Optimization on UFLP model to plan efficient city transit routes."],
        githubLink: 'https://github.com/yourusername/project3',
    };
    } else if (projectId === 5) {
    return {
        name: 'Portfolio Website',
        summary: ["Created a website from scratch using HTML to highlight my professional experiences."
        ,"Used CSS and Javascript to design the portfolio according to my requirements."]
        , githubLink: 'https://github.com/yourusername/project5',
        imageUrl: 'path/to/project5.jpg'
    };
    } else if (projectId === 6) {
    return {
        name: 'Project Six',
        summary: 'Summary of Project Six.',
        githubLink: 'https://github.com/yourusername/project6',
        imageUrl: 'path/to/project6.jpg'
    };
    } else {
    // Default case or handle other project IDs
    return {
        name: `Project ${projectId}`,
        summary: `Summary of Project ${projectId}.`,
        githubLink: `https://github.com/yourusername/project${projectId}`,
        imageUrl: `path/to/project${projectId}.jpg`
    };
    }
    }



    document.addEventListener('DOMContentLoaded', function() {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const headerHeight = document.querySelector('.sticky-header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    });

        document.addEventListener('DOMContentLoaded', function() {
            // Function to calculate the months and years of work experience
            function calculateWorkExperience() {
                // Get the start date and current date
                const startDate = new Date('2023-08-01'); // Replace with your start date
                const currentDate = new Date();

                // Calculate the difference in months and years
                const months = (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
                            currentDate.getMonth() - startDate.getMonth();
                const years = Math.floor(months / 12);

                // Display the results
                document.getElementById('result').innerHTML = `
                    ${years} years, ${months % 12} months.
                `;
            }

            // Automatically calculate the work experience when the page loads
            calculateWorkExperience();

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    const targetId = this.getAttribute('href').substring(1);
                    const targetElement = document.getElementById(targetId);

                    if (targetElement) {
                        const headerHeight = document.querySelector('.sticky-header').offsetHeight;
                        const targetPosition = targetElement.offsetTop - headerHeight;

                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        });
        
