class Greeter {

    String getGreeting() {
        return "Hello, World!";
    }

    public static void main(String[] args) {
        String greeting = new Greeter().getGreeting();
        System.out.println(greeting);
    }
}
