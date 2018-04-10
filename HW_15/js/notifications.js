const Notifications = (function () {
    const container = document.querySelector('.first-form');

    const show = function (message) {
        hide();

        const alert = `<div class="notification ${message.class}">${message.text}</div>`;
        container.insertAdjacentHTML('afterbegin', alert);

        setTimeout(() => hide(), 2000);
    }

    const hide = function () {
        const currentAlert = document.querySelector('.notification');
        if (currentAlert) {
            currentAlert.remove();
        }
    };

    return {
        show
    }
}());
