/*
 * Exercise_1_18
 *
 * Accepts two numbers and outputs each number in the range specified.
 * Constrains the range to a maximum of 10.
 * Always picks the smaller of the two numbers as the lower range value.
 *
 * Created on: May 5, 2012
 * Author: Stuart Thompson
 */

#include <iostream>

/**
 * Program entry-point.
 */
int main() {
	std::cout << "Please enter two numbers: " << std::endl;

	int v1, v2;

	std::cin >> v1 >> v2;

	int lowerBound, upperBound;
	if (v1 > v2) {
		lowerBound = v2;
		upperBound = v1;
	}
	else {
		lowerBound = v1;
		upperBound = v2;
	}


	if (upperBound - lowerBound > 10) {
		upperBound = lowerBound + 10;
		std::cout << "Warning: Range is larger than 10. Constraining to first 10." << std::endl;
	}

	std::cout << "The numbers between " << v1 << " and " << v2 << " are:" << std::endl;
	for (int i = lowerBound + 1; i < upperBound; i++) {
		std::cout << i << " ";
	}

	return 0;
}
