/*
	DirContents2.cpp

	Enumerates the contents of a directory.
	Uses a try catch block to catch any unexpected exceptions.
	Takes the path to enumerate as the first and only argument.
*/

#include <iostream>
#include "boost/filesystem.hpp"
#include "boost/regex.hpp"

using namespace boost::filesystem;
using std::cout;
using std::cerr;
using std::endl;
using std::string;
using std::vector;

int main(int argc, char* argv[]) {
	// Validate arg count
	assert(argc == 2); 

	path path (argv[1]);
	cout << "Enumerating contents of: " << path << endl;
	
	try {
		if (!exists(path)) {
			cerr << "Path: " << path << " does not exist." << endl;
			return -1;
		}
		if (!is_directory(path)) {
			cerr << "Path: " << path << " is not a directory." << endl;
			return -1;
		}

		vector<string> headerFilePaths;
		vector<string> implFilePaths;

		// Iterate the contents and print out the name of files
		for (recursive_directory_iterator iter(path), end;
			iter != end; ++iter) {
			if (is_regular_file(iter->path())) {
				string ext = iter->path().extension().string();
				if (ext == ".cpp")
					implFilePaths.push_back(iter->path().string());
				if (ext == ".hpp" || ext == ".h")
					headerFilePaths.push_back(iter->path().string());
			}
		}

		cout << "Header files: " << endl;
		for (vector<string>::size_type i = 0; 
			 i < headerFilePaths.size();
			 i++) {
			cout << headerFilePaths[i] << endl;	
		}
		cout << endl;

		cout << "Implementation files: " << endl;
		for (vector<string>::size_type i = 0;
			 i < implFilePaths.size();
			 i++) {
			cout << implFilePaths[i] << endl;
		}
	}
	catch (const filesystem_error& ex) {
		cerr << ex.what() << endl;
		return -1;
	}

	return 0;
}
