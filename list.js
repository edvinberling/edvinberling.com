let list = ['List item 1', 'List item 2', 'List item 3'];

function printList() {
    list.forEach(function (listTitle) {
        let element = document.createElement('div');
        element.innerText = listTitle;
        document.body.appendChild(element);
    });
}

function addListItem() {
    let textbox = document.getElementById('list-title');
    let title = textbox.value;
    if(title == '1234')
    {
        list.push('Numbers')
    }
    else 
    {
        list.push(title);
    }
}