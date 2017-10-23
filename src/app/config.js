swal.setDefaults({
    cancelButtonText: 'Отмена',
    confirmButtonClass: 'col-5 btn btn-lg btn-success float-right',
    cancelButtonClass: 'col-5 btn btn-lg btn-danger float-left',
    buttonsStyling: false,
    reverseButtons: true,
});

fecha.i18n = {
    dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    dayNames: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    amPm: ['am', 'pm'],
    // D is the day of the month, function returns something like...  3rd or 11th
    DoFn: function(D) {
        return D + ['ое', 'ое', 'ое', 'е'][D % 10 > 3 ? 0 : (D - D % 10 !== 10) * D % 10];
    }
}