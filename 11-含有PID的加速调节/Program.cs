using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;

namespace _11_含有PID的加速调节
{
    class Program
    {
        //damp 阻尼  PID
        static void Main(string[] args)
        {
           FileStream fs= File.Open("result.text", FileMode.OpenOrCreate);
           StreamWriter sw = new StreamWriter(fs);

            double lastReal = 0;
            for (int i = 0; i < 20; i++)
            {
                double theory = TheoryResult(i);
                Console.WriteLine("压力：" + i + "  理论流量：" + theory);
                sw.WriteLine("压力：" + i + "  理论流量：" + theory);
              

                PID pid = new PID();
                pid.Kp = 0.3f;
                pid.Ki = 0.5f;
                pid.Kd = 0.1f;
                pid.Setvalue = (float)theory;
                pid.calValue = (float)lastReal;
                Console.WriteLine("**用的开始值："+lastReal);
                sw.WriteLine("**用的开始值：" + lastReal);
                for (int j = 0; j < 30; j++)
                {
                    double real = RealResult(pid);
                    Console.WriteLine("---压力：" + i + "  实际流量：" + real.ToString("f5")+"  调整次数："+j);
                    sw.WriteLine("---压力：" + i + "  实际流量：" + real.ToString("f5") + "  调整次数：" + j);
                    lastReal = real;
                }
                 
                
            }

            sw.Close();
            Console.ReadKey();
        }
        static double TheoryResult(double x)
        {
            return 5*Math.Pow(x,2)  + 0.7;
            //return 200;
        }

        static double RealResult(PID pid)
        {

            //pid.Setvalue = (float)x;

            return pid.PidClaU();

        }
    }
}
