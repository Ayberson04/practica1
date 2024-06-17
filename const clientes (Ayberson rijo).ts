const clientes = [
  {
    id: 1,
    name: "Ayberson",
    lastname: "Rijo",
    age: 30,
    services: [
      { name: "Netflix", status: true },
      { name: "Spotify", status: false }
    ]
  },
  {
    id: 2,
    name: "Juan",
    lastname: "Perez",
    age: 25,
    services: [
      { name: "Netflix", status: false },
      { name: "HBO+", status: false }
    ]
  },
  {
    id: 3,
    name: "Bartolo",
    lastname: "Gimenes",
    age: 35,
    services: [
      { name: "HBO+", status: true },
      { name: "Disney+", status: false }
    ]
  },
  {
    id: 4,
    name: "Ana",
    lastname: "Gomez",
    age: 28,
    services: [
      { name: "Netflix", status: true },
      { name: "Spotify", status: true }
    ]
  },
  {
    id: 5,
    name: "Maria",
    lastname: "Lopez",
    age: 40,
    services: [
      { name: "Amazon Prime", status: true },
      { name: "Disney+", status: false }
    ]
  }
];

function mostrarNotificaciones(clientes) {
  clientes.forEach(cliente => {
    console.log(`Cliente ${cliente.name} ${cliente.lastname}:`);
    cliente.services.forEach(service => {
      const estado = service.status ? "Activo" : "Inactivo";
      console.log(`- Su servicio ${service.name} está ${estado}.`);
    });
    console.log(''); 
  });
}


mostrarNotificaciones(clientes);
console.log("Hello world!");