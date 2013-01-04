#pragma once

namespace UsefulLib 
{
	class Calc
	{
	public:
		Calc(void);
		~Calc(void);

		static __declspec(dllexport) int AddNumbers(int a, int b);
	};
}