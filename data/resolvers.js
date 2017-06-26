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
      const dataPromise = appInsightsData(id, key, path);
      dataPromise.then((data) => {
        Promise.resolve(data);
      });

      const res = await Promise.all([dataPromise]);
      return res[0];
    },
  },
};

export default resolveFunctions;
