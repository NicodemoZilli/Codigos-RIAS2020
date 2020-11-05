Ext.define('KitchenSink.view.charts.area.BasicController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.area-basic',

    onAxisLabelRender: function(axis, label, layoutContext) {
        // Custom renderer overrides the native axis label renderer.
        // Since we don't want to do anything fancy with the value
        // ourselves except appending a '%' sign, but at the same time
        // don't want to loose the formatting done by the native renderer,
        // we let the native renderer process the value first.
        var value = layoutContext.renderer(label);

        return value !== '0' ? (value / 1000 + ',000') : value;
    },

    onPreview: function() {
        var chart = this.lookup('chart');

        chart.preview();
    },

    getSeriesConfig: function(field, title) {
        return {
            type: 'area',
            title: title,
            xField: 'year',
            yField: field,
            style: {
                opacity: 0.60
            }
        };
    },

    onAfterRender: function() {
        var me = this,
            chart = me.lookup('chart');

        chart.setSeries([
            me.getSeriesConfig('usa', 'USA'),
            me.getSeriesConfig('china', 'China'),
            me.getSeriesConfig('japan', 'Japan')
        ]);
    }

});
