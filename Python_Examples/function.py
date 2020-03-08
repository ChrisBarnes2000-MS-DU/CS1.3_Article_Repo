# first we must use the declration word def then provide a name and in the prothesis provide a set of parameters(params) we want to use.
def say_my_name(name):
    # Now we can use the variables/params we passed through, but only while code is executing this function
    print(name)
    print("Your name is:", name)
    # after this ^ line this function is over, as comments are ignored


# Next we must call the function we just made and pass it a value for its first param.
say_my_name("Chris")

# Alternatively we can call the same function after creating a value and then passing it through
person_name = "charles"

print(person_name)
say_my_name(person_name)
# notice that if we tried to print chris again we would have to retype it out or repass it through as we didn't make it into a variable
