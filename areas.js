function quadrado(req, res){
    let lado = req.params.lado;
    let resultado = lado*lado;
    res.json({resultado});
}

function triangulo(req, res){
    let base = req.params.base;
    let altura = req.params.altura;
    let resultado = (base*altura)/2;
    res.json({resultado});
}

function retangulo(req, res){
    let base = req.params.base;
    let altura = req.params.altura;
    let resultado = base*altura;
    res.json({resultado});
}

module.exports = {
    quadrado,
    triangulo,
    retangulo
}
