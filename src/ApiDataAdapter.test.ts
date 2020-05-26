import ApiDataAdapter from './ApiDataAdapter';

test('ApiDataAdapter.getGraphData returns an array of points including the average computed based on the close value', () => {
  const mockData = {
    chart: {
      result: [
        {
          timestamp: [1, 2, 3, 4, 5],
          indicators: {
            quote: [
              {
                open: [1, 2, 3, 4, 5],
                close: [10, 20, 30, 40, 50],
              }
            ]
          }
        }
      ]
    }
  }
  const arrangedAverage = 30

  const adapter = new ApiDataAdapter(mockData);
  const points = adapter.getGraphData()

  const averagesMatch = points.reduce((result, { av: { average } }) => {
    return result && average === arrangedAverage
  }, true)
  expect(averagesMatch).toEqual(true);
});
