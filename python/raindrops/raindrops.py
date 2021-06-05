def convert(number):
    number = int(number)
    string = ''
    if (number % 3 == 0):
        string += 'Pling'
    if (number % 5 == 0):
        string += 'Plang'
    if (number % 7 == 0):
        string += 'Plong'

    return string or str(number)
