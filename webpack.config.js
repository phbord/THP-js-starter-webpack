const path = require('path'); // Travailler avec les dossiers
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Configuration principale du projet
module.exports = {

    // Point d'entrée" de ton app
    entry: './src/js/index.js',

    // fichier de sortie
    output: {
        // racine du projet
        path: path.resolve(__dirname, 'dist'),
        // nom du fichier du bundle JS
        filename: 'bundle.js',
        // URL relatif au HTML pour accéder aux assets de l'application
        // le HTML est situé à la racine du projet, donc une chaîne vide
        publicPath: '',
        assetModuleFilename: 'images/[hash][ext][query]'
    },

    // Loaders
    module: {
        rules: [
            // JS
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            // SASS
            {
                test: /\.(sa|sc|c)ss$/, // règle des fichiers .sass, .scss et .cs
                // Attention, les loaders sont ajoutés en sens inverse !!
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader', // permet d'utiliser url() et @import dans ton CSS
                    },
                    {
                        // postCSS : ajoute un minifier ou bien un préfixeur automatique des règles CSS (--moz par exemple)
                        loader: 'postcss-loader',
                    },
                    {
                        // En premier, transformation des SASS en CSS :
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                        },
                    },
                ],
            },
            // Gestion des images
            //      copie l'image dans notre dossier "dist" dans un nouveau dossier nommé "images"
            {
                test: /\.(png|jpg|gif)$/i,
                type: 'asset/resource',
                dependency: { not: ['url'] },
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
                type: 'javascript/auto',
            },
            // Gestion des fonts
            //      copie les polices dans notre dossier "dist" dans un nouveau dossier nommé "fonts"
            {
                test: /\.(woff|woff2|ttf|otf|eot)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "fonts/[hash][ext]"
                },
            },
        ],
    },

    // Plugins
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css',
        }),
    ],

    // Par défaut, le mode de Webpack est "production"
    mode: 'development',
};