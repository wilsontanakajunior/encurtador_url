const Url = require('../model/UrlModel');
function gerarUrl() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}




class UrlControllers {

    async Index(req, res) {
        const urls = await Url.findAll({ order: [['id', 'ASC']] });
        return res.render('index', { urls: urls });
    }


    async CriaUrl(req, res) {
        const url = req.body.url;
        const data = new Date().toISOString();
        const data1 = new Date().toISOString();

        const urlEncurtada = gerarUrl();
        const dadosInsert = {
            urlNormal: url,
            urlEncurtada: urlEncurtada,
            createdAt: data,
            updatedAt: data1,
        };
        const resultado = await Url.create(dadosInsert)
        res.redirect('/');

    }

}


module.exports = new UrlControllers();