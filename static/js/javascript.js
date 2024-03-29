$(function () {
    var
        $table = $('#tree-table'),
        rows = $table.find('tr');
        icon_closed = 'bi bi-caret-right-fill';
        icon_opened = 'bi bi-caret-down-fill';

    rows.each(function (index, row) {
        var
            $row = $(row),
            level = $row.data('level'),
            id = $row.data('id'),
            $columnName = $row.find('td[data-column="name"]'),
            children = $table.find('tr[data-parent="' + id + '"]');

        if (children.length) {
            var expander = $columnName.prepend('<span class="treegrid-expander bi ' + icon_closed + '"></span>');

            children.hide();

            expander.on('click', function (e) {
                var $target = $(e.target);
                if ($target.hasClass(icon_closed)) {
                    $target
                        .removeClass(icon_closed)
                        .addClass(icon_opened);

                    children.show();
                } else if ($target.hasClass(icon_opened)){
                    $target
                        .removeClass(icon_opened)
                        .addClass(icon_closed);

                    reverseHide($table, $row);
                }
            });
        }

        $columnName.prepend('<span class="treegrid-indent" style="width:' + 15 * level + 'px"></span>');
    });

    reverseHide = function (table, element) {
        var
            $element = $(element),
            id = $element.data('id'),
            children = table.find('tr[data-parent="' + id + '"]');

        if (children.length) {
            children.each(function (i, e) {
                reverseHide(table, e);
            });

            $element
                .find('.' + icon_opened)
                .removeClass(icon_opened)
                .addClass(icon_closed);

            children.hide();
        }
    };
});
