export const shmoment = initDate => {
    let resultDate = new Date(initDate).getTime();

    const calculator = {
        add(timeInterval, number) {
            if (timeInterval === 'years') {
                resultDate += (number * 31556952000);
            }
            if (timeInterval === 'months') {
                resultDate += (number * 2629746000);
            }
            if (timeInterval === 'days') {
                resultDate += (number * 86400000);
            }
            if (timeInterval === 'hours') {
                resultDate += (number * 3600000);
            }
            if (timeInterval === 'minutes') {
                resultDate += (number * 60000);
            }
            if (timeInterval === 'seconds') {
                resultDate += (number * 1000);
            }
            if (timeInterval === 'milliseconds') {
                resultDate += number;
            };
            return this;
        },
       
        subtract(timeInterval, number) {
            if (timeInterval === 'years') {
                resultDate -= (number * 31556952000);
            }
            if (timeInterval === 'months') {
                resultDate -= (number * 2629746000);
            }
            if (timeInterval === 'days') {
                resultDate -= (number * 86400000);
            }
            if (timeInterval === 'hours') {
                resultDate -= (number * 3600000);
            }
            if (timeInterval === 'minutes') {
                resultDate -= (number * 60000);
            }
            if (timeInterval === 'seconds') {
                resultDate -= (number * 1000);
            }
            if (timeInterval === 'milliseconds') {
                resultDate -= number;
            };
            return this;
        },
        
        result() {
            let newDate = new Date(resultDate);
            return newDate;
        }
    };

    return calculator;
};

// const res = shmoment('2020, 1, 1').subtract('milliseconds', 2).result();
// console.log(res)