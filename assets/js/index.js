const arrayRadiologia = [
    {
        hora: '11:00',
        especialista: 'IGNACIO SCHULZ',
        paciente: 'FRANCISCA ROJAS',
        rut: '9878782-1',
        prevision: 'FONASA'
    },
    {
        hora: '11:30',
        especialista: 'FEDERICO SUBERCASEAUX',
        paciente: 'PAMELA ESTRADA',
        rut: '15345241-3',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:00',
        especialista: 'FERNANDO WURTHZ',
        paciente: 'ARMANDO LUNA',
        rut: '16445345-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '15:30',
        especialista: 'ANA MARIA GODOY',
        paciente: 'MANUEL GODOY',
        rut: '17666419-0',
        prevision: 'FONASA'
    },
    {
        hora: '16:00',
        especialista: 'PATRICIA SUAZO',
        paciente: 'RAMON ULLOA',
        rut: '14989389-K',
        prevision: 'FONASA'
    }
]

const arrayTraumatologia = [
    {
        hora: '8:00',
        especialista: 'MARIA PAZ ALTUZARRA',
        paciente: 'PAULA SANCHEZ',
        rut: '15554774-5',
        prevision: 'FONASA'
    },
    {
        hora: '10:00',
        especialista: 'RAUL ARAYA',
        paciente: 'ANGÉLICA NAVAS',
        rut: '15444147-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '10:30',
        especialista: 'MARIA ARRIAGADA',
        paciente: 'ANA KLAPP',
        rut: '17879423-9',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especialista: 'ALEJANDRO BADILLA',
        paciente: 'FELIPE MARDONES',
        rut: '1547423-6',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30',
        especialista: 'CECILIA BUDNIK',
        paciente: 'DIEGO MARRE',
        rut: '16554741-K',
        prevision: 'FONASA'
    },
    {
        hora: '12:00',
        especialista: 'ARTURO CAVAGNARO',
        paciente: 'CECILIA MENDEZ',
        rut: '9747535-8',
        prevision: 'ISAPRE'
    },
    {
        hora: '12:30',
        especialista: 'ANDRES KANACRI',
        paciente: 'MARCIAL SUAZO',
        rut: '11254785-5',
        prevision: 'ISAPRE'
    }
]

const arrayDental = [
    {
        hora: '8:30',
        especialista: 'ANDREA ZUÑIGA',
        paciente: 'MARCELA RETAMAL',
        rut: '11123425-6',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:00',
        especialista: 'MARIA PIA ZAÑARTU',
        paciente: 'ANGEL MUÑOZ',
        rut: '9878789-2',
        prevision: 'ISAPRE'
    },
    {
        hora: '11:30',
        especialista: 'SCARLETT WITTING',
        paciente: 'MARIO KAST',
        rut: '7998789-5',
        prevision: 'FONASA'
    },
    {
        hora: '13:00',
        especialista: 'FRANCISCO VON TEUBER',
        paciente: 'KARIN FERNANDEZ',
        rut: '18887662-K',
        prevision: 'FONASA'
    },
    {
        hora: '13:30',
        especialista: 'EDUARDO VIÑUELA',
        paciente: 'HUGO SANCHEZ',
        rut: '17665461-4',
        prevision: 'FONASA'
    },
    {
        hora: '14:00',
        especialista: 'RAQUEL VILLASECA',
        paciente: 'ANA SEPULVEDA',
        rut: '14441281-0',
        prevision: 'ISAPRE'
    }
]

document.write(`<h4 class="ms-4">ESTADÍSTICAS CENTRO MÉDICO ÑUÑOA: Radiología</h4>`)

let texto ="<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>"
for (let i = 0; i < arrayRadiologia.length; i++) {
    texto += `<tr>
<td>${arrayRadiologia[i].hora}</td>
<td>${arrayRadiologia[i].especialista}</td>
<td>${arrayRadiologia[i].paciente}</td>
<td>${arrayRadiologia[i].rut}</td>
<td>${arrayRadiologia[i].prevision}</td>
</tr>`;
}

document.getElementById("cuerpo-tabla-radiologia").innerHTML = texto;

let tablaRadiologia = document.getElementById(`listado-radiologia`)
let contenidoRadiologia = `<tbody>`
document.write(`<p class="ms-4">Primer paciente: ${arrayRadiologia[0].paciente}-${arrayRadiologia[0].prevision} |
Último paciente: ${arrayRadiologia[arrayRadiologia.length - 1].paciente}-${arrayRadiologia[arrayRadiologia.length - 1].prevision}</p>`)

document.write(`<h4 class="ms-4">ESTADÍSTICAS CENTRO MÉDICO ÑUÑOA: Traumatología</h4>`)

let texto2 ="<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>"
for (let i = 0; i < arrayTraumatologia.length; i++) {
    texto2 += `<tr>
<td>${arrayTraumatologia[i].hora}</td>
<td>${arrayTraumatologia[i].especialista}</td>
<td>${arrayTraumatologia[i].paciente}</td>
<td>${arrayTraumatologia[i].rut}</td>
<td>${arrayTraumatologia[i].prevision}</td>
</tr>`;
}

document.getElementById("cuerpo-tabla-traumatologia").innerHTML = texto2;

let tablaTraumatologia = document.getElementById(`listado-traumatologia`)
let contenidoTraumatologia = `<tbody>`
document.write(`<p class="ms-4">Primer paciente: ${arrayTraumatologia[0].paciente}-${arrayTraumatologia[0].prevision} |
Último paciente: ${arrayTraumatologia[arrayTraumatologia.length - 1].paciente}-${arrayTraumatologia[arrayTraumatologia.length - 1].prevision}</p>`)

document.write(`<h4 class="ms-4">ESTADÍSTICAS CENTRO MÉDICO ÑUÑOA: Dental</h4>`)

let texto3 ="<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>"
for (let i = 0; i < arrayDental.length; i++) {
    texto3 += `<tr>
<td>${arrayDental[i].hora}</td>
<td>${arrayDental[i].especialista}</td>
<td>${arrayDental[i].paciente}</td>
<td>${arrayDental[i].rut}</td>
<td>${arrayDental[i].prevision}</td>
</tr>`;
}

document.getElementById("cuerpo-tabla-dental").innerHTML = texto3;

let tablaDental = document.getElementById(`listado-dental`)
let contenidoDental = `<tbody>`
document.write(`<p class="ms-4">Primer paciente: ${arrayDental[0].paciente}-${arrayDental[0].prevision} |
Último paciente: ${arrayDental[arrayDental.length - 1].paciente}-${arrayDental[arrayDental.length - 1].prevision}</p>`)

