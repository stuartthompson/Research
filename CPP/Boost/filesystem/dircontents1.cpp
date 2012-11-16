#include <iostream>

#include "boost/filesystem.hpp"
#include "boost/regex.hpp"

using namespace boost::filesystem; 
using std::cout;

int main() {
	path current_dir(".");
	boost::regex pattern("*.cpp");

	for (recursive_directory_iterator iter(current_dir), end;
		 iter != end;
		 ++iter) {
		cout << iter->path() << "\n";
	}
}
