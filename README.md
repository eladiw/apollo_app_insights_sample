# apollo_app_insights_sample

This is a sample application which expose a graphql interface + Apollo to query ApplicationInsights.

## Installation
Clone this repository:
```
git clone https://github.com/eladiw/apollo_app_insights_sample.git .
```


Run the web-server:
```
npm start
```

Browse to http://localhost:8080/graphiql and test the app!
Query Example:

```
query AIRequest($appId: String!, $appkey: String!, $path: String!) {
  ApplicationInsightsData: appindata(id: $appId, key: $appkey, path: $path)
}
```

Params
```
{
  "appId": "xxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
  "appkey": "xxxxXXXXXX5q0ja",
  "path": "/metrics/exceptions/count"
}
```

