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
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SolveKeypad {

    public class Keypad {

        #region Constructors

        /// <summary>
        /// Initializes a new <see cref="Keypad"/> instance.
        /// </summary>
        /// <param name="codeLength">The code length.</param>
        /// <param name="buttons">The buttons on the keypad.</param>
        public Keypad(
            int codeLength,
            IList<char> buttons) {
            _codeLength = codeLength;
            _buttons = new List<char>();
            foreach (char c in buttons)
                if (!_buttons.Contains(c))
                    _buttons.Add(c);

            // Validate that there are enough unique buttons to satisfy the code length
            if (_codeLength > _buttons.Count)
                throw new ArgumentException("Code length must be less than or equal to the number of unique buttons.");

            _rng = new Random(DateTime.Now.Millisecond * DateTime.Now.Second);
            GenerateCode();
        }

        #endregion


        #region Public Methods

        /// <summary>
        /// Tries a code on the keypad.
        /// </summary>
        /// <param name="codeToTry">The code to try.</param>
        /// <returns>
        /// <see langword="true"/> if the code was correct; <see langword="false"/> otherwise.
        /// </returns>
        public bool TryCode(
            string codeToTry) {
            return codeToTry == _code;
        }

        #endregion


        #region Private Methods

        /// <summary>
        /// Generates a code (solution) for this keypad.
        /// </summary>
        private void GenerateCode() {
            IList<char> usedKeys = new List<char>();
            StringBuilder codeBuilder = new StringBuilder();
            for (int idx = 0; idx < CodeLength; idx++) {
                IList<char> unusedKeys = Buttons.Where(b => usedKeys.Contains(b) == false).ToList();
                int keyIndex = _rng.Next(0, unusedKeys.Count - 1);
                char key = unusedKeys[keyIndex];
                usedKeys.Add(key);
                codeBuilder.Append(key);
            }
            _code = codeBuilder.ToString();
        }

        #endregion


        #region Properties

        /// <summary>
        /// The buttons on the keypad.
        /// </summary>
        public IList<char> Buttons {
            get { return _buttons; }
        }

        /// <summary>
        /// The code length.
        /// </summary>
        public int CodeLength {
            get { return _codeLength; }
        }

        #endregion


        #region Fields

        private IList<char> _buttons;

        private string _code;

        private int _codeLength;

        private Random _rng;

        #endregion

    }

}