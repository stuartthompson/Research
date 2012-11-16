/*
	Calculates SHA1 hashes for files.
*/

#ifndef SHA1_HASH_CALCULATOR_HPP
#define SHA1_HASH_CALCULATOR_HPP

#include <iostream>
#include <boost/filesystem.hpp>
#include <cryptopp/sha.h>
#include <cryptopp/hex.h>
#include <cryptopp/files.h>

using namespace std;
using namespace boost::filesystem;

class SHA1HashCalculator {
public:
	/*
		Calculates the SHA1 hash for a file.
		@filePath The path to the file to hash.
	*/
	string CalculateSHA1HashForFile(const path &filePath);
};

#endif /* SHA1_HASH_CALCULATOR_HPP */