# Definitions :

Scope in One Sentence:
"Variables live in rooms; inner rooms can see outer rooms, but not vice versa."

Lexical Scope in One Sentence:
"JavaScript decides variable access by where you nest your code, not by how you run it."

Closure in One Sentence:
"A function that remembers where it was born."

LHS/RHS Mnemonic:
LHS = Letting Her Store (putting values in)
RHS = Retrieving Her Stuff (getting values out)

# Rules to Remember:

1. Scope Chain: Inner functions can access outer variables, but not vice versa
2. Write-time, not Runtime: JavaScript determines variable access when you write code, not when it runs
3. One-way Street: You can look outward from inner scope, but can't look inward from outer scope
4. Sibling Isolation: Functions at same level can't access each other's scopes

"JavaScript has lexical scope. That means when you write a function inside another function, the inner function can always access the outer function's variables, no matter where you call it from. It's like your childhood home - you always remember it!"

Acronym: L.E.X.I.C.A.L
L - Location in code matters
E - Each function creates scope
X - eXternal access prohibited
I - Inner can see Out
C - Captures variables (closures)
A - At write-time fixed
L - Looks outward, never inward
