class Project {
    constructor(name) {
        this.name = name
        this.issues = []
    }

    addIssue(title, date, priority, done) {
        console.log('pushing issue')
        this.issues.push(new Issue(title, date, priority, done))
       
    }

    removeIssue(issueName) {
        console.log("remove issue" + issueName)
        for (let i = 0; i < this.issues.length; i++) {
            if (this.issues[i].title == issueName) {
              this.issues.splice(i, 1); 
            } 
        }
        console.log(this.issues);
      

    }
}
