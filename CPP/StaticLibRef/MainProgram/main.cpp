#include <iostream>

#include "Calc.h"

using namespace std;

int main() 
{
	int a = 5;
	int b = 3;

	cout << "Static Lib Ref Research Project" << endl;
	cout << "===============================" << endl;

	cout << "5 + 3 is: " << UsefulLib::Calc::AddNumbers(a, b) << endl;

	return 0;
}