/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vunxf16qq4owhvx")

  collection.indexes = [
    "CREATE INDEX `idx_k4j8Nwq` ON `team_payment` (`team`)",
    "CREATE INDEX `idx_B4MEcbc` ON `team_payment` (`transaction`)"
  ]

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k5kzzr88",
    "name": "transaction",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "t4ndf75czndzal8",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vunxf16qq4owhvx")

  collection.indexes = [
    "CREATE INDEX `idx_k4j8Nwq` ON `team_payment` (`team`)"
  ]

  // remove
  collection.schema.removeField("k5kzzr88")

  return dao.saveCollection(collection)
})
