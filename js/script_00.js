document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que la página se recargue
        
        let entrada = document.getElementById('entrada').value;
        
        // Primero reemplazamos espacios por 💤
        entrada = entrada.replace(/ /g, '💤');
        
        // Luego reemplazamos vocales (minúsculas y mayúsculas)
        entrada = entrada
            .replace(/[aáàäâã]/gi, '👍')   // a en todas sus formas
            .replace(/[eéèëê]/gi, '🤙')    // e
            .replace(/[iíìïî]/gi, '🖕')    // i
            .replace(/[oóòöôõ]/gi, '👌')    // o
            .replace(/[uúùüû]/gi, '🤘');   // u

        // Sigo reemplazando consonantes (minúsculas y mayúsculas)
        entrada = entrada
            .replace(/b/gi, '🐝')  // b
            .replace(/c/gi, '🌊')  // c
            .replace(/d/gi, '🐬')  // d
            .replace(/f/gi, '🍟')  // f
            .replace(/g/gi, '🦍')  // g
            .replace(/h/gi, '🏠')  // h
            .replace(/j/gi, '🕹️') // j
            .replace(/k/gi, '🔪')  // k
            .replace(/l/gi, '🦁')  // l
            .replace(/m/gi, '🍈')  // m
            .replace(/ñ/gi, '🌜')  // ñ
            .replace(/n/gi, '🎶')  // n
            .replace(/p/gi, '🍍')  // p
            .replace(/q/gi, '👸')  // q
            .replace(/r/gi, '🤖')  // r
            .replace(/s/gi, '🐍')  // s
            .replace(/t/gi, '🌴')  // t
            .replace(/v/gi, '🎻')  // v
            .replace(/w/gi, '🚀') // w
            .replace(/x/gi, '❌')  // x
            .replace(/y/gi, '🛳️') // y
            .replace(/z/gi, '⚡'); // z

        // Crear un elemento para mostrar el resultado
        const resultadoDiv = document.createElement('div');
        resultadoDiv.innerHTML = `<p><strong>Resultado:</strong> ${entrada}</p>`;
        resultadoDiv.style.marginTop = '20px';
        resultadoDiv.style.padding = '10px';
        resultadoDiv.style.backgroundColor = '#f0f0f0';
        resultadoDiv.style.borderRadius = '5px';
        resultadoDiv.style.width = '500px';
        resultadoDiv.style.wordBreak = 'break-word';
        
        // Insertar el resultado debajo del formulario
        form.parentNode.insertBefore(resultadoDiv, form.nextSibling);
    });
});