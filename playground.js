const jwt = require('jsonwebtoken');

const user = {

    id:"20",
    name:"Ryan",
    username:"ryansub13@gmail.com",
    password:"123457"

}

const secret = "amidojwajdmoiadoiajoamdoam";

function createToken(){
    const token = jwt.sign({id:user.id, username:user.username},secret, {expiresIn:60} ) 
    console.log(token);
}


function testToken(token){
try{
    const validData = jwt.verify(token,secret)
    console.log(validData);

} catch(error){
    console.log(error)
}
}

testToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlcm5hbWUiOiJyeWFuc3ViMTNAZ21haWwuY29tIiwiaWF0IjoxNjUyOTc0ODg1LCJleHAiOjE2NTI5NzQ5NDV9.VYVzQNQ1yAXy6nu44GSZmOhagsaDEHZSTTyyOxpNwrQ");


