import React from "react";
import moment from 'moment'

export default class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const {timeTillDate, timeFormat} = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format('D');
      const hours = countdown.format('HH');
      const minutes = countdown.format('mm');
      const seconds = countdown.format('ss');

      this.setState({days, hours, minutes, seconds});
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const {days, hours, minutes, seconds} = this.state;

    if (!seconds) {
      return null;
    }

    return (
      <section className="md:mb-[140px] mb-[70px] overflow-hidden">
        <div className="container mx-auto md:px-5 !px-0">
          <div className="relative md:flex items-center justify-between bg-orange2 py-[70px] px-[30px] rounded-[10px]">
            <div className="md:static absolute md:left-0 -left-[79%] top-0">
              <img src={require('../../assets/images/img-deal-of-1.png')}
                   alt="product-left"
                   className="object-center"/>
            </div>
            <div>
              <h2 className="md:text-4xl text-[28px] font-bold md:mb-10 mb-4 text-center">Deal of the day upto<br/>
                <span className="text-pink">-40%</span> off</h2>
              <div className="flex items-center max-w-lg mx-auto mb-9">
                {days && (
                  <div
                    className="flex items-center justify-center flex-col md:h-[90px] h-[50px] md:w-[90px] w-[50px] rounded-[10px] bg-orange3 text-gray md:text-base text-xs">
                    <span className="block md:text-5xl text-2xl text-black2">{days}</span> Days
                  </div>
                )}
                <div className="md:mx-5 mx-2 md:text-[35px] text-2xl text-gray">:</div>
                {hours && (
                  <div
                    className="flex items-center justify-center flex-col md:h-[90px] h-[50px] md:w-[90px] w-[50px] rounded-[10px] bg-orange3 text-gray md:text-base text-xs">
                    <span className="block md:text-5xl text-2xl text-black2">{hours}</span> Hours
                  </div>
                )}
                <div className="md:mx-5 mx-2 md:text-[35px] text-2xl text-gray">:</div>
                {minutes && (
                  <div
                    className="flex items-center justify-center flex-col md:h-[90px] h-[50px] md:w-[90px] w-[50px] rounded-[10px] bg-orange3 text-gray md:text-base text-xs">
                    <span className="block md:text-5xl text-2xl text-black2">{minutes}</span> Minutes
                  </div>
                )}
                <div className="md:mx-5 mx-2 md:text-[35px] text-2xl text-gray">:</div>
                {seconds && (
                  <div
                    className="flex items-center justify-center flex-col md:h-[90px] h-[50px] md:w-[90px] w-[50px] rounded-[10px] bg-orange3 text-gray md:text-base text-xs">
                    <span className="block md:text-5xl text-2xl text-black2">{seconds}</span>Seconds
                  </div>
                )}
              </div>
              <div className="text-center">
                <button type="button"
                        className="font-semibold hover:text-white border-2 border-black2 hover:bg-black2 rounded-xl px-5 py-2.5 text-center">Shop Now
                </button>
              </div>
            </div>
            <div className="md:static absolute md:right-0 -right-[65%] top-0">
              <img src={require('../../assets/images/img-deal-of-2.png')}
                   alt="product-right"
                   className="object-center"/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}