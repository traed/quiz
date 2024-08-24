/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kokesfyqs3q530h")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zzny1cdh",
    "name": "team",
    "type": "relation",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "43snf5nxfvzuv6p",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sjxzlorl",
    "name": "answer",
    "type": "json",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSize": 2000000
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "97vykjca",
    "name": "is_reviewed",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("kokesfyqs3q530h")

  // remove
  collection.schema.removeField("zzny1cdh")

  // remove
  collection.schema.removeField("sjxzlorl")

  // remove
  collection.schema.removeField("97vykjca")

  return dao.saveCollection(collection)
})
