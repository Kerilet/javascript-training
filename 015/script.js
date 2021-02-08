import { addInfo, deleteInfo, searchInfo, deleteSingle, writeInfo } from "./script3.js";

window.addInfo = addInfo;
window.deleteInfo = deleteInfo;
window.searchInfo = searchInfo;
window.writeInfo = writeInfo;
window.deleteSingle = deleteSingle;



/*
lista de objetos

toDo {
  "completed": false
  "text":
}

possible functions :
insert new toDo - press enter to do so.
delete an existing toDo - click a button to do so.
toggle the state of existing toDo - click a button to do so. -- modify object
clear all completed toDo - click a button to do so.
filter toDos by their state - click a menu to do so.  -- use object data
edit a toDo - double click to do so.  -- modify object
*/
