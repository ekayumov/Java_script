const user = {
 age: 18,
 paid: true,
 blocked: false,
 badUsername: false,
 isAdmin: false
}

function valid_tern(user) {
  const age = user.age >= 18 && user.age<= 35
  const paid = user.paid
  const blocked = user.blocked
  const badUsername = user.badUsername
  const isAdmin = user.isAdmin
  a = (isAdmin && age) || (age && paid && !blocked && !badUsername) ? true : false
  return a
}
