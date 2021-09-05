public class Lasagna {
    public int expectedMinutesInOven() {
        return 40;
    }

    public int remainingMinutesInOven(int minutesInOven) {
        return new Lasagna().expectedMinutesInOven() - minutesInOven;
    }

    /**
     * 
     * @param layers
     * @return
     */
    public int preparationTimeInMinutes(int layers) {
        return layers * 2;
    }

    public int totalTimeInMinutes(int layers, int minutesInOven) {
        return minutesInOven + new Lasagna().preparationTimeInMinutes(layers);
    }
}
