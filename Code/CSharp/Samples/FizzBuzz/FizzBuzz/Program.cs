// Copyright (C) 2009 - 2012  Stuart Thompson 
// http://www.stuartthompson.net

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace FizzBuzz
{

    /// <summary>
    /// This simple console program demonstrates one possible solution to the 
    /// infamous "FizzBuzz" interview question.
    /// </summary>
    public class Program
    {

        static void Main(string[] args)
        {
            StringBuilder sb = new StringBuilder();

            IEnumerable<string> fb =
                Enumerable.Range(1, 100).Select(
                    num =>
                        num % 5 == 0 && num % 3 == 0 ?
                            "FizzBuzz" :
                        num % 3 == 0 ?
                            "Fizz" :
                        num % 5 == 0 ?
                            "Buzz" :
                        num.ToString());

            foreach (string str in fb)
                sb.Append(str);

            Console.WriteLine(sb.ToString());

            Console.ReadLine();
        }

    }

}