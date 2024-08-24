/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("43snf5nxfvzuv6p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tsgdi3qf",
    "name": "map",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "1d7c6xz7f7njk0h",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("43snf5nxfvzuv6p")

  // remove
  collection.schema.removeField("tsgdi3qf")

  return dao.saveCollection(collection)
})
