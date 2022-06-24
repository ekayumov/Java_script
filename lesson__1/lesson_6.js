let user = {
 age: 18,
 paid: true,
 blocked: false,
 badUsername: false,
 isAdmin: false
}

function valid_tern(user) {
  let age = user['age']>= 18 && user['age']<= 35
  let paid = user['paid'] == true
  let blocked = user['blocked']== false
  let badUsername = user['badUsername']== false
  let isAdmin = user['isAdmin'] == true
  a = (isAdmin && age) || (age && paid && blocked && badUsername) ? true : false
}
