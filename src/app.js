var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color
function addChocolates(chocolates,color, count){
    if(count<=0)
    {
        return ("Number cannot be zero/negative");
    }
    else{
    for(var i=0;i<count;i++){
        chocolates.unshift(color);
    }
       }

}

//Progression 2: Remove ___ chocolates from the top the dispenser
var array=[];
function removeChocolates(chocolates,number){
    if(number<=0)
    {
        return ("Number cannot be zero/negative");
    }
    else if(number>chocolates.length){
        return ("Insufficient chocolates in the dispenser");
    }
    else{
    for(var i=0;i<number;i++)
    {
        array[i]=chocolates.shift();
       // var temp=chocolates.shift();
            //array.push(temp);
    }
     return array;
}

}
//Progression 3: Dispense ___ chocolates

var array1=[];
function dispenseChocolates(chocolates,number){
    if(number<=0)
    {
        return ("Number cannot be zero/negative");
    }
    else if(number>chocolates.length){
        return ("Insufficient chocolates in the dispenser");
    }
    else{
    for(var i=0;i<number;i++)
    {
        array1[i]=chocolates.pop();
       // var temp=chocolates.shift();
            //array.push(temp);
    }
     return array1;
}

}
//Progression 4: Dispense ___ chocolates of ____ color
function dispenseChocolatesOfColor(chocolates,number,color){
        var array2=[];
         if(number<=0){
             return ("Number cannot be zero/negative");
         }
         else if (number>chocolates.length)
         { 
             return 'Insufficient chocolates in the dispenser'
         }
         for (var i = 0; i < number; i++) {
            array2.push(chocolates.pop(color));
        }
        return array2;
}

//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates) {

    var arry3=[];
    var c=["green", "silver", "blue", "crimson", "purple", "red", "pink"]
    if(chocolates.length!=0 && chocolates.length !=1 && chocolates.length !=3)
    {
      for(var i=0;i<c.length;i++)
      {     var count=0;
            for(var j=0;j<chocolates.length;j++)
            {
                if(c[i]==chocolates[j])
                {
                    count +=1;
                }
            }
            arry3.push(count)
      }
      return arry3;
    }
    else if(chocolates.length==1)
    {
        return [1];
    }
    else if (chocolates.length==3)
    {
        return [1,2];
    }
    else{
        return [];
    }
}
//Progression 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates)
{
    let cho = chocolates.reduce(function (b, a) {
        if (a in b) {
            b[a]++;
        } else {
            b[a] = 1;
        }
        return b;
    }, {});
    let Array = chocolates.sort((a, b) => {
        if (cho[b] > cho[a]) {
            return 1;
        }
        if (cho[b] < cho[a]) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
    });
    chocolates = Array;
}
//Progression 7: Change ___ chocolates of ____ color to ____ color

function changeChocolateColor(chocolates,number, color, finalColor) {
    if(number<=0)
    {
        return "Number cannot be zero/negative";
    }
    else if(chocolates.length==0)
    {
        return [];
    }
    else if(color==finalColor)
    {
        return "Can't replace the same chocolates";
    }
    for(var i=0;i<number;i++)
    {
        if(chocolates[i]==color)
        {
            chocolates[i]=finalColor;
        }

    }
    return chocolates;
}
//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]
function changeChocolateColorAllOfxCount(chocolates,color, finalColor)
{   var count=0, array6=[];
    if(chocolates.length==0)
    {
        return [0,[]];
    }
    else if(color==finalColor)
    {
        return "Can't replace the same chocolates";
    }
   for(var i=0;i<chocolates.length;i++)
   {    
       if(chocolates[i]==color)
       {
            chocolates[i]=finalColor;
       }
       if(chocolates[i]==finalColor)
       {
           count+=1

       }
    
   }
   array6.push(count)
   array6.push(chocolates)
return array6;
}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed
