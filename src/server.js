const neo4j = require("neo4j-driver");
const Person = require("./model/person");

const driver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic("neo4j", "faculdade")
);
const session = driver.session();
const personName = "Alice";
var listPerson = [];

let alice = new Person();
alice.nmUser = "Alice";
alice.nrAge = "22";
alice.dsNickname = "Ally";
listPerson.push(alice);

let arya = new Person();
arya.nmUser = "Arya";
arya.nrAge = "23";
arya.dsNickname = "Ary";
listPerson.push(arya);

let maria = new Person();
maria.nmUser = "Maria";
maria.nrAge = "51";
maria.dsNickname = "Dudu";
listPerson.push(maria);

console.log("Antes");
runNeo(listPerson)
console.log("Depois");

async function runNeo(listPerson) {
  try {
    for (person of listPerson) {
      const result = await session.run(
        "CREATE (node:Person {name: $name,nickname: $nickname, age: $age}) RETURN node",
        { name: person.nmUser, nickname: person.dsNickname,age: person.nrAge }
      );

      const singleRecord = result.records[0];
      const node = singleRecord.get(0);

      console.log("NODE:" ,node.properties);
    }
  } finally {
    await session.close();
  }

  // on application exit:
  await driver.close();
}

