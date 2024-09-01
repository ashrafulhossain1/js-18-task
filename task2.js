// BMI Health category

var weight = 54;
var height =  1.6764;

var BMI = weight / (height ** 2);


// // NORMAL IF ELSE condition

if(BMI < 18.5){
    console.log('You are underweight');
}
else if(BMI >= 18.5 && BMI <= 24.9){
    console.log('you are normal')
}
else if(BMI >= 25 && BMI <= 29.9){
    console.log('You are Over Weight')
}
else{
    console.log('your are obese')
}

var BMI = 15;

// NESTED IF ELSE

if (BMI < 18.5){
    console.log('you are underweight, gosto khaw ojon baraw')
    console.log(BMI)
}
else{
    if(BMI >= 18.5 && BMI <= 24.9){
        console.log('You are normal')
        console.log(BMI)
    }
    else{
        if(BMI >= 25 && BMI <= 29.9){
            console.log('you are overweight')
            console.log(BMI)
        }
        else{
            console.log('you are obese')
            console.log(BMI)
        }
    }
}