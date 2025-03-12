window.onload = function() {
    obtenerPilotos();
}

async function obtenerPilotos() {
    let respuesta = await fetch("https://ergast.com/api/f1/current/drivers.json");
    let datos = await respuesta.json();
    let pilotos = datos.MRData.DriverTable.Drivers;
    
    mostrarEquipos(pilotos);
}

function mostrarEquipos(pilotos) {
    let equipos = {
        "Ferrari": ["Sainz", "Leclerc", "Bearman"],
        "Red Bull": ["Pérez", "Verstappen"],
        "Williams": ["Albon", "Sargeant", "Colapinto"],
        "McLaren": ["Norris", "Piastri"],
        "Stake": ["Bottas", "Zhou"],
        "Aston Martin": ["Alonso", "Stroll"],
        "Alpine": ["Ocon", "Gasly", "Doohan"],
        "Mercedes": ["Hamilton", "Russell"],
        "AlphaTauri": ["Tsunoda", "Ricciardo", "Lawson"],
        "Haas": ["Hülkenberg", "Magnussen"]
    };

    let almacen = document.createElement('div');
    almacen.classList.add('almacen-equipos');
    document.body.append(almacen);

    for (let equipo in equipos) {
        let tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta-equipo');
        tarjeta.setAttribute('data-equipo', equipo);

        tarjeta.style.backgroundImage = 'url("bandera.png")';

        let imagenEquipo = document.createElement('img');
        switch (equipo) {
            case "Ferrari":
                imagenEquipo.src = 'ferrari.png';
                break;
            case "Red Bull":
                imagenEquipo.src = 'redbull.png';
                break;
            case "Williams":
                imagenEquipo.src = 'williams.png';
                break;
            case "McLaren":
                imagenEquipo.src = 'mclaren.jpg';
                break;
            case "Stake":
                imagenEquipo.src = 'Stake.jpg';
                break;
            case "Aston Martin":
                imagenEquipo.src = 'astonmartin.png';
                break;
            case "Alpine":
                imagenEquipo.src = 'Alpine.svg.png';
                break;
            case "Mercedes":
                imagenEquipo.src = 'mercedes.png';
                break;
            case "AlphaTauri":
                imagenEquipo.src = 'redbull1.jpg';
                break;
            case "Haas":
                imagenEquipo.src = 'Haas.png';
                break;
        }
        imagenEquipo.classList.add('imagen-equipo');
        tarjeta.append(imagenEquipo);

        tarjeta.addEventListener('click', function() {
            mostrarPilotos(equipo, pilotos);
        });
        tarjeta.addEventListener('contextmenu', function(event) {
            event.preventDefault();
            mostrarFotosPilotos(equipo, pilotos);
        });

        almacen.append(tarjeta);
    }
}

function mostrarPilotos(equipo, pilotos) {
    let equipos = {
        "Ferrari": ["Sainz", "Leclerc", "Bearman"],
        "Red Bull": ["Pérez", "Verstappen"],
        "Williams": ["Albon", "Sargeant", "Colapinto"],
        "McLaren": ["Norris", "Piastri"],
        "Stake": ["Bottas", "Zhou"],
        "Aston Martin": ["Alonso", "Stroll"],
        "Alpine": ["Ocon", "Gasly", "Doohan"],
        "Mercedes": ["Hamilton", "Russell"],
        "AlphaTauri": ["Tsunoda", "Ricciardo", "Lawson"],
        "Haas": ["Hülkenberg", "Magnussen"]
    };

    let almacen = document.querySelector('.almacen-pilotos');
    if (!almacen) {
        almacen = document.createElement('div');
        almacen.classList.add('almacen-pilotos');
        document.body.append(almacen);
    } else {
        almacen.innerHTML = ''; 
    }

    let pilotosEquipo = equipos[equipo];

    for (let piloto of pilotos) {
        for (let i = 0; i < pilotosEquipo.length; i++) {
            if (piloto.familyName === pilotosEquipo[i]) {
                let tarjeta = document.createElement('div');
                tarjeta.classList.add('tarjeta-piloto');

                let nombrePiloto = document.createElement('h3');
                nombrePiloto.innerHTML = `${piloto.givenName} ${piloto.familyName}`;
                tarjeta.append(nombrePiloto);

                let nacionalidadPiloto = document.createElement('p');
                nacionalidadPiloto.innerHTML = `Nacionalidad: ${piloto.nationality}`;
                tarjeta.append(nacionalidadPiloto);

                let numeroPiloto = document.createElement('p');
                numeroPiloto.innerHTML = `Número: ${piloto.permanentNumber || 'N/A'}`;
                tarjeta.append(numeroPiloto);

                let nacimientoPiloto = document.createElement('p');
                nacimientoPiloto.innerHTML = `Fecha de nacimiento: ${piloto.dateOfBirth}`;
                tarjeta.append(nacimientoPiloto);

                tarjeta.addEventListener('mouseover', function() {
                    tarjeta.classList.add('centrar-tarjeta');
                    
                });

                tarjeta.addEventListener('mouseout', function() {
                    tarjeta.classList.remove('centrar-tarjeta');
                });

                almacen.append(tarjeta);
                break; 
            }
        }
    }
}
function mostrarFotosPilotos(equipo, pilotos) {
    let equipos = {
        "Ferrari": ["Bearman", "Leclerc", "Sainz"],
        "Red Bull": ["Pérez", "Verstappen"],
        "Williams": ["Albon", "Colapinto", "Sargeant"],
        "McLaren": ["Norris", "Piastri"],
        "Stake": ["Bottas", "Zhou"],
        "Aston Martin": ["Alonso", "Stroll"],
        "Alpine": ["Doohan", "Gasly", "Ocon"],
        "Mercedes": ["Hamilton", "Russell"],
        "AlphaTauri": ["Lawson", "Ricciardo", "Tsunoda"],
        "Haas": ["Hülkenberg", "Magnussen"]
    };

    let pilotosEquipo = equipos[equipo];
    let almacen = document.querySelector('.almacen-pilotos');
    if (!almacen) {
        almacen = document.createElement('div');
        almacen.classList.add('almacen-pilotos');
        document.body.append(almacen);
    } else {
        almacen.innerHTML = ''; 
    }

    for (let i = 0; i < pilotosEquipo.length; i++) {
        let piloto = pilotos.find /*chat*/(p => p.familyName === pilotosEquipo[i]); 
        if (piloto) {
            let imagenPiloto = document.createElement('img');
            switch (piloto.familyName) {
                case "Bearman":
                    imagenPiloto.src = 'bearman.jpg';
                    break;
                case "Leclerc":
                    imagenPiloto.src = 'leclerc.jpg';
                    break;
                case "Sainz":
                    imagenPiloto.src = 'sainz.jpg';
                    break;
                case "Pérez":
                    imagenPiloto.src = 'perez.jpg';
                    break;
                case "Verstappen":
                    imagenPiloto.src = 'Vestappen.webp';
                    break;
                case "Albon":
                    imagenPiloto.src = 'albon.jpg';
                    break;
                case "Sargeant":
                    imagenPiloto.src = 'sargeant.jpg';
                    break;
                case "Colapinto":
                    imagenPiloto.src = 'colapinto.jpg';
                    break;
                case "Norris":
                    imagenPiloto.src = 'norris.jpg';
                    break;
                case "Piastri":
                    imagenPiloto.src = 'piastri.jpg';
                    break;
                case "Bottas":
                    imagenPiloto.src = 'bottas.jpg';
                    break;
                case "Zhou":
                    imagenPiloto.src = 'zhou.jpg';
                    break;
                case "Alonso":
                    imagenPiloto.src = 'alonso.jpg';
                    break;
                case "Stroll":
                    imagenPiloto.src = 'stroll.jpg';
                    break;
                case "Ocon":
                    imagenPiloto.src = 'ocon.jpg';
                    break;
                case "Gasly":
                    imagenPiloto.src = 'gasly.jpg';
                    break;
                case "Doohan":
                    imagenPiloto.src = 'doohan.jpg';
                    break;
                case "Hamilton":
                    imagenPiloto.src = 'hamilton.jpg';
                    break;
                case "Russell":
                    imagenPiloto.src = 'russell.jpg';
                    break;
                case "Tsunoda":
                    imagenPiloto.src = 'tsunoda.jpg';
                    break;
                case "Ricciardo":
                    imagenPiloto.src = 'ricciardo.jpg';
                    break;
                case "Lawson":
                    imagenPiloto.src = 'lawson.jpg';
                    break;
                case "Hülkenberg":
                    imagenPiloto.src = 'hulkenberg.jpg';
                    break;
                case "Magnussen":
                    imagenPiloto.src = 'magnussen.jpg';
                    break;
            }
            imagenPiloto.classList.add('imagen-piloto');
            almacen.append(imagenPiloto);
        }
    }
}