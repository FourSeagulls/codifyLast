document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('miFormulario');
            const btnDescodificar = document.getElementById('btnDescodificar');
            const entradaInput = document.getElementById('entrada');

            // Emojis cíclicos para espacios
            const emojisEspacio = ['💤', '🌀', '🌈', '⭐', '🍕'];
            let indiceEspacio = 0;

            // Función para codificar
            function codificar(texto) {
                // Reiniciamos el índice cada vez que codificamos (opcional, puedes quitarlo si quieres continuidad)
                indiceEspacio = 0;

                // Reemplazar espacios con emojis cíclicos
                let resultado = texto.replace(/ /g, function() {
                    const emojiActual = emojisEspacio[indiceEspacio];
                    indiceEspacio = (indiceEspacio + 1) % emojisEspacio.length; // ciclo
                    return emojiActual;
                });

                // Reemplazar vocales y consonantes
                resultado = resultado
                    .replace(/a/gi, '👍')
                    .replace(/e/gi, '🤙')
                    .replace(/i/gi, '🖕')
                    .replace(/o/gi, '👌')
                    .replace(/u/gi, '🤘')
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

                return resultado;
            }

            // Función para descodificar
            function descodificar(texto) {
                // Primero revertimos secuencias y letras
                let resultado = texto
                    .replace(/⚡/g, 'z')
                    .replace(/🛳️/g, 'y')
                    .replace(/❌/g, 'x')
                    .replace(/🚀/g, 'w')
                    .replace(/🎻/g, 'v')
                    .replace(/🌴/g, 't')
                    .replace(/🐍/g, 's')
                    .replace(/🤖/g, 'r')
                    .replace(/👸/g, 'q')
                    .replace(/🍍/g, 'p')
                    .replace(/🎶/g, 'n')
                    .replace(/🌜/g, 'ñ')
                    .replace(/🍈/g, 'm')
                    .replace(/🦁/g, 'l')
                    .replace(/🔪/g, 'k')
                    .replace(/🕹️/g, 'j')
                    .replace(/🏠/g, 'h')
                    .replace(/🦍/g, 'g')
                    .replace(/🍟/g, 'f')
                    .replace(/🐬/g, 'd')
                    .replace(/🌊/g, 'c')
                    .replace(/🐝/g, 'b')
                    .replace(/🤘/g, 'u')
                    .replace(/👌/g, 'o')
                    .replace(/🖕/g, 'i')
                    .replace(/🤙/g, 'e')
                    .replace(/👍/g, 'a');

                // Luego, cualquier emoji de espacio lo volvemos a " "
                const regexEmojisEspacio = new RegExp(`[${emojisEspacio.join('')}]`, 'g');
                resultado = resultado.replace(regexEmojisEspacio, ' ');

                return resultado;
            }

            // Manejar envío del formulario (codificar)
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                
                const entrada = entradaInput.value;
                const resultado = codificar(entrada);
                
                // Mostrar resultado debajo
                mostrarResultado(resultado);
            });

            // Manejar clic en botón descodificar
            btnDescodificar.addEventListener('click', function() {
                const entrada = entradaInput.value;
                const resultado = descodificar(entrada);
                
                mostrarResultado(resultado);
            });

            // Función auxiliar para mostrar el resultado
            function mostrarResultado(texto) {
                // Eliminar resultados anteriores (opcional, para no acumular)
                const resultadosAnteriores = document.querySelectorAll('.resultado');
                resultadosAnteriores.forEach(el => el.remove());

                // Crear nuevo div de resultado
                const resultadoDiv = document.createElement('div');
                resultadoDiv.className = 'resultado';
                resultadoDiv.innerHTML = `<p><strong>Resultado:</strong> ${texto}</p>`;
                resultadoDiv.style.marginTop = '20px';
                resultadoDiv.style.padding = '10px';
                resultadoDiv.style.backgroundColor = '#f0f0f0';
                resultadoDiv.style.borderRadius = '5px';
                resultadoDiv.style.width = '500px';
                resultadoDiv.style.wordBreak = 'break-word';

                // Insertar debajo del formulario
                form.parentNode.insertBefore(resultadoDiv, form.nextSibling);
            }
        });