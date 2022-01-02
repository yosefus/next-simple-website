import data from '../../data/data';

export default async function getAllData(req, res) {
  await res.json(data);
}
