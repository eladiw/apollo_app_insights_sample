import rp from 'request-promise';

const appInsightsData = function appInsightsData(id, key, path) {
  const options = {
    uri: `https://api.applicationinsights.io/beta/apps/${id}${path}`,
    method: 'GET',
    headers: {
      'x-api-key': key,
    },
  };

  return rp(options);
};

const resolveFunctions = {
  Query: {
    async appindata(_, { id, key, path }) {
      const p = appInsightsData(id, key, path);
      var res = p.then((data) => {
        Promise.resolve(data);
      });

      res = await Promise.all([p]);
      return res[0];
    },
  },
};

export default resolveFunctions;
