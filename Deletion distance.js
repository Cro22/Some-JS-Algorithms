function deleteBlankItems(items) {
    for(var i = 0; i < items.length; i++) {
        if(items[i].length == 0) {
            items.splice(i, 1);
        }
    }
}

var names = ['Rachel', '', 'Meghana', '', '', 'Tim'];
deleteBlankItems(names);

console.log(names)