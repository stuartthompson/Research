/*
 * Exercise_1_5
 *
 * Takes two numbers as input and output their sum.
 * Does so using output statements on separate lines.
 *
 * Created on: May 2, 2012
 * Author: Stuart Thompson
 */

#include <iostream>

/**
 * Program entry-point.
 */
int main() {
	std::cout << "Enter two numbers:" << std::endl;
	int v1, v2;
	std::cin >> v1 >> v2;
	std::cout << "The sum of ";
	std::cout << v1;
	std::cout << " and ";
	std::cout << v2;
	std::cout << " is ";
	std::cout << v1 + v2 << std::endl;
	return 0;
}
