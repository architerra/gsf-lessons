export const shmoment = initDate => {
    let resultDate = new Date(initDate);

    const calculator = {
        add(timeInterval, number) {
            if (timeInterval === 'years') {
                resultDate.setFullYear(resultDate.getFullYear() + number);
            }
            if (timeInterval === 'months') {
                resultDate.setMonth(resultDate.getMonth() + number);
            }
            if (timeInterval === 'days') {
                resultDate.setDate(resultDate.getDate() + number);
            }
            if (timeInterval === 'hours') {
                resultDate.setHours(resultDate.getHours() + number);
            }
            if (timeInterval === 'minutes') {
                resultDate.setMinutes(resultDate.getMinsetMinutes() + number);
            }
            if (timeInterval === 'seconds') {
                resultDate.setSeconds(resultDate.getSeconds() + number);
            }
            if (timeInterval === 'milliseconds') {
                resultDate.setMilliseconds(resultDate.getMinsetMilliseconds() + number);
            };
            return this;
        },
       
        subtract(timeInterval, number) {
            if (timeInterval === 'years') {
                resultDate.setFullYear(resultDate.getFullYear() - number);
            }
            if (timeInterval === 'months') {
                resultDate.setMonth(resultDate.getMonth() - number);
            }
            if (timeInterval === 'days') {
                resultDate.setDate(resultDate.getDate() - number);
            }
            if (timeInterval === 'hours') {
                resultDate.setHours(resultDate.getHours() - number);
            }
            if (timeInterval === 'minutes') {
                resultDate.setMinutes(resultDate.getMinsetMinutes() - number);
            }
            if (timeInterval === 'seconds') {
                resultDate.setSeconds(resultDate.getSeconds() - number);
            }
            if (timeInterval === 'milliseconds') {
                resultDate.setMilliseconds(resultDate.getMinsetMilliseconds() - number);
            };
            return this;
        },
        
        result() {
            return resultDate;
        }
    };

    return calculator;
};

// const res = shmoment('2020, 1, 1').subtract('years', 2).result();
// console.log(res)