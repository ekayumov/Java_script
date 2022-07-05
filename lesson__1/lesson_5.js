let user = {
 age: 18,
 paid: true,
 blocked: false,
 badUsername: false,
 isAdmin: false
}

function valid(user) {
  if (user['age']>= 18 && user['age']<= 35) {
    if (user['isAdmin'] == true ){true}
    else if (user['paid']== true, user['blocked']== false, user['badUsername']== false) {true}
    else {false}
  } else {false}
}
