using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            if (File.Exists("1.txt"))
            {
                string str = File.ReadAllText("1.txt");
                Console.WriteLine(str);
            }

          string[] str1=  Directory.GetDirectories(@"d:\");
          foreach (string s in str1)
          {
             string[] st= Directory.GetFiles(s,"*.jpg");
             foreach (string s1 in st)
             {
                 Console.WriteLine(s1);
             }
          }
          Console.ReadKey();

        }
    }
}
