using System;
using System.Collections.Generic;
using System.Linq;

namespace _11_含有PID的加速调节
{
    public class PID
    {
        private float  err, err_last, err_next;
        public float calValue;
        private float deadband;
        private int index, UMAX, UMIN, MAXLIM, MINLIM;
        public float Kp { get; set; }
        public float Ki { get; set; }
        public float Kd { get; set; }
        public float Setvalue { get; set; }
        public PID()
        {
            //下面几个参数的意义？
            MAXLIM = 800;
            MINLIM = -200;
            UMAX = 310;
            UMIN = -100;
            deadband = 2;
        }
        /// <summary>
        /// 返回Y值应该被设定到的值
        /// </summary>
        /// <returns></returns>
        public float PidClaU( )
        {
            err_next = err_last;
            err_last = err;
            err = Setvalue - calValue;

            //if (calValue > UMAX)
            //    index = err < 0 ? 1 : 0;
            //else
            //{
            //    if (calValue < UMIN)
            //        index = err > 0 ? 1 : 0;
            //    else
            //        index = Math.Abs(err) > 0.8 * Setvalue ? 0 : 1;
            //}
            //if (Math.Abs(err) > deadband)
            //{
            //    calValue += Kp * ((err - err_last) +
            //               index * Ki * err +
            //               Kd * (err - 2 * err_last + err_next));//用+=转成了位置形式？
            //}
            //calValue = calValue > MAXLIM ? MAXLIM : calValue;
            //calValue = calValue < MINLIM ? MINLIM : calValue; 
            //return calValue;//温度应该被设定到的值


            //修改
            calValue += Kp * ((err - err_last) +
                           Ki * err +
                          Kd * (err - 2 * err_last + err_next));//用+=转成了位置形式？
            return calValue;//温度应该被设定到的值

        }
    }
}
