menuListArray = ["Pizza vegetariana",
                 "Pizza de frango",  
                 "Pizza Portuguesa", 
                 "Pizza Quatro Queijos",
                 "Pizza de Calabresa",
                 "Pizza Extravaganza"];

                 function getMenu() {
                    var htmldata="";
                    menuListArray.sort();
                    for (var i = 0; index < menuListArray.length; i++) {
                     htmldata=htmldata+ menuListArray[i] + '<br>'
                    }
                    document.getElementById("displayMenu").innerHTML = htmldata;
                 }

                 function addItem(){
                       var htmldata;
                       var imgtags='<img id="im1" src="images/pizzaImg"/>'
                       var item=document.getElementById("addItem").value;
                       menuListArray.sort();
                       htmldata=""
                       for (var i=0;i<menuListArray;i++){
                        htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
                       }
                       document.getElementById("displayAddedMenu").innerHTML = htmldata;

                 }

                 function addTop() {
                  var item=document.getElementById("addItem").value;
                  menuListArray.push(item);
                  addItem();
                 }

                 menuListArray.sort();

                 var item=document.getElementById("addItem").value;
                 menuListArray.push(item);

                 var imgtags='<img id"im1" src="images/pizzaImg.png"/>'
                 htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';

                 document.getElementById("displayMenu").innerHTML = htmldata;