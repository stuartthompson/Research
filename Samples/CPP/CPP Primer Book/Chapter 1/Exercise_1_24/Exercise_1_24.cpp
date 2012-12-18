/*
 * Exercise_1_24
 *
 * Reads several transactions. Keeps a count of how many transactions in a row have had the same ISBN.
 * Groups consecutive transactions with the same ISBN together.
 *
 * Created on: May 5, 2012
 * Author: Stuart Thompson
 */

#include <iostream>
#include <string>
#include "Sales_item.h"

/**
 * Program entry-point.
 */
int main() {
	std::cout << "Enter several transactions (ISBN quantity price):" << std::endl;

	int transactionsInGroup = 0;
	Sales_item book, total;

	// Initialize with the first book
	std::cin >> total;
	transactionsInGroup++;

	while (std::cin >> book) {
		if (book.same_isbn(total)) {
			// Same ISBN so add to the total
			transactionsInGroup++;
			total = total + book;
		}
		else {
			// New ISBN (print out the details of the previous group)
			if (transactionsInGroup == 1) {
				std::cout << "There was 1 book in that group." << std::endl;
			}
			else {
				std::cout << "There were " << transactionsInGroup << " books in that group." << std::endl;
			}
			std::cout << "Total: " << total << std::endl;
			transactionsInGroup = 1; // Reset transaction count
			total = book; // Store the current book as the start of the new group
		}
	}

	return 0;
}
