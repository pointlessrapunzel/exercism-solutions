class Matrix:
    def __init__(self, matrix_string):
        self.rows = [[*map(int, nums.split())]
                     for nums in matrix_string.splitlines()]

    def row(self, index):
        return self.rows[index - 1]

    def column(self, index):
        return [self.rows[i][index - 1] for i in range(len(self.rows))]
