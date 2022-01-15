//sandiegj.js
$(document).ready(function(){
  //Declaring and initializing my 4 personal variables
  let fName = "James Matthew";
  let lName = "San Diego";
  let login = "sandiegj";
  let studentNo = "991585093";


  /** 
   * Create a class called MenuCategories, with 2 attributes
   * */ 
  class MenuCategories{
    constructor(categoryNo, categoryName){
      this.categoryNo = categoryNo;
      this.categoryName = categoryName;
    }
  }

  //populating the array based on the class above
  var menucategories = new Array();
  menucategories.push(new MenuCategories("1", "Desert"));
  menucategories.push(new MenuCategories("2", "Vegetable"));
  menucategories.push(new MenuCategories("3", "Pasta/Rice"));
  menucategories.push(new MenuCategories("4", "Chicken/Fish/Meat"));
  console.log(menucategories);

  /** 
   * Create class called MenuItems, with 3 attributes
  */
  class MenuItem{
    constructor(categoryNo, menuItemName, foodImg){
      this.categoryNo = categoryNo;
      this.menuItemName = menuItemName;
      this.foodImg = foodImg;
    }
  }

  //populating the array based on the class above
  var menuitems = new Array();
  menuitems.push(new MenuItem("1","Apple Pie","images/pie.jpg"));
  menuitems.push(new MenuItem("2","Donuts","images/donut.jpg"));
  menuitems.push(new MenuItem("3","Spinach","images/spinach.jpg"));
  menuitems.push(new MenuItem("4","Zuchini","images/zuchini.png"));
  menuitems.push(new MenuItem("5","White Rice","images/rice.png"));
  menuitems.push(new MenuItem("6","Pasta","images/pasta.jpg"));
  menuitems.push(new MenuItem("7","Chicken Breast","images/chicken.jpg"));
  menuitems.push(new MenuItem("8","Haddock Fillets","images/fish.png"));
  console.log(menuitems);

  /**
   * Saving the data from my 4 personal variables to LS
   */
    localStorage.setItem("firstName", fName);
    localStorage.setItem("lastName", lName);
    localStorage.setItem("loginName",login);
    localStorage.setItem("studentNumber", studentNo);
  
  //Gets h3 header from HTML, and using template literals to output 
  $("h3").html(`${fName} ${lName} ${studentNo} A01`);

  /** *
   * Using a for of loop to populate the unordered list with the correct requirements
  */
  for(let item of menuitems){
  $("#menuList").append(`
  <li title= ${item.categoryNo}> ${item.menuItemName} <img src= ${item.foodImg} width="25"></li>
  `);
  }

  /** *
   * Decided to hardcode this section, so I will be able to code the toggleClass code correctly.
  */
  $("#menuCategories").append(`
  <div title="c1">${menucategories[0].categoryNo} - ${menucategories[0].categoryName} </div>
  <div title="c2">${menucategories[1].categoryNo} - ${menucategories[1].categoryName} </div>
  <div title="c3">${menucategories[2].categoryNo} - ${menucategories[2].categoryName} </div>
  <div title="c4">${menucategories[3].categoryNo} - ${menucategories[3].categoryName} </div>
  `);

  /**
   * In the instructions it gives an example of myCategory = 1, but I did not want it to output 1, I would like it
   * to output the actual desert name.
   */
  var myCategory = menucategories[0].categoryName; //title attr has to match this
  $("p:first").html(`
  My favourite category of food is ${myCategory}
  `);

  /** *
   * When user clicks this button, it will trigger the function, which will then
   * reformat the specific section in my UL to a different css class
   * */
  $("#toggle").click(function(){
    $("#buttonArea div[title $= 'c1']").toggleClass("toggleButton"); // xx from my sandiegj.css file
  });

  /**
   * When clicked, the list will disappear, and reappear if clicked again.
   * Grabbed the button (hideList) and using the function will toggle the section (menuCategories) that holds the list
   */
  $("#hideList").click(function(){
    console.log("Click to Hide List, click again to bring back");
    $("#menuCategories").toggle()

  });
  
  $("footer").html(`Winter 2021 / SYST24444 / ${login}`);

});