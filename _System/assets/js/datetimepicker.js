$(function () {
    $('#datetimepicker').datetimepicker({
      locale: 'sv',
      inline: true,
      sideBySide: true,
      defaultDate: new Date(),
      stepping: '15'
    });
});

$(function () {
    $('#datetimepickerHasValue').datetimepicker({
      locale: 'sv',
      inline: true,
      sideBySide: true,
      stepping: '15'
    });
});