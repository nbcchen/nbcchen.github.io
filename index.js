window.onload = () => {
    const guestName = new URL(location.href).searchParams.get('guest');
    if (guestName) {
        document.getElementById('guest-name').innerText = 'Hi, ' + guestName;
    }
};
