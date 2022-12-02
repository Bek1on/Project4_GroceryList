function initialize()
{
    groceryDisplay = document.getElementById("grocery");

    inputContainer = document.getElementById("productinput");

    moveContainer = document.getElementById("move");

    groceryList = [];

}


const displayList = () => {

    groceryDisplay.innerHTML = "";

    for(i = 0; i < groceryList.length; i++)
    {
        let arrayValue = groceryList[i];
        groceryDisplay.innerHTML += (i+1) + `: ${arrayValue}<br />`;
    }

}

const itemUp = document.getElementById("uppity");
itemUp.addEventListener('click',moveItemUp);

const itemDown = document.getElementById("downer");
itemDown.addEventListener('click',moveItemDown);



function addItem()
{
    let newItemIndex = -1;

    (groceryList.length === 0)?(newItemIndex = 0):(newItemIndex = groceryList.length);

    input = inputContainer.produce.value;

    inputContainer.produce.value = "";

    groceryList[newItemIndex] = input;

    displayList();
}




function moveItemUp()
{
    currentItemIndex = (moveContainer.mover.value - 1);


    if(groceryList.length > 1 && moveContainer.mover.value > 1)
    {
        let tempVar = groceryList[currentItemIndex - 1];

        groceryList[currentItemIndex - 1] = groceryList[currentItemIndex];

        groceryList[currentItemIndex] = tempVar;

        moveContainer.mover.value--;
    }


    displayList();

}

function moveItemDown()
{
    currentItemIndex = (moveContainer.mover.value - 1);

    if(groceryList.length > 1 && moveContainer.mover.value < (groceryList.length))
    {
        let temporary = groceryList[currentItemIndex + 1];

        groceryList[currentItemIndex + 1] = groceryList[currentItemIndex];
        
        groceryList[currentItemIndex] = temporary;

        moveContainer.mover.value++;
    }

    

    displayList();
}

function eliminateItem()
{
    currentItemIndex = (moveContainer.mover.value - 1);


    groceryList.splice(currentItemIndex,1);

    
    displayList();

}






