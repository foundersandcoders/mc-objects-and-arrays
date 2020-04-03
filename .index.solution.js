/*
 * Morning Challenge
 * Objects, Arrays and Array methods
 *
 */
"use strict";

// ==========
// QUESTION 1
// ==========
function getListOfBuildingObjects(bldngs) {
  return Object.values(bldngs);
}

// ==========
// QUESTION 2
// ==========
function getListOfBuildingAddresses(bldngs) {
  return Object.values(bldngs).map(building => building.address);
}

// ==========
// QUESTION 3
// ==========
function filterBuildingsByMinValue(bldngs, minValue) {
  function filterBuildings(newBuildings, id) {
    if (bldngs[id].value >= minValue) newBuildings[id] = bldngs[id];
    return newBuildings;
  }
  return Object.keys(bldngs).reduce(filterBuildings, {});
}

// Alternative answer without reduce:
// function filterBuildingsByMinValue(bldngs, minValue) {
//   const entriesArray = Object.entries(bldngs);
//   const filteredArray = entriesArray.filter(([id, building]) => building.value >= minValue);
//   return Object.fromEntries(filteredArray);
// }

// ==========
// QUESTION 4
// ==========
function filterBuildingsByMaxRooms(bldngs, maxRooms) {
  function filterBuildings(newBuildings, id) {
    if (bldngs[id].rooms <= maxRooms) newBuildings[id] = bldngs[id];
    return newBuildings;
  }
  return Object.keys(bldngs).reduce(filterBuildings, {});
}

// Alternative answer without reduce:
// function filterBuildingsByMaxRooms(bldngs, maxRooms) {
//   const entriesArray = Object.entries(bldngs);
//   const filteredArray = entriesArray.filter(([id, building]) => building.rooms <= maxRooms);
//   return Object.fromEntries(filteredArray);
// }

// ==========
// QUESTION 5
// ==========
function addBuildingIdsToObjects(bldngs) {
  function addIdToBuilding(acc, id) {
    const newBuilding = Object.assign({ id: +id }, bldngs[id]);
    return Object.assign(acc, { [id]: newBuilding });
  }
  return Object.keys(bldngs).reduce(addIdToBuilding, {});
}

// Alternative solution without reduce:
// function addBuildingIdsToObjects(bldngs) {
//   function addIdToBuilding([id, building]) {
//     const newBuilding = Object.assign({}, building, { id: parseInt(id, 10) });
//     return [id, newBuilding];
//   }
//   const entries = Object.entries(bldngs).map(addIdToBuilding);
//   return Object.fromEntries(entries);
// }

// ==========
// QUESTION 6
// ==========
function parseBuildingAddresses(bldngs) {
  function makeAddressObject(address) {
    const [street, town, state, zipcode] = address
      .split(",")
      .map(s => s.trim());
    return { street, town, state, zipcode: parseInt(zipcode, 10) };
  }
  function changeBuildingAddress(newBuilding, id) {
    const address = makeAddressObject(bldngs[id].address);
    return Object.assign(newBuilding, {
      [id]: Object.assign({}, bldngs[id], { address }),
    });
  }
  return Object.keys(bldngs).reduce(changeBuildingAddress, {});
}

// Alternative solution without reduce:
// function parseBuildingAddresses(bldngs) {
//   function makeAddressObject(address) {
//     const [street, town, state, zipcode] = address
//       .split(",")
//       .map(s => s.trim());
//     return { street, town, state, zipcode: parseInt(zipcode, 10) };
//   }
//   function addAddressToBuilding([id, building]) {
//     const address = makeAddressObject(building.address);
//     const newBuilding = Object.assign({}, building, { address });
//     return [id, newBuilding];
//   }
//   const entries = Object.entries(bldngs).map(addAddressToBuilding);
//   return Object.fromEntries(entries);
// }

module.exports = {
  getListOfBuildingObjects,
  getListOfBuildingAddresses,
  filterBuildingsByMinValue,
  filterBuildingsByMaxRooms,
  addBuildingIdsToObjects,
  parseBuildingAddresses,
};
