using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Windows.Forms;

namespace _2_PID
{
    public partial class Uc : UserControl
    {
        public Uc()
        {
            InitializeComponent();
        }

        private void Uc_Load(object sender, EventArgs e)
        {
            timer1.Enabled = true;
            timer1.Interval = 100;

            dataDianYa = new PointF[pictureBox1.Width / pianyi];
            for (int i = 0; i < dataDianYa.Length; i++)
            {
                dataDianYa[i].X += pianyi * i;
                dataDianYa[i].Y = this.pictureBox1.Height;
            }

            dataT = new PointF[pictureBox1.Width / pianyi];
            for (int i = 0; i < dataT.Length; i++)
            {
                dataT[i].X += pianyi * i;
                dataT[i].Y = this.pictureBox1.Height;
            }

        }
        private Graphics g;
        private Pen p = new Pen(Color.Green, 1);
        private Pen p1 = new Pen(Color.Black, 1);//电压
        private Pen p2 = new Pen(Color.Red, 1);//温度
        private int jiange = 50;
        private int pianyi = 2;
        /// <summary>
        /// 电压
        /// </summary>
        private PointF[] dataDianYa;
        /// <summary>
        /// 目标温度
        /// </summary>
        private PointF[] dataT;
       
        public float PointValue { set; get; }
        

        private void Getdata()
        {
            dataDianYa[dataDianYa.Length - 1].Y = this.pictureBox1.Height - PointValue;//像素翻转位置
           
            for (var i = 0; i < dataDianYa.Length - 1; i++)
            {
                dataDianYa[i].Y = dataDianYa[i + 1].Y; 
            }

            dataT[dataT.Length - 1].Y = this.pictureBox1.Height - (5 + 2 * PointValue);//像素翻转位置
            for (var i = 0; i < dataT.Length - 1; i++)
            { 
                dataT[i].Y = dataT[i + 1].Y;
            }
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            Getdata();
            pictureBox1.Refresh();
        } 
        private void pictureBox1_Paint(object sender, PaintEventArgs e)
        {
            g = e.Graphics;
            for (var i = 0; i < pictureBox1.Width; i++)
            {
                if (i % jiange == 0)
                {
                    g.DrawLine(p, i, 0, i, pictureBox1.Height);
                }
            }
            for (var i = 0; i < pictureBox1.Height; i++)
            {
                if (i % jiange == 0)
                {
                    g.DrawLine(p, 0, i, pictureBox1.Width, i);
                }
            }

            g.DrawCurve(p1, dataDianYa);//绘制电压
            g.DrawCurve(p2, dataT);//绘制温度
              
             
        }
    }
}
