### Object Short Syntax



    
    
    const nome = 'Diego Moreno'
    const idade = 32
    const cidade = 'São Paulo'
    //old
    const dados = {
      nome: nome,
      idade: idade,
      cidade: cidade
    }
    //new
    
    const dados = {
      nome,
      idade,
      cidade
    }
    
    // ES5
    var multiplyES5 = function (x, y) {
      return x * y;
    };
    
    // ES6
    const multiplyES6 = (x, y) => { return x * y };
    
    // ES5
    
    aAsync().then(function () {
      returnbAsync();
    }).then(function () {
      returncAsync();
    }).done(function () {
      finish();
    });
    
    // ES6
    aAsync().then(() => bAsync()).then(() => cAsync()).done(() => finish);
