#pragma once
class Location3D
{
public:
	Location3D(void);
    Location3D(int x, int y, int z);
	~Location3D(void);

	int GetX();
	void SetX(int x);
	int GetY();
	void SetY(int y);
	int GetZ();
	void SetZ(int z);

private: 
	void Initialize(int x, int y, int z);

	int _x;
	int _y;
	int _z;
};