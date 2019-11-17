# localstorage
js splice - удаляет из массива элемент ( например issue) 
у кнопки button я сделал onclick - чтобы передать проект у которого надо удалить issue и название issue,
  я добавил ей два атрибута   <button issue="{issue.title}" id="{project.name}"
 Это позволяет сделать так
 e это событие
 e.target это винованик события
 e.target.attrubutes - атрибуты виновника  ( .value- их значения ) 
 Смотри функцию deleteIssyefromProject- там все просто
 
    deleteI(e)
            {
                e.preventDefault();
                console.log(e.target.attributes);
                issueTracker.deleteIssueFromProject(
                e.target.attributes.id.value,
                e.target.attributes.issue.value)
                this.update();
            },
