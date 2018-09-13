using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using Newtonsoft;
using HtmlAgilityPack;
using System.IO;
using System.Web;
using System.Net;
using System.Diagnostics;
using System.Threading;

namespace _7_爬取猎聘网
{
    public partial class dgv : Form
    {
        List<Info> info = new List<Info>();
        public dgv()
        {
            InitializeComponent();
        }

        private void dgv_Load(object sender, EventArgs e)
        {

        }
        string kw = null;
        string pathBefor = "https://www.liepin.com/zhaopin/?ckid=2dd5159e3e7ef54b&fromSearchBtn=2&degradeFlag=0&init=-1&sfrom=click-pc_homepage-centre_searchbox-search_new&key=";
        string pathAfter = "&headckid=2dd5159e3e7ef54b&d_pageSize=40&siTag=Qv7FuzmhJxXrIDjvLQJPfQ~fA9rXquZc5IkJpXC-Ycixw&d_headId=f8f012f663e63083157cf2371e65305b&d_ckId=f8f012f663e63083157cf2371e65305b&d_sfrom=search_fp&d_curPage=0&curPage=";
        int id = 0;
        private void btnStart_Click(object sender, EventArgs e)
        {
            this.info.Clear();
            kw = this.txtKeyWord.Text;
            if (kw == null)
            {
                MessageBox.Show("请输入关键字！");
                return;
            }
            if (kw.ToUpper().Trim() == "C#")
                kw = "C%23";
            string path = pathBefor + kw + pathAfter;

            ThreadPool.SetMaxThreads(200, 500);

            for (int i = 0; i < 100; i++)
            {

                path += i;
                //线程池，怎么传入参数？               
                ThreadPool.QueueUserWorkItem(new WaitCallback(NewMethod), path);

                //var t =new  Thread(new ParameterizedThreadStart(NewMethod));
                //t.IsBackground = true;
                //t.Start(path);
            }

            //Thread.Sleep(5000);//怎么知道所有的线程都结束了？

            while (true)
            {
                Thread.Sleep(100);//这句写着，主要是没必要循环那么多次。去掉也可以。
                int maxWorkerThreads, workerThreads;
                int portThreads;
                ThreadPool.GetMaxThreads(out maxWorkerThreads, out portThreads);
                ThreadPool.GetAvailableThreads(out workerThreads, out portThreads);
                if (maxWorkerThreads - workerThreads == 0) //应该是0 啊，但是就是不会是0 
                {
                    Console.WriteLine("结束了");
                    break;
                }
            }


            this.dataGridView1.DataSource = null;
            this.dataGridView1.DataSource = this.info.OrderByDescending(a => a.MoneyMax_10K).ToList();
        }

        /// <summary>
        /// 需要线程的回调，知道什么时候线程执行结束了
        /// </summary>
        /// <param name="path"></param>
        private void NewMethod(object path)
        {
            try
            {
                WebRequest request = WebRequest.Create(path.ToString());
                WebResponse response = (WebResponse)request.GetResponse();
                Stream dataStream = response.GetResponseStream();
                StreamReader reader = new StreamReader(dataStream, Encoding.UTF8);
                string st = reader.ReadToEnd();

                if (!st.Contains("没有找到符合条件的职位"))
                {

                    var listAllInfo = st.Split(new string[] { "<div class=\"sojob-item-main clearfix\">" }, StringSplitOptions.RemoveEmptyEntries);
                    foreach (string oneJob in listAllInfo)
                    {
                        if (!oneJob.Contains("<div class=\"job-info\">"))
                            continue;

                        this.id++;
                        var list = oneJob.Split(new string[] { "<h3 title=\" ", "\">" }, StringSplitOptions.RemoveEmptyEntries);
                        Info job = new Info();
                        job.ID = this.id;
                        job.JobName = list[1].Split(new string[] { "招聘" }, StringSplitOptions.RemoveEmptyEntries)[1].ToString();
                        job.Money = list[4].Split(new string[] { "</span>" }, StringSplitOptions.RemoveEmptyEntries)[0].ToString();
                        if (!job.Money.Contains("面议"))
                        {
                            job.MoneyMin_10K = Convert.ToInt16(job.Money.Split(new string[] { "-", "万" }, StringSplitOptions.RemoveEmptyEntries)[0]);
                            job.MoneyMax_10K = Convert.ToInt16(job.Money.Split(new string[] { "-", "万" }, StringSplitOptions.RemoveEmptyEntries)[1]);
                        }


                        job.WorkPlace = list[5].Split(new string[] { "</a>" }, StringSplitOptions.RemoveEmptyEntries)[0].ToString();
                        job.ComName = list[11].Split(new string[] { "\"公司", "\"" }, StringSplitOptions.RemoveEmptyEntries)[1].ToString();
                        info.Add(job);
                    }
                }

            }
            catch (System.Exception ex)
            {
                Debug.Print(ex.Message);
            }

        }
    }
}
