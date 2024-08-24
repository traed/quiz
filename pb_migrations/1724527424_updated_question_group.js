/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aon7p28lv4qnwe1")

  collection.indexes = [
    "CREATE INDEX `idx_WtweZEk` ON `question_group` (`form`)",
    "CREATE INDEX `idx_Wq6WlSS` ON `question_group` (`sort_order`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("aon7p28lv4qnwe1")

  collection.indexes = []

  return dao.saveCollection(collection)
})
