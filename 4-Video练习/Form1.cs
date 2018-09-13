using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Diagnostics;

namespace _4_Video练习
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            //Process p= Process.GetCurrentProcess();
            //var v = Process.GetProcesses();
            //foreach (Process p in v)
            //{
            //    this.textBox1.AppendText(p.ProcessName + "\r\n");
            //}


            Process.Start("notepad");
        }
    }
}
