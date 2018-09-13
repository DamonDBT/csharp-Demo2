using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.IO;

namespace _5_WebInForm
{
    /// <summary>
    /// 在winform窗体中用wenbform控件，显示html页面源码
    /// html页面中引用百度的echart.js。渲染，js的引用要用绝对路径。
    /// 最后用正则表达式实时更新html文本中的数据，模拟了向服务器发送请求，返回结果
    /// 并显示到html中，实现echart效果
    /// 
    /// </summary>
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        { 
            string path = System.Environment.CurrentDirectory + @"\Html\echart1.htm";  
            this.webBrowser1.Navigate(path); 

        }

        private void timer1_Tick(object sender, EventArgs e)
        { 
           

        }
    }
    
}
