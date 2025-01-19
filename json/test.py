import json
import sys

userindex = int(sys.argv[1])
zusageIndex = int(sys.argv[2])

if zusageIndex == 1:
    Zusage = True
else:
    Zusage = False

with open('wedding.json') as file:
    d = json.load(file)
    d[userindex]['Zusage'] = Zusage
    with open('wedding.json', 'w') as savefile:
        json.dump(d, savefile)
