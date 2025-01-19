import json
import sys

userindex = int(sys.argv[1])
zusageIndex = int(sys.argv[2])

if zusageIndex == 1:
    Zusage = True
else:
    Zusage = False

with open('https://jsonhost.com/json/2b188229a1bc06a4d9e6e418afe6d980') as file:
    d = json.load(file)
    d[userindex]['Zusage'] = Zusage
    with open('https://jsonhost.com/json/2b188229a1bc06a4d9e6e418afe6d980', 'w') as savefile:
        json.dump(d, savefile)
