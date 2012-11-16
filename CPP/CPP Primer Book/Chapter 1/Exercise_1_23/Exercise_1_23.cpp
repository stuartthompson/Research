/*
 * Exercise_1_23
 *
 * Reads several transactions for the same ISBN then outputs their sum.
 *
 * Created on: May 5, 2012
 * Author: Stuart Thompson
 */

#include <iostream>
#include "Sales_item.h"

/**
 * Program entry-point.
 */
int main() {
	std::cout << "Enter several book transactions (ISBN quantity price):" << std::endl;

	Sales_item input, total;

	while (std::cin >> input) {
		total = total + input;
	}

	std::cout << total;

	return 0;
}
