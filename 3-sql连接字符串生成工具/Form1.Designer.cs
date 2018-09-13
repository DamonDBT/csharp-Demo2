namespace _3_sql连接字符串生成工具
{
    partial class Form1
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            this.btnGetString = new System.Windows.Forms.Button();
            this.txtString = new System.Windows.Forms.TextBox();
            this.propGridForSqlString = new System.Windows.Forms.PropertyGrid();
            this.SuspendLayout();
            // 
            // btnGetString
            // 
            this.btnGetString.Location = new System.Drawing.Point(12, 12);
            this.btnGetString.Name = "btnGetString";
            this.btnGetString.Size = new System.Drawing.Size(236, 53);
            this.btnGetString.TabIndex = 0;
            this.btnGetString.Text = "获取连接字符串";
            this.btnGetString.UseVisualStyleBackColor = true;
            this.btnGetString.Click += new System.EventHandler(this.btnGetString_Click);
            // 
            // txtString
            // 
            this.txtString.Location = new System.Drawing.Point(12, 71);
            this.txtString.Multiline = true;
            this.txtString.Name = "txtString";
            this.txtString.Size = new System.Drawing.Size(236, 476);
            this.txtString.TabIndex = 1;
            // 
            // propGridForSqlString
            // 
            this.propGridForSqlString.Location = new System.Drawing.Point(272, 12);
            this.propGridForSqlString.Name = "propGridForSqlString";
            this.propGridForSqlString.Size = new System.Drawing.Size(327, 535);
            this.propGridForSqlString.TabIndex = 2;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(611, 565);
            this.Controls.Add(this.propGridForSqlString);
            this.Controls.Add(this.txtString);
            this.Controls.Add(this.btnGetString);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btnGetString;
        private System.Windows.Forms.TextBox txtString;
        private System.Windows.Forms.PropertyGrid propGridForSqlString;
    }
}

