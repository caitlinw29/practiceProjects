function genRanVillager() 
{ 
   var imageArray = [  
        {src: "Images/ACNH_VillagerPhotos/Admiral.png"},   
        {src: "Images/ACNH_VillagerPhotos/Agent_S.png"},
        {src: "Images/ACNH_VillagerPhotos/Agnes.png"},
        {src: "Images/ACNH_VillagerPhotos/Chai.png"},
        {src: "Images/ACNH_VillagerPhotos/Chelsea.png"},
        {src: "Images/ACNH_VillagerPhotos/Etoile.png"},
        {src: "Images/ACNH_VillagerPhotos/Marty.png"},
        {src: "Images/ACNH_VillagerPhotos/Rilla.png"},
        {src: "Images/ACNH_VillagerPhotos/Toby.png"}
    ];  

    var arrayLength = imageArray.length;  
    var newArray = [];  

    for (var i = 0; i < arrayLength; i++)   
       {  
            newArray[i] = new Image();  
            newArray[i].src = imageArray[i].src; 
        }  

    function getRandomNum()   
    {  
        // generate and return a random number for the image to be displayed   
        imgNo = Math.floor(Math.random() * arrayLength);  
        return newArray[imgNo];  
    }
    
    var newImage = getRandomNum(0, newArray.length - 1);

    // remove the previous images  
    var images = document.getElementsByTagName('img');  
    var l = images.length;  
    for (var p = 0; p < l; p++) {  
        images[0].parentNode.removeChild(images[0]);  
    }  

    // display the new random image    
    document.getElementById("randomImg").append(newImage);  
} 









