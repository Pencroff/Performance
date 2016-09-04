/**
 * Created by Pencroff on 02-Sep-16.
 */

(function (root) {
    root.data = [
        {
            id: 'F33D9807-6D63-4773-AF70-7DA57E79A90C',
            name: 'array concatenation',
            description: 'Performance test for array concatenation',
            tags: ['array', 'concatenation', 'random',
                'performance', 'test', 'example', 'tag', 'long-tag',
                'very-long-tag'],
            url: 'tests/array-concatenation.js',
        },
        {
            id: '384861CA-DA2E-4FD2-A113-080010D4A42B',
            name: 'object iteration',
            description: 'Performance test for iteration object properties',
            tags: ['object', 'iteration'],
            url: 'tests/object-iteration.js',
        }
    ];
})(window.PerformanceJs);