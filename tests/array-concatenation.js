/**
 * Created by Pencroff on 02-Sep-16.
 */

window.test = {
    id: 'F33D9807-6D63-4773-AF70-7DA57E79A90C',
    name: 'array concatenation',
    description: 'Performance test for array concatenation',
    tags: ['array', 'concatenation'],
    url: 'tests/array-concatenation.js',
    fill: function (suite) {
        var result;
        var arr;
        suite.add('by join', function () {
            result = '';
            result += arr.join('');
        });
        suite.add('by for loop', function () {
            result = '';
            var len = arr.length;
            var i;
            for (i = 0; i < len; i += 1) {
                result += arr[i];
            }
        });
        suite.on('start cycle complete', function () {
            arr = getArray();
            console.log('cycle', result);
        });

        function getArray() {
            var len = 250;
            var arr = [];
            for (var i = 0; i < len; i += 1) {
                arr[i] = Math.random().toString(36).substr(2, 1);
            }
            return arr;
        }
    }
};