using System;
using System.Collections.Generic;
using System.Linq;
using System.Windows.Forms;

//参考：
//http://blog.csdn.net/wfx7414/article/details/50715732
//https://wenku.baidu.com/view/2c83c776ff00bed5b9f31dc1.html

namespace _2_PID
{
    public partial class Form1 : Form
    {
        private void Form1_Load(object sender, EventArgs e)
        {
        }
        public Form1()
        {
            InitializeComponent();

        }
        private PID pid;
         
        private void timer1_Tick_1(object sender, EventArgs e)
        {
            //this.uc1.PointValue = pid.PidClaU();
            //需要设置到的温度
            var tem = pid.PidClaU();
            //需要设置的电压
            var volite = (tem - 5) / 2;
            Console.WriteLine("电压："+volite+"温度："+tem);
            this.uc1.PointValue = volite;//设置的电压

        }

        private void button1_Click_1(object sender, EventArgs e)
        {
            pid = new PID();
            pid.Setvalue = float.Parse(textBox1setvalue.Text);
            pid.Kp = float.Parse(textBox1prakp.Text);
            pid.Ki = float.Parse(textBox2praki.Text);
            pid.Kd = float.Parse(textBox3prakd.Text);

            timer1.Interval = 100;
            timer1.Enabled = true;

        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.uc1.PointValue = 0;
            timer1.Enabled = false;
        }
    }
}
