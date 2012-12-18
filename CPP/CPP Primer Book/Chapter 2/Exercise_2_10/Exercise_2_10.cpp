/*
 * Exercise_2_10
 *
 * Initially: Uses escape sequences to write the string 2M.
 * Secondly: Uses escape sequences to write 2, then a tab, then the M.
 *
 * Created on: May 5, 2012
 * Author: Stuart Thompson
 */

#include <iostream>

/**
 * Program entry-point.
 */
int main() {
	std::cout << "\062" << "\115" << std::endl;

	std::cout << "\062" << "\t" << "\115" << std::endl;

	return 0;
}
