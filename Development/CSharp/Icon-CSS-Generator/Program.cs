using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace IconCSSGenerator
{
    public class Program
    {
        public static void Main(string[] args)
        {

            if (args.Length != 3)
            {
                Console.WriteLine("Usage: icssgen <iconDirectoryPath> <projectSubFolderName> <dimension>");
                return;
            }

            string iconDirectoryPath = args[0];
            string projectSubFolderName = args[1];
            string dimension = args[2];

            // Open the directory containing the icons
            using (FileStream cssFileStream = new FileStream("icons.css", FileMode.Create))
            {
                using (StreamWriter sw = new StreamWriter(cssFileStream))
                {
                    string[] iconFiles = Directory.GetFiles(iconDirectoryPath);
                    foreach (string iconFile in iconFiles)
                    {
                        string iconFileName = iconFile.Replace(iconDirectoryPath + "\\", "");
                        string iconName = iconFileName.Substring(0, iconFileName.IndexOf('-'));
                        sw.WriteLine(String.Format(".icon-{0}-{2}x{2} {{ display: inline-block; width: {2}px; height: {2}px; background-image: url('../images/icons/{1}/{0}-{2}x{2}.png'); }}", iconName, projectSubFolderName, dimension));
                    }
                }
            }
            
        }
    }
}
