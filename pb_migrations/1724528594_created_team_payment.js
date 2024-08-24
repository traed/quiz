/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vunxf16qq4owhvx",
    "created": "2024-08-24 19:43:14.584Z",
    "updated": "2024-08-24 19:43:14.584Z",
    "name": "team_payment",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "q9quxjc9",
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
        "id": "mvr3ftl3",
        "name": "amount",
        "type": "number",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": null,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "eqtkzbzk",
        "name": "note",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_k4j8Nwq` ON `team_payment` (`team`)"
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
  const collection = dao.findCollectionByNameOrId("vunxf16qq4owhvx");

  return dao.deleteCollection(collection);
})
