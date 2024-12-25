// Write a menu driven program to calculate the area of a given object.

import readlineSync from "readline-sync";

class Area {
    circle(radius) {
        return Math.PI * radius * radius;
    }

    square(side) {
        return side * side;
    }

    rectangle(length, width) {
        return length * width;
    }

    triangle(base, height) {
        return 0.5 * base * height;
    }
}

class MyClass extends Area {
    main() {
        let choice;

        do {
            console.log(
                "\n" + "1. Circle" +
                "\n" + "2. Square" +
                "\n" + "3. Rectangle" +
                "\n" + "4. Triangle" +
                "\n" + "5. Exit"
            );

            choice = parseInt(readlineSync.question("\n" + "Enter your choice (1-5): "));

            switch (choice) {
                case 1:
                    this.circleArea();
                    break;
                case 2:
                    this.squareArea();
                    break;
                case 3:
                    this.rectangleArea();
                    break;
                case 4:
                    this.triangleArea();
                    break;
                case 5:
                    console.log("\n" + "Exiting program" + "\n");
                    break;
                default:
                    console.log("\n" + "Invalid choice. Please try again.");
            }
        } while (choice !== 5);
    }

    circleArea() {
        let radius = parseFloat(readlineSync.question("\n" + "Enter the radius of the circle: "));
        let area = this.circle(radius);
        console.log(`\nArea of the circle: ${area.toFixed(2)}\n`);
    }

    squareArea() {
        let side = parseFloat(readlineSync.question("\nEnter the side of the square: "));
        let area = this.square(side);
        console.log(`\nArea of the square: ${area.toFixed(2)}\n`);
    }

    rectangleArea() {
        let length = parseFloat(readlineSync.question("\nEnter the length of the rectangle: "));
        let width = parseFloat(readlineSync.question("Enter the width of the rectangle: "));
        let area = this.rectangle(length, width);
        console.log(`\nArea of the rectangle: ${area.toFixed(2)}\n`);
    }

    triangleArea() {
        let base = parseFloat(readlineSync.question("\nEnter the base of the triangle: "));
        let height = parseFloat(readlineSync.question("Enter the height of the triangle: "));
        let area = this.triangle(base, height);
        console.log(`\nArea of the triangle: ${area.toFixed(2)}\n`);
    }
}

const myObject = new MyClass();
myObject.main();