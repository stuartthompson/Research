/*
	Test application for the SHA1 hash calculator class.
*/

#include <iostream>
#include <boost/filesystem.hpp>
#include "SHA1HashCalculator.hpp"

using namespace std;

int main(int argc, char* argv[]) {
	if (argc != 2) {
		cerr << "Usage: sha1test [filename]";
		return -1;
	}
	
	string hash("");
	path file(argv[1]);
	SHA1HashCalculator hashCalc;
	hash = hashCalc.CalculateSHA1HashForFile(file);
	cout << "The SHA1 hash for file: " << argv[1] << " is:" << endl;
	cout << hash << endl;
	return 0;
}