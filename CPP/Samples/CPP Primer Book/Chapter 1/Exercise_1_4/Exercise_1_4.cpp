/*
 * Exercise_1_4
 *
 * Takes two numbers as input and outputs the result of multiplying them.
 *
 * Created on: May 2, 2012
 * Author: Stuart Thompson
 */

#include <iostream>

/**
 * Program entry point.
 */
int main() {
	std::cout << "Enter two numbers:" << std::endl;
	int v1, v2;
	std::cin >> v1 >> v2;
	std::cout << "The product of " << v1 << " and " << v2 << " is " << v1 * v2 << std::endl;
	return 0;
}
