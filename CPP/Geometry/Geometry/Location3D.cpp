#include "Location3D.h"

Location3D::Location3D(void) {
	Initialize(0, 0, 0);
}

Location3D::Location3D(int x, int y, int z) {
	Initialize(x, y, z);
}

Location3D::~Location3D(void) {
}

void Location3D::Initialize(int x, int y, int z) {
	_x = x;
	_y = y;
	_z = z;
}

int Location3D::GetX() {
	return _x;
}

int Location3D::GetY() {
	return _y;
}

int Location3D::GetZ() {
	return _z;
}