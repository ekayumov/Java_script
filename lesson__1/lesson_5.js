const user = {
 age: 18,
 paid: true,
 blocked: false,
 badUsername: false,
 isAdmin: false
}

function valid(user) {
  if (user['age']>= 18 && user['age']<= 35) {
    if  (user.isAdmin) { return true}
    else if (user.paid, !user.blocked, !user.badUsername) { return true}
    else { return false}
  } else { return false}
}
