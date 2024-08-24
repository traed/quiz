/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "e2ot833ebsbpbe4",
    "created": "2024-08-24 19:41:38.402Z",
    "updated": "2024-08-24 19:41:38.402Z",
    "name": "points",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "owjgx4al",
        "name": "question",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "4ho9vt4jydolppv",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "39qffbx8",
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
        "id": "pvzscsla",
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
      "CREATE UNIQUE INDEX `idx_gEwCjS4` ON `points` (\n  `question`,\n  `team`\n)"
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
  const collection = dao.findCollectionByNameOrId("e2ot833ebsbpbe4");

  return dao.deleteCollection(collection);
})
