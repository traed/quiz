/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2z2jw13jqdylogk")

  collection.indexes = [
    "CREATE INDEX `idx_YXfpTM3` ON `team_categories` (`competition`)",
    "CREATE INDEX `idx_Jc4Ifpj` ON `team_categories` (`is_crew`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2z2jw13jqdylogk")

  collection.indexes = []

  return dao.saveCollection(collection)
})
