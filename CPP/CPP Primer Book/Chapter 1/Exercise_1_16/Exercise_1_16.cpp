/*
 * Exercise_1_16
 *
 * Prints the larger of two inputs supplied by the user.
 *
 * Created on: May 3, 2012
 * Author: Stuart Thompson
 */

#include <iostream>

/**
 * Program entry-point.
 */
int main() {
	int v1, v2;
	std::cout << "Please enter two numbers: " << std::endl;
	std::cin >> v1 >> v2;
	if (v1 > v2) {
		std::cout << "The larger number is: " << v1;
	}
	else if (v1 < v2) {
		std::cout << "The larger number is: " << v2;
	}
	else {
		std::cout << "The numbers are the same. Neither is larger than the other.";
	}
}
