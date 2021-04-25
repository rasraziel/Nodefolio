(async function getProjects() {
    try {
        const response = await fetch("/projects/all");
        const result = await response.json();

        const projectsDiv = document.getElementById("portfolis");
        
        result.projects.map(project => {

            const projectDiv = document.createElement("div");
            projectDiv.classList.add("portfolio");

            projectsDiv.appendChild(projectDiv);

            const imageDiv = document.createElement("div");
            imageDiv.classList.add("image-data");

            const image = document.createElement("img");
            image.setAttribute("src", project.image);

            const unorderedList = document.createElement("ul");
            unorderedList.classList.add("hover-items");

            const listEntry = document.createElement("li");

            if (project.gitLink!==undefined){
                const gitAnchor = document.createElement("a");
                gitAnchor.setAttribute('href', project.gitLink);
                gitAnchor.innerHTML = 'Github';
                listEntry.appendChild(gitAnchor);
            }

            const deploymentAnchor = document.createElement("a");
            deploymentAnchor.setAttribute('href', project.link);
            deploymentAnchor.innerHTML = 'Deployed';

            const title = document.createElement("h5");
            title.innerText = project.title;

            const description = document.createElement("p");
            description.innerText = project.description;

            projectDiv.appendChild(imageDiv);
                imageDiv.appendChild(image);
                imageDiv.appendChild(unorderedList);
                    unorderedList.appendChild(listEntry);
                        
                        listEntry.appendChild(deploymentAnchor);
            projectDiv.appendChild(title);
            projectDiv.appendChild(description);
        });

    } catch (error) {
        console.log(error);
    }
})();