/*
 * Exercise_1_11
 *
 * Outputs the numbers from 10 down to 0 first using a while loop and then using a for loop.
 *
 * Created on: May 3, 2012
 * Author: Stuart Thompson
 */

#include <iostream>

/**
 * Program entry-point.
 */
int main() {
	std::cout << "(while) Numbers from 10 down to 0 are:" << std::endl;
	int val = 10;
	while (val >= 0) {
		std::cout << val << std::endl; // Print out the value
		val--; // Decrement the value
	}

	std::cout << std::endl;

	std::cout << "(for) Numbers from 10 down to 0 are:" << std::endl;
	for (int i = 10; i >= 0; i--) {
		std::cout << i << std::endl; // Print out the value
	}
}
