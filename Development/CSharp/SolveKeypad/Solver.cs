// Copyright (C) 2009 - 2011  Stuart Thompson 
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
using System.Linq;
using System.Text;

namespace SolveKeypad {

    /// <summary>
    /// Solves <see cref="Keypad"/> codes.
    /// </summary>
    public class Solver {

        #region Constructors

        /// <summary>
        /// Initializes a new instance of the <see cref="Solver"/> class.
        /// </summary>
        /// <param name="keypad">The keypad to solve.</param>
        public Solver(
            Keypad keypad) {
            _keypad = keypad;

            // Tumblers array stores the indices of the current tumbler positions
            _tumblers = new int[keypad.CodeLength];

            // Keep track of the number of codes tried
            _codesTried = 0;
        }

        #endregion


        #region Public Methods

        /// <summary>
        /// Attempts to solve the keypad.
        /// </summary>
        public void Solve() {

            // Initialize the tumblers to the first possible combination (no button can be used twice)
            for (int idx = 0; idx < _keypad.CodeLength; idx++)
                _tumblers[idx] = idx; // i.e. on code length of 4, init to 0,1,2,3
            
            bool solutionFound = false;
            string solution = null;

            // Calculate the number of possible solutions
            int rFac = 1;
            for (int reps = 1; reps <= (_keypad.Buttons.Count - _keypad.CodeLength); reps++)
                rFac *= reps;
            int nFac = rFac;
            for (int num = (_keypad.Buttons.Count - _keypad.CodeLength)+1; num <= _keypad.Buttons.Count; num++)
                nFac *= num;
            int possibleSolutions = nFac / rFac;
            Console.WriteLine(String.Format("There are {0} possible solutions.", possibleSolutions));

            // Look for the correct code
            while (!solutionFound) {
                string codeToTry = ConvertTumblersToCode();
                solutionFound = TryCode(codeToTry);
               
                if (solutionFound) {
                    solution = codeToTry;
                    break;
                }

                // Get next code
                if (MoveToNextValidCombination() == false)
                    break; // No more codes available
            }

            if (solutionFound) {
                Console.WriteLine();
                Console.WriteLine(String.Format("## SOLUTION FOUND after {0} tries! ##", _codesTried));
                Console.WriteLine(String.Format("The solution is: {0}", solution));
            }
            else
                Console.WriteLine("Something went wrong. No solution was found.");
        }

        #endregion


        #region Private Methods

        /// <summary>
        /// Advance the tumblers one position.
        /// </summary>
        /// <returns>
        /// <see langword="true"/> if the tumblers were advanced;
        /// <see langword="false"/> if there are no tumblers left to rotate.
        /// </returns>
        private bool AdvanceTumblers() {
            // Find the right-most rotatable tumbler
            int rotatableTumblerIndex = FindRightmostRotatableTumbler();

            // Are there any tumblers left to rotate?
            if (rotatableTumblerIndex == -1)
                return false; // No tumblers can be rotated; no more codes available

            // Rotate the tumbler and reset the tumblers to its right
            _tumblers[rotatableTumblerIndex]++;
            ResetTumblersFromIndex(rotatableTumblerIndex);

            // Indicate that a tumbler was advanced
            return true;
        }

        /// <summary>
        /// Converts the tumbler array (of indices) into the code they represent.
        /// </summary>
        /// <returns></returns>
        private string ConvertTumblersToCode() {
            StringBuilder codeBuilder = new StringBuilder();
            for (int idx = 0; idx < _tumblers.Length; idx++)
                codeBuilder.Append(_keypad.Buttons[_tumblers[idx]]);
            return codeBuilder.ToString();
        }

        /// <summary>
        /// Finds the right-most rotatable tumbler.
        /// </summary>
        /// <returns></returns>
        private int FindRightmostRotatableTumbler() {
            int maxPositionIndex = _keypad.Buttons.Count - 1;
            for (int idx = _tumblers.Length - 1; idx >= 0; idx--)
                if (_tumblers[idx] < maxPositionIndex)
                    return idx;

            return -1;
        }

        /// <summary>
        /// Moves the tumblers to the next valid combination.
        /// </summary>
        /// <returns>
        /// <see langword="true"/> if a new valid combination (code) was found; 
        /// <see langword="false"/> if there are no more codes available.
        /// </returns>
        private bool MoveToNextValidCombination() {
            bool moreCodesAvailable = true;
            while (moreCodesAvailable) {
                moreCodesAvailable = AdvanceTumblers();
                // Is this code valid? (each button can only be used once)
                if (_tumblers.Distinct().Count() == _tumblers.Length)
                    return true; // New code found
            }

            return false; // No more codes remaining
        }

        /// <summary>
        /// Resets all of the tumbers to the left of a particular index.
        /// </summary>
        /// <param name="rotatableTumblerIndex">The start index.</param>
        private void ResetTumblersFromIndex(int rotatableTumblerIndex) {
            for (int idx = rotatableTumblerIndex + 1; idx < _tumblers.Length; idx++)
                _tumblers[idx] = 0;
        }

        /// <summary>
        /// Tries a code on the keypad and returns the results.
        /// </summary>
        /// <param name="codeToTry">The code to try.</param>
        /// <returns>
        /// <see langword="true"/> if the code succeeded;
        /// <see langword="false"/> if the code was incorrect.
        /// </returns>
        private bool TryCode(string codeToTry) {
            // Try the current code
            Console.WriteLine(String.Format("Trying code: {0}", codeToTry));
            _codesTried++;
            return _keypad.TryCode(codeToTry);
        }

        #endregion


        #region Fields

        private int _codesTried;

        private Keypad _keypad;

        private int[] _tumblers;

        #endregion

    }

}