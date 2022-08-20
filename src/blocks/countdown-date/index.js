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
      <section className="mb-[140px]">
        <div className="container mx-auto">
          <div className="flex items-center justify-between bg-orange2 py-[70px] px-[30px] rounded-[10px]">
            <div>
              <img src={require('../../assets/images/img-deal-of-1.png')}
                   alt="product-left"
                   className="object-center"/>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-10 text-center">Deal of the day upto<br/>
                <span className="text-pink">-40%</span> off</h2>
              <div className="flex items-center max-w-lg mx-auto mb-9">
                {days && (
                  <div
                    className="flex items-center justify-center flex-col h-[90px] w-[90px] rounded-[10px] bg-orange3 text-gray">
                    <span className="block text-5xl text-black2">{days}</span> Days
                  </div>
                )}
                <div className="mx-5 text-[35px] text-gray">:</div>
                {hours && (
                  <div
                    className="flex items-center justify-center flex-col h-[90px] w-[90px] rounded-[10px] bg-orange3 text-gray">
                    <span className="block text-5xl text-black2">{hours}</span> Hours
                  </div>
                )}
                <div className="mx-5 text-[35px] text-gray">:</div>
                {minutes && (
                  <div
                    className="flex items-center justify-center flex-col h-[90px] w-[90px] rounded-[10px] bg-orange3 text-gray">
                    <span className="block text-5xl text-black2">{minutes}</span> Minutes
                  </div>
                )}
                <div className="mx-5 text-[35px] text-gray">:</div>
                {seconds && (
                  <div
                    className="flex items-center justify-center flex-col h-[90px] w-[90px] rounded-[10px] bg-orange3 text-gray">
                    <span className="block text-5xl text-black2">{seconds}</span>Seconds
                  </div>
                )}
              </div>
              <div className="text-center">
                <button type="button"
                        className="font-semibold hover:text-white border-2 border-black2 hover:bg-black2 rounded-xl px-5 py-2.5 text-center">Shop Now
                </button>
              </div>
            </div>
            <div>
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