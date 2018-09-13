using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.IO;

namespace Demo2
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            string path = @"E:\codeStudy\1-编程视频教程\";
            this.treeView1.Nodes.Add("根");
            Get(path, this.treeView1.TopNode);

            OpenFileDialog ofd = new OpenFileDialog();
            

        }
        private void Get(string path, TreeNode root)
        {
            string[] str = Directory.GetDirectories(path);
            foreach (string st in str)
            {
                var v = Path.GetFileName(st);
                TreeNode tn = new TreeNode(v);
                root.Nodes.Add(tn);

                var vFile = Directory.GetFiles(st);
                if (vFile != null)
                { 
                    foreach (string item in vFile)
                    {
                        tn.Nodes.Add(item);
                    }
                }
                if (Directory.GetFiles(st).Length > 0)
                {
                    Get(st, tn);
                }

            }
        }
    }
}
