from turtle import Turtle


english = False
french = False
German = True


if english and french:
  print("You are bilingual")
elif english: 
  print("You are anglophone")
elif  french:
  print("You are francophone")
else:
  print("You are neither anglophone nor francophone")

print(not(German))
