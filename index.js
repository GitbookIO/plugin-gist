var url = require('url');
var path = require('path');
var changeCase = require('change-case');

// Normalize a gist id
function normId(id) {
    var parts = url.parse(id);
    if (!parts.protocol) return id;
    return parts.pathname.replace(/^\//, '').replace('.js', '');
}

module.exports = {
    book: {
        assets: './assets',
        js: [
            'https://cdnjs.cloudflare.com/ajax/libs/gist-embed/2.4/gist-embed.min.js',
            'plugin.js'
        ]
    },
    blocks: {
        gist: {
            // todo: download gist for ebooks
            process: function(block) {
                var opts = '';
                block.kwargs.id = normId(block.kwargs.id);

                Object.keys(block.kwargs)
                .forEach(function(key) {
                    if (key == 'keywords') return;

                    var optKey = 'data-gist-' + changeCase.paramCase(key);
                    opts += optKey + '=' + JSON.stringify(block.kwargs[key]) + ' ';
                });

                return '<div '+opts+'></div>';
            }
        }
    }
};
