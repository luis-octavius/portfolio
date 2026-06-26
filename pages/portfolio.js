
export function loadPortfolio() {
    const portfolio = document.querySelector("#portfolio");

    const projects = [
        {
            name: "Akrasía", 
            link: "https://github.com/luis-octavius/akrasia",
            description: "Tracker de tarefas na linha de comando escrito em Go com SQLite e Cobra com mais de 15 comandos, contador de streak, integração com cron e Docker."
        }, 
        {
            name: "AWS Serverless API",
            link: "https://github.com/luis-octavius/aws-serverless-api",
            description: "API REST construída com AWS CDK, API Gateway, Lambda e DynamoDB escrita em Node com TypeScript"
        },
        {
            name: "RSS Feed Aggregator", 
            link: "https://github.com/luis-octavius/rss-feed-aggregator",
            description: "Um agregador de feeds RSS na linha de comando escrito com TypeScript, PostgreSQL e Drizle"
        }, 
        {
            name: "Chirpy", 
            link: "https://github.com/luis-octavius/chirpy-api",
            description: "Um aplicativo fullstack que imita a rede social Twitter, com uma API escrita com Node/Express e frontend com React/Vite (Ainda em desenvolvimento)"
        }
    ];

    projects.forEach((project) => {
        portfolio.append(createProjectEl(project));
    })

}

function createProjectEl(project) {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project-div");

    const title = document.createElement("h2");
    const link = document.createElement("a");
    const description = document.createElement("p");

    projectDiv.appendChild(title);
    projectDiv.appendChild(link);
    projectDiv.appendChild(description);

    title.textContent = project.name;
    title.classList.add("project-title");

    link.textContent = "Ir para o projeto";
    link.href = project.link;
    link.classList.add("project-link");

    description.textContent = project.description;
    description.classList.add("project-description");

    return projectDiv;
}