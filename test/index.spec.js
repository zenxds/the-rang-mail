const config = require('config')
const mailConfig = config.get('mail')

const Mail = require('../lib/Mail')

describe('index', () => {

  test('it should send mail', async() => {
    const mail = new Mail({
      user: mailConfig.user,
      password: mailConfig.password
    })

    const info = await mail.send({
      from: mailConfig.from,
      to: mailConfig.user,
      subject: 'test',
      html: 'test content'
    })

    expect(info).toBeTruthy()
  })

})