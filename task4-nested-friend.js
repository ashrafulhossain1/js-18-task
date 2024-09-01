// NESTED FRIEND
const myScore = 40;
const friendScore = 35;

if(myScore > 80){
  if(friendScore > 80) {
    console.log("Let's have lunch together, my friend")
  }else{
    if(friendScore >= 60 && friendScore < 80){
        console.log("Good Luck friend, better in next time")
    }else{
        if(friendScore >= 40 && friendScore < 60){
            console.log('I will not seen your message')
        }else{
            console.log('Tonight will block you')
        }
    }
  }
}


else{
    console.log('My heart is so broken so i will sleep now')
}