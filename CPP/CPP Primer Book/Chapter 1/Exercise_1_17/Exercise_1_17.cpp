/*
 * Exercise_1_17
 *
 * Asks the user for a series of numbers then prints out which of the numbers are negative.
 *
 * Created on: May 3, 2012
 * Author: Stuart Thompson
 */

#include <iostream>

/**
 * Program entry-point.
 */
int main() {
	std::cout << "Please enter a series of numbers:" << std::endl;
	int value;
	while (std::cin >> value) {
		if (value < 0)
			std::cout << value << " ";
	}
	std::cout << "are the negative numbers.";
}
