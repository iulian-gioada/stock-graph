import mockData from "./mockData.json";

const MockFetch = async () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve({
        json: async () => mockData,
      }), 3000)
    })
}

export default MockFetch;
