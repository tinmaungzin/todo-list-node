import util from 'util'
import NodeEnvironment from 'jest-environment-node'
import  ChildProcess from 'child_process'
const exec = util.promisify(ChildProcess.exec)

export default class PrismaTestEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config)
  }

  async setup() {
    await exec(`npx prisma migrate deploy --preview-feature`)
    return super.setup()
  }

  async teardown() {
    await exec(`npx prisma migrate reset --force`)
  }
}
