const canvas = document.getElementById('gauge');
const ctx = canvas.getContext('2d');
const gaugeRangeText = document.getElementById('gaugeRangeText');

document.getElementById('date').innerText = new Date();

function updateGauge() {
    const per = new URL(window.location.href).searchParams.get('per');
    const gaugeValue = (per && !isNaN(per)) ? parseInt(per) : 44;
    drawGauge(gaugeValue);
    document.getElementById('chance').innerText = gaugeValue;
}

function drawGauge(value) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height;
    const radius = canvas.width / 2 - 10;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw gauge background
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, Math.PI, 2 * Math.PI);
    ctx.lineWidth = 25;
    ctx.strokeStyle = '#ddd';
    ctx.stroke();

    // Draw gauge value
    const startAngle = Math.PI;
    const endAngle = (value / 100) * Math.PI + startAngle;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.lineWidth = 24;
    ctx.strokeStyle = getColor(value);
    ctx.stroke();

    // Draw pointer
    const pointerLength = radius - 40;
    const pointerX = centerX + pointerLength * Math.cos(endAngle);
    const pointerY = centerY + pointerLength * Math.sin(endAngle);

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(pointerX, pointerY);
    ctx.lineWidth = 15;
    ctx.strokeStyle = '#333';
    ctx.stroke();
}

function getColor(value) {
    if (value < 20) {
        return '#00ff00'; // Low - Green
    } else if (value < 40) {
        return '#66ff33'; // Low to Moderate - Light Green
    } else if (value < 60) {
        return '#ffff00'; // Moderate - Yellow
    } else if (value < 80) {
        return '#ff9900'; // Moderate to High - Orange
    } else {
        return '#ff0000'; // High - Red
    }
}

// Initial draw with default value
updateGauge();
