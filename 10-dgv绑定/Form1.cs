using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace _10_dgv绑定
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            List<Student> ss = new List<Student>();
            ss.Add(new Student() { Names = "zhangsan", Age = 12, Address = "zhoukou" });
            ss.Add(new Student() { Names = "zhangsan", Age = 12, Address = "zhoukou" });
            ss.Add(new Student() { Names = "zhangsan", Age = 12, Address = "zhoukou" });
            ss.Add(new Student() { Names = "zhangsan", Age = 12, Address = "zhoukou" });
            ss.Add(new Student() { Names = "zhangsan", Age = 12, Address = "zhoukou" });
            this.dataGridView1.DataSource = ss;
            
        }
    }

    class Student
    {
        public string  Names { get; set; }
        public int Age { get; set; }
        public string  Address { get; set; }
    }
}
