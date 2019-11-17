class IssueTracker {
    constructor() {
        console.log("constructor")
        console.log(localStorage)
        let projStorage = localStorage.getItem("IssueTracker_Projects")
        this.projects = (projStorage == null) ? [] : this.loadFromLocalStorage(projStorage)
        this.selectedProject = this.projects[0]
    }

    loadFromLocalStorage(projStorage) {
        this.projects = []
        let projects = JSON.parse(projStorage)
        let newProjects = []
        
        for(var i = 0; i < projects.length; i++) {
            newProjects[i] = new Project(projects[i].name)
            for(var j = 0; j < projects[i].issues.length; j++) {
              
                let issue = projects[i].issues[j]
                let dat=new Date(issue.date).toLocaleDateString("en-US");
                newProjects[i].addIssue(issue.title, dat, issue.priority, issue.done)
            }
        }

        return newProjects
    }

    addProject(name) {
        this.projects.push(new Project(name))
        
    }

    removeProject(project) {
        this.projects.pop(project)
    }
    getIssues()
    {return this.selectedProject.issues;}

    getProject(name) {
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].name == name) {
                return this.projects[i]
            } 
        }
    }

    addIssueToProject(title, date, priority, done) {
        console.log(this.selectedProject)
        let dat=new Date(date).toLocaleDateString("en-US");
        this.selectedProject.addIssue(title, dat, priority, done)   
        localStorage.setItem("IssueTracker_Projects", JSON.stringify(issueTracker.projects))
        
    }
    deleteIssueFromProject(project,issue)
    {console.log('removing'+issue+"from"+project)
        this.getProject(project).removeIssue(issue)
        localStorage.setItem("IssueTracker_Projects", JSON.stringify(issueTracker.projects))
    }
}
