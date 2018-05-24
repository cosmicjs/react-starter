import Cosmic from 'cosmicjs'
const api = Cosmic()
const bucket = api.bucket({
  slug: process.env.COSMIC_BUCKET || 'node-starter',
  read_key: process.env.COSMIC_READ_KEY
})
export default bucket