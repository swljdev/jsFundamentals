/*
    a falsy value is a value that is consderered false when encountered in a boolean context
    1. false
    2. 0
    3. "", '', 
    4. null
    5. undefined
    6. NaN (not a number)
*/

 let isOn = true
 if (isOn == true) {
    console.log("The Light Is On!")
 }


 if (isOn){
    console.log("The Light Is Still On!")
 }

 isOn = "false"

 if (isON){
     console.llog("The Light Is Off")
 }

 let weather = 60;

 if (weather < 50){
     console.log("Wear A Jacket");

}