/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("43snf5nxfvzuv6p")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ggp4gmpx",
    "name": "category",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "2z2jw13jqdylogk",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mm30enfs",
    "name": "payment",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("43snf5nxfvzuv6p")

  // remove
  collection.schema.removeField("ggp4gmpx")

  // remove
  collection.schema.removeField("mm30enfs")

  return dao.saveCollection(collection)
})
