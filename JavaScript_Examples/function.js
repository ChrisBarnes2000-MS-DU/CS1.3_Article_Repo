// first we must use the declration word function then provide a name and in the prothesis provide a set of parameters(params) we want to use.
function sayMyFriendsName(friendsName) {
    // Now we can use the variables / params we passed through, but only while code is executing this function
    console.log(friendsName)
    console.log("Your friend\'s name is:", friendsName)
}
// Because a function has to start with an { we can tell when it's over after we see it's respective }

// Next we must call the function we just made and pass it a value for its first param.
sayMyFriendsName("Barnes")

// Alternatively we can call the same function after creating a value and then passing it through
person_name = "charles"

console.log(person_name)
sayMyFriendsName(person_name)
// notice that if we tried to print barnes again we would have to retype it out or repass it through as we didn't make it into a variable
