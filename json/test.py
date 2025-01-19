import urllib.request, json 
import sys

with urllib.request.urlopen("https://jsonhost.com/json/f7bde75a58266a788c1bdef99fd65c39") as url:
    data = json.load(url)
    print(data)

'''
userindex = int(sys.argv[1])
zusageIndex = int(sys.argv[2])

if zusageIndex == 1:
    Zusage = True
else:
    Zusage = False

with open('https://jsonhost.com/json/f7bde75a58266a788c1bdef99fd65c39') as file:
    d = json.load(file)
    d[userindex]['Zusage'] = Zusage
    with open('https://jsonhost.com/json/f7bde75a58266a788c1bdef99fd65c39', 'w') as savefile:
        json.dump(d, savefile)
'''
