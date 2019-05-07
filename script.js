

let eventType = window.prompt("What type of event are you going to?");
let tempFahr = window.prompt("What is will the temperature be?");


if (eventType=='casual') // casual event
{
    if (tempFahr < 54) // temp less than 54
    {
        let result = 'Since it is ' + tempFahr + ' and you are going to a ' + eventType + ' event, you should wear something comfy and a coat';
    } 
    else if (54 < tempFahr < 70) // temp between 54 and 70
    {
        let result = 'Since it is ' + tempFahr + ' and you are going to a ' + eventType + ' event, you should wear something comfy and a jacket';
    }

    else // temp more than 70
    {
        let result = 'Since it is ' + tempFahr + ' and you are going to a ' + eventType + ' event, you should wear something comfy and no jacket';
    }
}

else if (eventType=='semi-formal') // semi-formal event
{
    if (tempFahr < 54) // temp less than 54
    {
        let result = 'Since it is ' + tempFahr + ' and you are going to a ' + eventType + ' event, you should wear a polo and a coat';
    }

    if (54 < tempFahr < 70) // temp between 54 and 70
    {
        let result = 'Since it is ' + tempFahr + ' and you are going to a ' + eventType + ' event, you should wear a polo and a jacket';
    }

    else  // temp more than 70
    {
        let result = 'Since it is ' + tempFahr + ' and you are going to a ' + eventType + ' event, you should wear a polo and no jacket';
    }
}

else (eventType=='formal') // formal event
{
    if (tempFahr < 54) // temp less than 54
    {
        let result = 'Since it is ' + tempFahr + ' and you are going to a ' + eventType + ' event, you should wear a suit and a coat';
    }

    if (54 < tempFahr < 70) // temp between 54 and 70
    {
        let result = 'Since it is ' + tempFahr + ' and you are going to a ' + eventType + ' event, you should wear a suit and a jacket';
    }

    else  // temp more than 70
    {
        let result = 'Since it is ' + tempFahr + ' and you are going to a ' + eventType + ' event, you should wear a suit and no jacket';
    }
}

    console.log(result);
