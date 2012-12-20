/*
 * Exercise_1_22
 *
 * Reads to sales_item objects that have the same ISBN and produces their sum.
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
	Sales_item book1, book2;

	std::cout << "Enter two books with the same ISBN (ISBN quantity price):" << std::endl;

	std::cin >> book1 >> book2;

	// Verify that the books have the same ISBN
	if (!book1.same_isbn(book2)) {
		std::cerr << "ERROR: Both books must have the same ISBN.";
		return -1;
	}

	std::cout << book1 + book2;

	return 0;
}
