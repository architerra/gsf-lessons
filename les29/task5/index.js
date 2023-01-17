export const shmoment = initDate => {
    let result = new Date(initDate).getTime();

    const calculator = {
        add(timeInterval, number) {
            if (timeInterval === 'years') {
                result += (number * 31556952000);
            }
            if (timeInterval === 'months') {
                result += (number * 2629746000);
            }
            if (timeInterval === 'days') {
                result += (number * 86400000);
            }
            if (timeInterval === 'hours') {
                result += (number * 3600000);
            }
            if (timeInterval === 'minutes') {
                result += (number * 60000);
            }
            if (timeInterval === 'seconds') {
                result += (number * 1000);
            }
            if (timeInterval === 'milliseconds') {
                result += number;
            };
            return this;
        },
       
        subtract(timeInterval, number) {
            if (timeInterval === 'years') {
                result -= (number * 31556952000);
            }
            if (timeInterval === 'months') {
                result -= (number * 2629746000);
            }
            if (timeInterval === 'days') {
                result -= (number * 86400000);
            }
            if (timeInterval === 'hours') {
                result -= (number * 3600000);
            }
            if (timeInterval === 'minutes') {
                result -= (number * 60000);
            }
            if (timeInterval === 'seconds') {
                result -= (number * 1000);
            }
            if (timeInterval === 'milliseconds') {
                result -= number;
            };
            return this;
        },
        
        result() {
            return result.toString;
        }
    };

    return calculator;
};