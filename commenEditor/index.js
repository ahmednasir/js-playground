let comments = [
    {
        id: 1111,
        text: 'Hello',
        children: []
    },
    {
        id: 2222,
        text: 'how',
        children: []
    },
    {
        id: 3333,
        text: 'are',
        children: []
    },
    {
        id: 4444,
        text: 'you',
        children: []
    },
]
const outerBoxId = 'comment-box';
const commentBox = document.getElementById(outerBoxId);

const addCommentUI = (parentId, text, childId) => {
    let container = document.getElementById(parentId);
    
    let formElement = document.createElement("div")
    formElement.className ="comment-row"
    formElement.id = childId

    let buttonElement = document.createElement("button")
    buttonElement.id= childId+"button";
    buttonElement.textContent = "reply"
    buttonElement.onclick = onReply;

    let commentElement = document.createElement("div");
    commentElement.id = childId+"comment";
    commentElement.innerText = text;

    formElement.appendChild(commentElement);
    formElement.appendChild(buttonElement)

    container.appendChild(formElement);
    container.appendChild(document.createElement("br"))
}

const addCommentInputBox = (childId)=>{
    let form = document.createElement("form");
    form.id = `${childId}-form`
    form.onsubmit = addComment

    let button = document.createElement("button");
    button.onclick = addComment
    button.textContent = "add"
    button.type = "submit"
    button.id = `${childId}-button`

    let inputBox = document.createElement("input")
    inputBox.name = "comment"
    inputBox.type = "text"

    form.appendChild(inputBox)
    form.appendChild(button)
    return form;
}

const onReply =(event)=>{
    let containerId = event.target.id;
    containerId = containerId.replace("button", "");
    let container =document.getElementById(containerId)
    
    let form = addCommentInputBox(containerId)

    container.appendChild(document.createElement("br"))
    container.appendChild(form)
}

const addComment = (event)=>{
    event.preventDefault()
    
    let parentId = event.target.id
    parentId = parentId.replace("-button","")
    let childId = new Date().getTime()
    let submittedForm = document.getElementById(`${parentId}-form`)
    let formValue = submittedForm.elements.namedItem("comment").value
    if(!formValue) return
    document.getElementById(parentId).removeChild(submittedForm)

    addCommentUI(parentId,formValue, childId)
}

const initPage = () => {
    for (let comment of comments) {
        addCommentUI(outerBoxId, comment.text, comment.id)
    }

}

(function () {
    initPage()
})()