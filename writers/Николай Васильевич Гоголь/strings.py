from os import listdir

for file in listdir():
    with open(file, "w"):
        text = file.read()
        file.write(text.replace("\n", " ").replace("  ", "\n"))