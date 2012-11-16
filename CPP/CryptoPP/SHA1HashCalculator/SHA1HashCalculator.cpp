/*
	Calculates the SHA1 hash for a file.
*/

#include <iostream>
#include <boost/filesystem.hpp>
#include <cryptopp/sha.h>
#include <cryptopp/hex.h>
#include <cryptopp/files.h>

#include "SHA1HashCalculator.hpp"

using namespace std;
using namespace boost::filesystem;

/*
	Calculates the SHA1 hash for a file.
	@filePath The path to the file to hash.
*/
string SHA1HashCalculator::CalculateSHA1HashForFile(const path &filePath) {
	string fileHash;
	CryptoPP::SHA1 hash;
	CryptoPP::FileSource(
		filePath.string().c_str(), 
		true,
		new CryptoPP::HashFilter(
			hash, 
			new CryptoPP::HexEncoder(
				new CryptoPP::StringSink(fileHash), 
				true)));
	return fileHash;
}