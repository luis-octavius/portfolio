

export function loadFormacao() {
const education = [
        {
            name: "Licenciatura em Filosofia",
            institute: "UFRRJ",
            year: 2023,
        },
        {
            name: "Mestrado em Filosofia",
            institute: "UFRRJ",
            year: 2026,
        },
        {
            name: "Backend Developer Path",
            institute: "Boot.dev",
            year: 2026,
        },
        {
            name: "Análise e Desenvolvimento de Sistemas",
            institute: "UNINTER",
            year: 2027,
        }
    ];   
    
    const formacao = document.querySelector("#formacao-list");

    education.forEach((course) => {
       const item = createListEl(course);

       formacao.appendChild(item);
    })
}

function createListEl(course) {
    const item = document.createElement("li");
    const spanInst = document.createElement("span");
    const spanYear = document.createElement("span");

    spanInst.classList.add("institute");
    spanInst.textContent = `${course.institute} - `;

    spanYear.classList.add("year");
    spanYear.textContent = `${course.year}`;
    
    item.classList.add("formacao-item");

    item.appendChild(spanInst);
    item.appendChild(spanYear);

    const textNode = document.createTextNode(`${course.name} - `);
    item.insertBefore(textNode, item.firstChild);

    return item;
}