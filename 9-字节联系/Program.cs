using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;

namespace _9_字节联系
{
    class Program
    {
        enum ee
        {
            zhangsan=0,
            lisi,
            wangwu
        }
        static void Main(string[] args)
        {
            ee e1 = ee.lisi;
            int a = (int)e1;
            


            //bool flag = false;
            //string v = "s4419";
            //int a=0;

            //if (int.TryParse(v, out a))
            //{

            //}
            //else
            //{

            //}
            ////var len = Encoding.ASCII.GetBytes(v);




            //string tem = null;

            //for (int i = 0; i < 256; i++)
            //{
            //    tem += "s";
            //}

            //MemoryStream mStream = new MemoryStream();
            //BinaryFormatter bformatter = new BinaryFormatter();

            //bformatter.Serialize(mStream, tem); //用类的方法，将消息类转换为内存流  
            //byte[] buff = mStream.GetBuffer();

            //mStream.Close();
             
        }
    }

    class Test
    {
        public static string Name;

    }

}



 
 
