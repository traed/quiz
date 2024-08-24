/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t4ndf75czndzal8")

  collection.indexes = [
    "CREATE UNIQUE INDEX `idx_GbkE464` ON `payment_transactions` (`id_key`)",
    "CREATE INDEX `idx_pr9H1Kz` ON `payment_transactions` (`competition`)"
  ]

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("t4ndf75czndzal8")

  collection.indexes = []

  return dao.saveCollection(collection)
})
