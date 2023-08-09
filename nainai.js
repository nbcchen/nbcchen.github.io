window.onload = () => {
    document.getElementsByTagName('button')[0].addEventListener('click', () => {
        const current = new Date();
        /**
         * @type {HTMLInputElement}
         */
        const checkBox = document.getElementsByName('is-yesterday')[0];
        if (checkBox.checked) {
            document.getElementById('result').innerHTML = 'If it\'s yesterday, the milk is probably no good';
        } else {
            /**
             * @type HTMLInputElement
             */
            const input = document.getElementsByName('last-feeding')[0];

            const lastFeedingValue = input.value.includes(':') ? input.value.split(':') : `${input.value}:00`;
            const lastFeedingHour = parseInt(lastFeedingValue[0]);
            const lastFeeding = 
                current.toString().substring(0, current.toString().indexOf(current.getFullYear()))
                + current.getFullYear()
                + ' '
                + (lastFeedingHour > 12 ? (lastFeedingHour+12) : lastFeedingHour)
                + ':'
                + lastFeedingValue[1].trim()
                + ':00 '
                + document.getElementsByTagName('select')[0].value
                + ' '
                + current.toString().substring(current.toString().indexOf('GMT'));
            const lastFeedingInput = new Date(lastFeeding);
            console.log(lastFeeding)
            //console.log(`${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()} ${document.getElementsByName('last-feeding')[0].innerText}`);
            const diff = Math.floor(((current - lastFeedingInput) % 86400000) / 3600000);
            if (isNaN(diff) || diff < 0){
                document.getElementById('result').innerHTML = 'Input is invalid';
            }
            else { 
                document.getElementById('result').innerHTML = `The milk has been prepared ${(diff === 0) ? 'less than 1' : diff} hours. ${(diff >= 1) ? 'It is no longer good' : 'it is still good'}`;
                document.getElementById('result').style.color = (diff >= 1) ? 'red' : 'green';
            }
        }
    });
};