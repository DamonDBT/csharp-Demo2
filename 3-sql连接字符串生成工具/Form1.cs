using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Data.Sql;
using System.Data.SqlClient;


namespace _3_sql连接字符串生成工具
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            SqlConnectionStringBuilder scsb = new SqlConnectionStringBuilder(); 
            this.propGridForSqlString.SelectedObject = scsb;
        }

        private void btnGetString_Click(object sender, EventArgs e)
        {
            this.txtString.Text = (this.propGridForSqlString.SelectedObject as SqlConnectionStringBuilder).ToString();
        }
    }
     
}
