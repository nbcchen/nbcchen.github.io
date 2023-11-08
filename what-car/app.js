const cars = {
    rav4: {
        name: 'Toyota RAV4',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/2019_Toyota_RAV4_Excel_HEV_CVT_2.5_Front.jpg/420px-2019_Toyota_RAV4_Excel_HEV_CVT_2.5_Front.jpg'
    },
    model3: {
        name: 'Tesla Model 3',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg/420px-2019_Tesla_Model_3_Performance_AWD_Front.jpg'
    },
    sienna: {
        name: 'Toyota Sienna',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/2021_Toyota_Sienna_XLE_Hybrid%2C_front_12.21.21.jpg/420px-2021_Toyota_Sienna_XLE_Hybrid%2C_front_12.21.21.jpg'
    },
    corolla: {
        name: 'Toyota Corolla Hybrid/Prius',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/2019_Toyota_Corolla_Design_VVT-i_HEV_1.8_Front.jpg/420px-2019_Toyota_Corolla_Design_VVT-i_HEV_1.8_Front.jpg'
    },
    outback: {
        name: 'Subaru Outback',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/2023_Subaru_Outback_Premium%2C_front_right%2C_09-09-2023.jpg/420px-2023_Subaru_Outback_Premium%2C_front_right%2C_09-09-2023.jpg'
    },
    priusPrime: {
        name: 'Toyota Prius Prime',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Toyota_Prius_%28XW60%29_Plug-in_Hybrid_Automesse_Ludwigsburg_2023_1X7A0004.jpg/420px-Toyota_Prius_%28XW60%29_Plug-in_Hybrid_Automesse_Ludwigsburg_2023_1X7A0004.jpg'
    },
    ascent: {
        name: 'Subaru Ascent',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Subaru_Ascent_IMG_3632.jpg/420px-Subaru_Ascent_IMG_3632.jpg'
    },
    wrangler: {
        name: 'Jeep Wrangler',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2018_Jeep_Wrangler_Sahara_Unlimited_Multijet_2.1_Front.jpg/280px-2018_Jeep_Wrangler_Sahara_Unlimited_Multijet_2.1_Front.jpg'
    },
    wrx: {
        name: 'Subaru WRX',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/2022_Subaru_WRX_GT_in_Ceramic_White%2C_front_left_%28NYIAS_2022%29.jpg/280px-2022_Subaru_WRX_GT_in_Ceramic_White%2C_front_left_%28NYIAS_2022%29.jpg'
    },
    maverick: {
        name: 'Ford Maverick',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/2022_Ford_Maverick_XLT_AWD_with_FX4_Off-Road_Package.jpg/280px-2022_Ford_Maverick_XLT_AWD_with_FX4_Off-Road_Package.jpg'
    },
};
new Vue({
    el: '#app',
    data() {
        return {
            thirdCarPurpose: undefined,
            noMinivan: undefined,
            isNorthernNewEngland: undefined,
            numCarsRequired: 0,
            hasHomeCharging: undefined,
            hasWorkCharging: undefined,
            accessibilityNeeds: undefined,
            children: 0,
            rating: 0,
            cars
        };
    },
    computed: {
        result() {
            /**
             * @type {{ thirdCar: string; winterCar: string; dailyDriver: string }}
             */
            let result = {
                dailyDriver: this.accessibilityNeeds === 'Y' ? 'sienna' : 'rav4'
            };
            if (parseInt(this.numCarsRequired) >= 2) {
                if (this.isNorthernNewEngland === 'Y') {
                    if (this.accessibilityNeeds === 'Y') result.winterCar = 'sienna';
                    else if (this.children > 2) result.winterCar = 'ascent';
                    else result.winterCar = 'outback';
                }
                else {
                    if (this.children > 2 || this.accessibilityNeeds === 'Y')
                        result.winterCar = this.noMinivan ? 'ascent' : 'sienna';
                    else result.winterCar = 'rav4';
                }
                if (this.hasHomeCharging === 'Y') {
                    result.dailyDriver = 'model3';
                }
                else if (this.hasWorkCharging === 'Y') {
                    result.dailyDriver = 'priusPrime';
                }
                else result.dailyDriver = 'corolla';

                if (parseInt(this.numCarsRequired) === 3) {
                    switch (this.thirdCarPurpose) {
                        case '1': result.thirdCar = 'wrangler'; break;
                        case '2': result.thirdCar = 'wrx'; break;
                        case '3':
                            if (result.dailyDriver !== 'rav4' && result.winterCar !== 'rav4')
                                result.thirdCar = 'rav4';
                            else if (result.dailyDriver !== 'priusPrime')
                                result.thirdCar = 'priusPrime';
                            else if (result.dailyDriver !== 'corolla')
                                result.thirdCar = 'corolla';
                            else if (result.dailyDriver !== 'model3')
                                result.thirdCar = 'model3';
                            else if (result.winterCar !== 'sienna')
                                result.thirdCar = 'sienna';
                            break;
                        case '4':
                            result.thirdCar = 'maverick'; break;
                    }
                }
            }
            return result;
        }
    }
});
