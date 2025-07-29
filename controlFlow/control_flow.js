let userRole = 'admin'
let accessLevel;

if(userRole == 'admin'){
    accessLevel = 'Full access'
} else if( userRole == 'manager'){
    accessLevel =  'limite access'
} else {
    accessLevel = 'no access'
}

console.log('Acess level', accessLevel);

let isLoggedIn = true;
let userMessage;

if(isLoggedIn){if(userRole == 'admin'){
userMessage = 'welcome, admin'
} else {
    userMessage = 'welcome user'
}} else {
    userMessage = 'please log in'
}

let usertype = 'subscriber'
let userCategory;

switch(usertype){
    case 'admin': userCategory = 'Administrator'
     break;
     case 'manage':userCategory = 'Manager'
     break
     case 'subscriber': userCategory = 'Subscriber'
     break
     default: userCategory = 'Unknown'
}

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? 'Authenticated': 'Not authenticated'