#include <iostream>
#include "Location3D.h"

using namespace std;

int main() {
	Location3D* _loc3d = new Location3D(2,5,7);

	cout << "Location coords: " << _loc3d->GetX() << "," << _loc3d->GetY() << "," << _loc3d->GetZ() << endl;
	return 0;
}