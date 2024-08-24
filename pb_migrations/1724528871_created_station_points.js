/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "t0km5ai5y2jtx8k",
    "created": "2024-08-24 19:47:51.557Z",
    "updated": "2024-08-24 19:47:51.557Z",
    "name": "station_points",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wfxfxlfn",
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
      },
      {
        "system": false,
        "id": "14lfsull",
        "name": "station",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "wymr6rd9vk2yz6i",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "z7vjd9kp",
        "name": "points",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [
      "CREATE UNIQUE INDEX `idx_OKBvXiN` ON `station_points` (\n  `team`,\n  `station`\n)",
      "CREATE INDEX `idx_aLVwURe` ON `station_points` (`team`)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("t0km5ai5y2jtx8k");

  return dao.deleteCollection(collection);
})
