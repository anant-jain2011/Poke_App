export default function handler(req, res) {
  res.status(200).json({
    name: "Poke-App",
    category: "fantasy"
  })
}
