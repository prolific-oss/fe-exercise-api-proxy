# Prolific Frontend Exercise Study Cost Calculator API

This repo sets up a simple proxy to the Prolific production api study cost calculator endpoint.

Install deps:

```
$ yarn
```

Start the server:

```
$ yarn start
```

This should start the proxy server on port 3001.

Example request:

```
curl 'http://localhost:3001' -H "Content-Type: application/json" -XPOST --data '{"total_available_places":20,"estimated_completion_time":5,"reward":65}'
```

Example response:

```
{
  "total_cost": 2000,
  "base_cost": 2000,
  "rewards": 1300,
  "fees": 700,
  "vat": 0,
  "_links": {
    "self": {
      "href": "https://www.prolific.co/api/v1/study-cost-calculator/",
      "title": "Current"
    }
  }
}
```
