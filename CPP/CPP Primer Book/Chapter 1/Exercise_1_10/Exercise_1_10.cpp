/*
 * Exercise_1_10
 *
 * Uses a for loop to sum the numbers from 50 to 100.
 *
 * Created on: May 2, 2012
 * Author: Stuart Thompson
 */

#include <iostream>

/**
 * Program entry point.
 */
int main() {
	int sum = 0;
	for (int i = 50; i <=100; i++) {
		sum += i;
	}
	std::cout << "(for) The sum of the numbers 50 to 100 is " << sum;

	std::cout << std::endl; // Output a newline

	sum = 0;
	int val = 50;
	while (val < 100) {
		sum += val;
		val++;
	}
	std::cout << "(while) The sum of the numbers 50 to 100 is " << sum;
}
