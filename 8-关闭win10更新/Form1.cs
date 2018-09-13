using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using System.Diagnostics;
using System.Configuration;

namespace _8_关闭win10更新
{
    public partial class Form1 : Form
    {
        private int count = 0;
        /// <summary>
        /// 程序启动时，默认执行的模式
        /// </summary>
        private int AutoRun = 0;
        public Form1()
        {
            InitializeComponent();
            int interval = 1000 * Convert.ToInt16(ConfigurationManager.AppSettings["Interval"].ToString().Trim());
            this.timer1.Interval = interval;
            this.timerCPU.Interval = interval;
            this.timerCPU.Enabled = true;
            this.AutoRun = Convert.ToInt16(ConfigurationManager.AppSettings["AutoRun"].ToString().Trim());
            this.txtStartTime.Text = DateTime.Now.ToShortDateString() + " | " + DateTime.Now.ToLongTimeString();

        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            Process[] pList = Process.GetProcesses();
            foreach (Process p in pList)
            {
                if ((p.ProcessName == "Windows10UpgraderApp") ||
                    p.ProcessName.Contains("Windows 10 易升"))
                {
                    p.Kill();
                    this.count++;
                    this.txtCount.Text = count.ToString();
                    return;
                }
            }

            string updateName = "wuauserv";
            StopWindowsService(updateName);

        }
        /// <summary>
        /// 开启服务
        /// </summary>
        /// <param name="windowsServiceName">服务名称</param>
        void StartWindowsService(string windowsServiceName)
        {
            using (System.ServiceProcess.ServiceController control = new System.ServiceProcess.ServiceController(windowsServiceName))
            {
                if (control.Status == System.ServiceProcess.ServiceControllerStatus.Stopped)
                {
                    Console.WriteLine("服务启动......");
                    control.Start();
                    Console.WriteLine("服务已经启动......");
                }
                else if (control.Status == System.ServiceProcess.ServiceControllerStatus.Running)
                {
                    Console.WriteLine("服务已经启动......");
                }
            }

        }

        /// <summary>
        /// 停止服务
        /// </summary>
        /// <param name="windowsServiceName">服务名称</param>
        void StopWindowsService(string windowsServiceName)
        {
            using (System.ServiceProcess.ServiceController control = new System.ServiceProcess.ServiceController(windowsServiceName))
            {
                if (control.Status == System.ServiceProcess.ServiceControllerStatus.Running)
                {
                    Console.WriteLine("服务停止......");
                    control.Stop();
                    this.count++;
                    this.txtCount.Text = count.ToString();
                    Console.WriteLine("服务已经停止......");
                }
                else if (control.Status == System.ServiceProcess.ServiceControllerStatus.Stopped)
                {
                    Console.WriteLine("服务已经停止......");
                }
            }
        }


        private void btnRun_Click(object sender, EventArgs e)
        {
            this.btnRun.Enabled = false;
            this.btnStop.Enabled = true;
            this.timer1.Enabled = true;
            this.tssl.Text = "当前模式：禁止更新";
        }

        private void btnStop_Click(object sender, EventArgs e)
        {
            this.btnStop.Enabled = false;
            this.btnRun.Enabled = true;
            this.timer1.Enabled = false;
            this.tssl.Text = "当前模式：允许更新";
        }

        private void Form1_Load(object sender, EventArgs e)
        {
            if (AutoRun == 1)
            {
                this.btnRun.PerformClick();
            }
            else
            {
                this.btnStop.PerformClick();
            }
            this.notifyIcon1.Visible = true;

            //如果需要，保存配置
            //Configuration cfa = ConfigurationManager.OpenExeConfiguration(ConfigurationUserLevel.None);
            //cfa.AppSettings.Settings["AutoRun"].Value = "name";
            //cfa.Save();
            ////ConfigurationManager.RefreshSection("appSettings");

        }

        private void timerCPU_Tick(object sender, EventArgs e)
        {
            Process CurrentProcess = Process.GetCurrentProcess();
            this.txtCPU.Text = ((Double)(CurrentProcess.TotalProcessorTime.TotalMilliseconds - CurrentProcess.UserProcessorTime.TotalMilliseconds)).ToString();//CPU
            this.txtMemory.Text = (CurrentProcess.WorkingSet64 / 1024 / 1024).ToString() + "M ";//占用内存
        }




        private void notifyIcon1_DoubleClick(object sender, EventArgs e)
        {
            if (this.Visible)
            {
                this.Hide();
            }
            else
            {
                this.Show();
                this.WindowState = System.Windows.Forms.FormWindowState.Normal;
            }
        }


        private void Form1_SizeChanged(object sender, EventArgs e)
        {
            if (this.WindowState == System.Windows.Forms.FormWindowState.Minimized)
            {
                this.Hide();
            }
        }

        private void Form1_FormClosing(object sender, FormClosingEventArgs e)
        {
            //DialogResult dia = MessageBox.Show("要关闭？", "提示", MessageBoxButtons.OKCancel, MessageBoxIcon.Warning);
            //if (dia != DialogResult.OK)
            //{
            //    e.Cancel = true;
            //}
        }

        private void tsmiExit_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}
