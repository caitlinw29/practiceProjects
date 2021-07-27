// Get all divs with the class name 'contentArea' and store in a NodeList called 'buttons'
var buttons = document.getElementsByClassName('contentArea');

// Loop through NodeList and call the click() function on each button
for(var i = 0; i <= buttons.length; i++)  
   buttons[i].click();

//refresh the page when button is clicked, to load a new board
function refreshPage () 
{
    window.location.reload ();
}


//Creates a random image in each bingo cell
function randomImage(spaceID)
{   
    
    /*i=0;
    if (i === 0) {
    var firstDone = true;
    } else {
        firstDone = false;
    } */
    
    
   /* if (firstDone === true) { */
    var imageArray = [  
        {src: "Images/ACNH_VillagerIcons/Admiral.png"},   
        {src: "Images/ACNH_VillagerIcons/Agent_S.png"},
        {src: "Images/ACNH_VillagerIcons/Agnes.png"},
        {src: "Images/ACNH_VillagerIcons/Chai.png"},
        {src: "Images/ACNH_VillagerIcons/Chelsea.png"},
        {src: "Images/ACNH_VillagerIcons/Etoile.png"},
        {src: "Images/ACNH_VillagerIcons/Marty.png"},
        {src: "Images/ACNH_VillagerIcons/Rilla.png"},
        {src: "Images/ACNH_VillagerIcons/Toby.png"}
    ];

    var arrayLength = imageArray.length;  
    var newArray = [];  

    for (var i = 0; i < arrayLength; i++)   
       {  
            newArray[i] = new Image();  
            newArray[i].src = imageArray[i].src; 
        }  

    function getRandomNum()   
    {  do {
        // generate and return a random number for the image to be displayed   
        imgNo = Math.floor(Math.random() * arrayLength);  
        return newArray[imgNo];  
        } while (newArray.indexOf(imgNo) !== -1);
    }
    
    var newImage = getRandomNum(0, newArray.length - 1);
    

    // display the new random image   
    if (spaceID != 12) {
        document.getElementById(spaceID).append(newImage);
    }

    document.getElementById(spaceID).disabled = true;
    
/*} //end of if firstDone */

    
}

  
  