import { http, HttpResponse } from 'msw'
import { faker } from '@faker-js/faker/locale/zh_CN'

// axios、基于axios的axle.js、请求策略库alova.js

export const UserHandles = [
  http.get('/api/user', (res) => {
    console.log(res)
    return HttpResponse.json({
      code: 0,
      message: 'success',
      data: Array.from({ length: Number(res.params.size) || 10 }).map(() => {
        return {
          id: faker.string.numeric(10),
          uuid: faker.string.uuid(),
          nanoid: faker.string.nanoid({ min: 10, max: 15 }),
          name: faker.person.fullName(),
          email: faker.internet.email(),
          sex: faker.person.sex(),
          county: faker.location.county(),
          city: faker.location.city(),
          address: faker.location.streetAddress(),
          phone: faker.phone.number(),
          avatar: faker.image.url(),
          birthday: faker.date.birthdate().toLocaleString(),
          createdAt: faker.date.past().toLocaleString(),
          updatedAt: faker.date.recent().toLocaleString()
        }
      })
    })
  }),
  http.get('/api/user/:id', ({ params }) => {
    return HttpResponse.json({
      code: 0,
      message: 'success',
      data: {
        id: params.id,
        uuid: faker.string.uuid(),
        name: faker.person.fullName(),
        email: faker.internet.email(),
        sex: faker.person.sex(),
        address: faker.location.streetAddress(),
        phone: faker.phone.number(),
        avatar: faker.image.avatar(),
        birthday: faker.date.birthdate().toLocaleString(),
        createdAt: faker.date.past().toLocaleString(),
        updatedAt: faker.date.recent().toLocaleString()
      }
    })
  })
]
