import glob from 'glob';
import path from 'path';

module.exports = {
    'files': glob.sync(path.resolve(__dirname, '../images/icons/*.svg')),
    'fontName': 'Awesomecons',
    'classPrefix': 'ai-',
    'baseClass': 'ai',
    'fixedWidth': true,
    'types': ['eot', 'woff', 'ttf', 'svg'],
    'fileName': 'fonts/[fontname].[hash:3].[ext]'
};