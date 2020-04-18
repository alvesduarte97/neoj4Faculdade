const neo4j = require('neo4j-driver')

const urlBase = 'bolt://localhost:7687';
const userBase = 'neo4j';
const passwordBase = 'faculdade';

const driver = neo4j.driver(urlBase, neo4j.auth.basic(userBase, passwordBase));
const session = driver.session();
const personName = 'Alice'

console.log("Antes");
runNeo();
console.log("Depois");

 
async function runNeo(){
  try {
    const result = await session.run(
      'CREATE (a:Person {name: $name}) RETURN a',
      { name: personName }
    )
  
    const singleRecord = result.records[0]
    const node = singleRecord.get(0)
  
    console.log(node.properties.name)
  } finally {
    await session.close()
  }
  
  // on application exit:
  await driver.close()
}





// const neo4j = require("neo4j-driver");
// const Person = require("./model/person");

// const driver = neo4j.driver(
//   "bolt://localhost:7687",
//   neo4j.auth.basic("neo4j", "faculdade")
// );
// const session = driver.session();
// const personName = "Alice";
// var listPerson = [];

// let alice = new Person();
// alice.nmUser = "Alice";
// alice.nrAge = "22";
// alice.dsNickname = "Ally";
// listPerson.push(alice);

// let arya = new Person();
// arya.nmUser = "Arya";
// arya.nrAge = "23";
// arya.dsNickname = "Ary";
// listPerson.push(arya);

// let maria = new Person();
// maria.nmUser = "Maria";
// maria.nrAge = "51";
// maria.dsNickname = "Dudu";
// listPerson.push(maria);

// console.log("Antes");
// runNeo(listPerson)
// console.log("Depois");

// async function runNeo(listPerson) {
//   try {
//     for (person in listPerson) {
//       const result = await session.run(
//         "CREATE (node:Person {name: $name,nickname: $nickname, age: $age}) RETURN node",
//         { name: person.nmUser, nickname: person.dsNickname,age: person.nrAge }
//       );

//       const singleRecord = result.records[0];
//       const node = singleRecord.get(0);

//       console.log(node.properties.name);
//     }
//   } finally {
//     await session.close();
//   }

//   // on application exit:
//   await driver.close();
// }

