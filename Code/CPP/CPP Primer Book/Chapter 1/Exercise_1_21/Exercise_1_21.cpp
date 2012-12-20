/*
 * Exercise_1_21
 *
 * Iterates through a set of book sales transactions, reading each transaction, and writing the transaction
 * to the standard output.
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
	std::cout << "Enter some book transaction data (ISBN quantity price):" << std::endl;

	Sales_item book;
	while(std::cin >> book) {
		std::cout << book;
	}

	return 0;
}
