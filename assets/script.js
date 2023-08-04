var topic = ["HTML", "CSS", "Git", "JavaScript"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

var toStudy = topic[(getRandomInt(topic.length))];

var t = document.getElementById("study-topic").innerHTML += toStudy;

/*

if (toStudy === topic[0]){
    console.log("Let's Study HTML!");
}

else if (toStudy === topic[1]){
    console.log("Let's Study CSS!");
}

else if (toStudy === topic[2]){
    console.log("Let's Study Git!");
}

else if (toStudy === topic[3]){
    console.log("Let's Study JavaScript!");
}

else {
    console.log("Please try again.");
}

*/

switch (toStudy){
    case(topic[0]):
        console.log("Let's Study HTML!")
        break;
    case(topic[1]):
        console.log("Let's Study CSS!")
        break;
    case(topic[2]):
        console.log("Let's Study Git!")
        break;
    case(topic[3]):
        console.log("Let's Study JavaScript!")
        break;
    default:
        console.log("Try again.")
        break;
}
