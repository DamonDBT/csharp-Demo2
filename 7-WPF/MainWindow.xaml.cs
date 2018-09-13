using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Threading;
using System.Windows.Threading;

namespace _7_WPF
{
    /// <summary>
    /// MainWindow.xaml 的交互逻辑
    /// </summary>
    public partial class MainWindow : Window
    { 
        public MainWindow()
        {
            InitializeComponent();
        }

        private int count = 0;
        private DispatcherTimer dispatcherTimer = new System.Windows.Threading.DispatcherTimer();
        private void button1_Click(object sender, RoutedEventArgs e)
        {  
             
            //dispatcherTimer = new System.Windows.Threading.DispatcherTimer();
            dispatcherTimer.Tick += new EventHandler(Count);
            dispatcherTimer.Interval = new TimeSpan(0, 0, 1);
            dispatcherTimer.Start();

        }
        void Count(object sender, EventArgs e)
        { 
                this.count++;
                this.progressBar1.Value = count;
             
        }
        

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            this.progressBar1.Maximum = 20;
        }

        private void button2_Click(object sender, RoutedEventArgs e)
        {
            this.dispatcherTimer.IsEnabled = false;
        }
    }
}
