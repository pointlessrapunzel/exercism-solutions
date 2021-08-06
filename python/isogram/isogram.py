def is_isogram(string):
    memo = {}
    for char in string:
        if char.isalpha():
            if char.lower() in memo:
                return False
            else:
                memo[char.lower()] = 1

    return True
