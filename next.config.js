/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== 'production'
const name = 'webgpu-app'

module.exports = {
  assetPrefix: !debug ? `/${name}/` : '',
}