/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tkxo90577eysqmb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d4go1axv",
    "name": "station",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "wymr6rd9vk2yz6i",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("tkxo90577eysqmb")

  // remove
  collection.schema.removeField("d4go1axv")

  return dao.saveCollection(collection)
})
